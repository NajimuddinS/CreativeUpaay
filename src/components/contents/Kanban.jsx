import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { boardData } from "./KanbanData";
import CardList from "./CardList";

const Kanban = () => {
  const [notStartedTodos, setNotStartedTodos] = useState(
    boardData[0].toDos.filter((todo) => todo.status === "not started")
  );
  const [startedTodos, setStartedTodos] = useState(
    boardData[0].toDos.filter((todo) => todo.status === "started")
  );
  const [completedTodos, setCompletedTodos] = useState(
    boardData[0].toDos.filter((todo) => todo.status === "completed")
  );

  const findTodoById = (id, array) => {
    return array.find((todo) => todo.id === id);
  };

  const removeTodoById = (id, array) => {
    return array.filter((todo) => todo.id !== id);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let updatedNotStartedTodos = [...notStartedTodos];
    let updatedStartedTodos = [...startedTodos];
    let updatedCompletedTodos = [...completedTodos];

    const todo = findTodoById(draggableId, [
      ...notStartedTodos,
      ...startedTodos,
      ...completedTodos,
    ]);

    if (source.droppableId === "1") {
      updatedNotStartedTodos = removeTodoById(
        draggableId,
        updatedNotStartedTodos
      );
    } else if (source.droppableId === "2") {
      updatedStartedTodos = removeTodoById(draggableId, updatedStartedTodos);
    } else {
      updatedCompletedTodos = removeTodoById(
        draggableId,
        updatedCompletedTodos
      );
    }

    if (destination.droppableId === "1") {
      updatedNotStartedTodos.splice(destination.index, 0, {
        ...todo,
        status: "not started",
      });
    } else if (destination.droppableId === "2") {
      updatedStartedTodos.splice(destination.index, 0, {
        ...todo,
        status: "started",
      });
    } else {
      updatedCompletedTodos.splice(destination.index, 0, {
        ...todo,
        status: "completed",
      });
    }

    setNotStartedTodos(updatedNotStartedTodos);
    setStartedTodos(updatedStartedTodos);
    setCompletedTodos(updatedCompletedTodos);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="mt-10 grid grid-flow-row auto-cols-fr lg:grid-flow-col gap-[15px]">
        <CardList todoList={notStartedTodos} type="not-started" id={"1"} />
        <CardList todoList={startedTodos} type="started" id={"2"} />
        <CardList todoList={completedTodos} type="completed" id={"3"} />
      </div>
    </DragDropContext>
  );
};

export default Kanban;
