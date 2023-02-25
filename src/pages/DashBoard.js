import React from "react";
import Widget from "../components/Widget";

const DashBoard = () => {
  return (
    <div>
      <div className="flex gap-5 p-10">
        <Widget type="booking" />
        <Widget type="user" />
        <Widget type="revenue" />
        <Widget type="email" />
      </div>
    </div>
  );
};

export default DashBoard;
