import EditIcon from "../assets/edit.svg";
import LinkIcon from "../assets/link.svg";
import CreateIcon from "../assets/create.svg";
import FilterIcon from "../assets/filter.svg";
import DateIcon from "../assets/date.svg";
import GridIcon from "../assets/grid.svg";
import PauseIcon from "../assets/pause.svg";
import ShareIcon from "../assets/share.svg";
import ArrowDownIcon from "../assets/arrowDown.svg";
import Users from "./Users";

const Header = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-4 lg:flex-row lg:justify-between items-center lg:gap-0 mt-10">
        <div className="flex gap-[17px] items-center md:self-start">
          <span className="font-semibold text-black -mt-3 text-3xl lg:text-[46px]">
            Mobile App
          </span>
          <img src={EditIcon} alt="Edit" />
          <img src={LinkIcon} alt="Link" />
        </div>
        <div className="flex items-center justify-around md:self-start">
          <img src={CreateIcon} alt="Create" />
          <span className="text-base font-medium text-indigo-600 ml-2 mr-3 -mt-1">
            Invite
          </span>
          <Users />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-5 md:gap-0 lg:gap-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="" selected >Filter</option>
              <option value="US">Low</option>
              <option value="CA">High</option>
              <option value="FR">Completed</option>
            </select>

            <input datepicker id="default-datepicker" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
          </div>
        </div>


        <div className="flex items-center justify-center">
          <div className="flex items-center border w-[97px] h-[40px] rounded-md py-4 pl-3 pr-3 border-solid border-gray-400">
            <img src={ShareIcon} alt="DateIcon" className="mr-2" />
            <span className="text-base mr-4">Share</span>
          </div>
          <div className="border border-solid border-gray-400 h-[28px] mx-5"></div>
          <div className="flex items-center justify-center bg-[#5030E5] mr-5 w-[40px] h-[40px] rounded-md">
            <img src={PauseIcon} alt="PauseIcon" />
          </div>
          <img src={GridIcon} alt="GridIcon" />
        </div>
      </div>
    </>
  );
};

export default Header;
