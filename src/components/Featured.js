import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Featured = () => {
  return (
    <div className="w-4/12 shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] bg-white p-5 rounded-lg">
      <div className=" w-full flex justify-between items-center text-gray-500">
        <h1 className="font-semibold text-xl">Total Revenue</h1>
        <MoreVertIcon className="cursor-pointer" />
      </div>
      <div className=" flex flex-col items-center justify-center gap-5">
        <div className="w-32 mt-4">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="font-medium text-gray-500 ">Total sales made today</p>
        <p className="text-2xl">₹ 10.4K</p>
        <p className=" text-center  text-gray-500">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="flex w-full">
          <div className=" flex w-full flex-col items-center justify-center">
            <div className="w-full text-center text-lg text-gray-500">Target</div>
            <div className="w-full text-center text-xl mt-2 text-gray-600">₹324L</div>
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <div className="w-full text-center text-lg text-gray-500">Last week</div>
            <div className="w-full text-center text-xl mt-2 text-red-600">₹12.4L</div>
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <div className="w-full text-center text-lg text-gray-500">Last Month</div>
            <div className="w-full text-center text-xl mt-2 text-green-600">₹12.4L</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
