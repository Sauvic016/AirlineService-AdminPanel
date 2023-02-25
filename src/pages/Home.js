import React from "react";
import MainBar from "../Layouts/MainContainer";
import SideBar from "../Layouts/SideBar";

const Home = () => {
  return (
    <div className="flex">
      <SideBar />
      <MainBar />
    </div>
  );
};

export default Home;
