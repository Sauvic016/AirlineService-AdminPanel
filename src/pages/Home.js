import React from "react";
import MainBar from "../Layouts/MainBar";
import SideBar from "../Layouts/SideBar";

const Home = () => {
  return (
    <div className="flex h-screen overflow-hidden cursor-default font-poppins transition ease-in-out duration-200 scroll-smooth">
      <SideBar />
      <MainBar />
    </div>
  );
};

export default Home;
