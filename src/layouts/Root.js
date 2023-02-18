import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Root = () => {
  return (
    <div>
      <div>
        <div className="flex gap-5">
          <div className="w-full lg:w-64">
            <Sidebar />
          </div>
          <div className="flex-1">
            <Navbar />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
