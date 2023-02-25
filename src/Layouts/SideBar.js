import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SettingsIcon from "@mui/icons-material/Settings";

const SideBar = () => {
  return (
    <div className="w-1/6  border-r-[0.5px] min-h-screen border-gray-200">
      <div className="h-12 flex items-center justify-center">
        <span className="text-xl font-semibold text-blue-400">🚀 Sauvic</span>
      </div>
      <hr className="h-0 border-solid border-[0.5px] border-gray-200" />
      <div className="pl-5 my-3">
        <ul>
          <li className="p-3 cursor-pointer hover:bg-blue-100 hover:rounded-md">
            <span className=" flex  items-center ">
              <DashboardIcon className="mx-3" /> DashBoard
            </span>
          </li>
          <li className="p-3 cursor-pointer hover:bg-blue-100 hover:rounded-md">
            <span className="flex  items-center">
              <FlightTakeoffIcon className="mx-3" />
              Flights
            </span>
          </li>
          <li className="p-3 cursor-pointer hover:bg-blue-100 hover:rounded-md">
            <span className=" flex  items-center">
              <BookOnlineIcon className="mx-3" />
              Bookings
            </span>
          </li>
          <li className="p-3 cursor-pointer hover:bg-blue-100 hover:rounded-md">
            <span className=" flex  items-center">
              <PersonOutlinedIcon className="mx-3" />
              Users
            </span>
          </li>
          <li className="p-3 cursor-pointer hover:bg-blue-100 hover:rounded-md">
            <span className=" flex  items-center">
              <LocationCityIcon className="mx-3" />
              Cities
            </span>
          </li>
        </ul>
      </div>
      <div>
        <SettingsIcon />
        Settings
      </div>
    </div>
  );
};

export default SideBar;
