import React from "react";
import Chart from "../components/Chart";
import Featured from "../components/Featured";
import Widget from "../components/Widget";

const DashBoard = () => {
  return (
    <div>
      <div className="flex gap-5 py-2 px-4 mt-5">
        <Widget type="booking" />
        <Widget type="user" />
        <Widget type="revenue" />
        <Widget type="email" />
      </div>
      <div className="flex gap-5 py-4 px-4">
        <Featured />
        <Chart />
      </div>
    </div>
  );
};

export default DashBoard;
