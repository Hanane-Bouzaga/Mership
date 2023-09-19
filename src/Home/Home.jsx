import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";



function Home() {
  return (
    <div
      style={{
        padding: "50px 0px 0px 370px",
      }}
    >
      <Sidebar />
      <Outlet />
    </div>
  );
}
export default Home;
