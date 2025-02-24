import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import CardList from "./CardList";
import Header from "../Header";

const Kanban = () => {
  const [allTodos, setAllTodos] = useState([]);
  const [notStartedTodos, setNotStartedTodos] = useState([]);
  const [startedTodos, setStartedTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [priorityFilter, setPriorityFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://creative-backend-7c3k.onrender.com/tasks/');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        
        // Transform _id to id for compatibility
        const transformedData = data.map(todo => ({
          ...todo,
          id: todo._id
        }));

        setAllTodos(transformedData);
        applyFilters(transformedData, priorityFilter, dateFilter);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleTaskAdded = (newTask) => {
    const updatedTodos = [...allTodos, { ...newTask, id: newTask._id }];
    setAllTodos(updatedTodos);
    applyFilters(updatedTodos, priorityFilter, dateFilter);
  };

  const applyFilters = (todos, priority, date) => {
    let filteredTodos = [...todos];

    if (priority) {
      if (priority === "completed") {
        filteredTodos = filteredTodos.filter(todo => todo.status === "completed");
      } else {
        filteredTodos = filteredTodos.filter(todo => todo.priority === priority);
      }
    }

    if (date) {
      filteredTodos = filteredTodos.filter(todo => {
        if (todo.createdAt) {
          return new Date(todo.createdAt).toISOString().split('T')[0] === date;
        }
        return false;
      });
    }

    setNotStartedTodos(filteredTodos.filter(todo => todo.status === "not started"));
    setStartedTodos(filteredTodos.filter(todo => todo.status === "in progress"));
    setCompletedTodos(filteredTodos.filter(todo => todo.status === "completed"));
  };

  const handleFilterChange = (priority) => {
    setPriorityFilter(priority);
    applyFilters(allTodos, priority, dateFilter);
  };

  const handleDateChange = (date) => {
    setDateFilter(date);
    applyFilters(allTodos, priorityFilter, date);
  };

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;

    // If dropped in the same position, do nothing
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const sourceList = 
      source.droppableId === "1" ? notStartedTodos :
      source.droppableId === "2" ? startedTodos :
      completedTodos;

    const destinationList =
      destination.droppableId === "1" ? notStartedTodos :
      destination.droppableId === "2" ? startedTodos :
      completedTodos;

    const movedTask = sourceList[source.index];

    // Remove from source list
    const newSourceList = [...sourceList];
    newSourceList.splice(source.index, 1);

    // Add to destination list at the new position
    const newDestinationList = [...destinationList];
    movedTask.status = 
      destination.droppableId === "1" ? "not started" :
      destination.droppableId === "2" ? "in progress" : "completed";

    newDestinationList.splice(destination.index, 0, movedTask);

    // Update the state based on the column
    if (source.droppableId === "1") setNotStartedTodos(newSourceList);
    else if (source.droppableId === "2") setStartedTodos(newSourceList);
    else setCompletedTodos(newSourceList);

    if (destination.droppableId === "1") setNotStartedTodos(newDestinationList);
    else if (destination.droppableId === "2") setStartedTodos(newDestinationList);
    else setCompletedTodos(newDestinationList);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <>
      <Header onFilterChange={handleFilterChange} onDateChange={handleDateChange} />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="mt-10 grid grid-flow-row auto-cols-fr lg:grid-flow-col gap-[15px]">
          <Droppable droppableId="1">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <CardList todoList={notStartedTodos} type="not-started" id="1" onTaskAdded={handleTaskAdded} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="2">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <CardList todoList={startedTodos} type="started" id="2" />
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="3">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <CardList todoList={completedTodos} type="completed" id="3" />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </>
  );
};

export default Kanban;