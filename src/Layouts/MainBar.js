import React from "react";
import BodyContainer from "./BodyContainer";
import NavBar from "./NavBar";

const MainBar = () => {
  return (
    <div className="w-full">
      <NavBar />
      <BodyContainer />
    </div>
  );
};

export default MainBar;
