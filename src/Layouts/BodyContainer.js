import { Outlet } from "react-router-dom";
import React from "react";

const BodyContainer = () => {
  return (
    <div className=" px-2 pb-0  bg-slate-100">
      <Outlet />
    </div>
  );
};

export default BodyContainer;
