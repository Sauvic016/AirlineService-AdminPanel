import { useNavigate } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SettingsIcon from "@mui/icons-material/Settings";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className=" min-w-fit h-screen border-gray-200 border-r-[1.5px] bg-white">
      {/* top-div */}
      <div className=" mx-3 mt-4 p-4 h-14 flex items-center cursor-pointer ">
        <span className="text-2xl font-semibold text-blue-600 p-2 rounded-lg">😇 Sauvic 🚀</span>
      </div>

      {/* <hr className="h-0 border-solid border-[0.5px] border-gray-200" /> */}
      {/* center-div */}
      <div className=" mt-16 h-96 mx-auto">
        <ul>
          <li
            className="p-3 my-2 cursor-pointer hover:bg-blue-100 hover:rounded-md rounded-md"
            onClick={() => navigate("/")}
          >
            <span className=" flex text-gray-500 items-center ">
              <DashboardIcon className="mx-4 text-blue-400 " /> DashBoard
            </span>
          </li>
          <li className="p-3 cursor-pointer hover:bg-blue-100 hover:rounded-md" onClick={() => navigate("/flights")}>
            <span className=" flex text-gray-500 items-center ">
              <FlightTakeoffIcon className="mx-4 text-blue-400 " />
              Flights
            </span>
          </li>
          <li className="p-3 cursor-pointer hover:bg-blue-100 hover:rounded-md" onClick={() => navigate("/bookings")}>
            <span className=" flex text-gray-500 items-center ">
              <BookOnlineIcon className="mx-4 text-blue-400 " />
              Bookings
            </span>
          </li>
          <li className="p-3 cursor-pointer hover:bg-blue-100 hover:rounded-md" onClick={() => navigate("/users")}>
            <span className=" flex text-gray-500 items-center ">
              <PersonOutlinedIcon className="mx-4 text-blue-400 " />
              Users
            </span>
          </li>
          <li className="p-3 cursor-pointer hover:bg-blue-100 hover:rounded-md" onClick={() => navigate("/cities")}>
            <span className=" flex text-gray-500 items-center ">
              <LocationCityIcon className="mx-4 text-blue-400 " />
              Cities
            </span>
          </li>
        </ul>
      </div>
      {/* bottom-div */}
      <div
        className="mt-3 p-3  text-gray-500  hover:bg-blue-100 hover:rounded-md cursor-pointer"
        onClick={() => navigate("/settings")}
      >
        <SettingsIcon className="mx-4 text-blue-400 " />
        Settings
      </div>
    </div>
  );
};

export default SideBar;
