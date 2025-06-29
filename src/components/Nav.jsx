import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="flex flex-col  justify-center h-[10vh] bg-white  gap-4 my-2 p-5 rounded shadow-sm">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-2xl text-blue-600 font-bold ">
          {" "}
          <img className="w-40 scale-110" src="/Logo.jpg" alt="" />
        </h1>
        <div className="flex gap-10 font-medium">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/add">Add Receipts</NavLink>
          <NavLink to="/receipt">Receipt</NavLink>
        </div>
      </div>
     
    </div>
  );
};

export default Nav;
