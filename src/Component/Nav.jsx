import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="flex flex-col  justify-center h-[45vh] bg-white  pb-10 gap-4 m-0">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-2xl text-blue-600 font-bold ">
          {" "}
          <img className="w-40 scale-110" src="/public/Logo.jpg" alt="" />
        </h1>
        <div className="flex gap-10 font-medium">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/add">Add Expenses</NavLink>
          <NavLink to="/receipt">Receipt</NavLink>
        </div>
      </div>
      <box className="bg-blue-600 h-32 w-full rounded-xl self-center">
        <h1 className="p-4 text-xl text-white font-semibold">Monthly Total</h1>
        <h2 className=" m-2 p-2 text-2xl text-white font-semibold">Rs.12000</h2>
      </box>
      <dropList className="bg-green-200 h-10 w-full self-center ">
        <select className="border border-gray-300 rounded-md p-1 h-full w-1/3">
          <option>June 2025</option>
        </select>

        <select className="border border-gray-300 rounded-md p-1 h-full w-1/3">
          <option>Category</option>
          <option>Option 2</option>
        </select>

        <select className="border border-gray-300 rounded-md p-1 h-full w-1/3">
          <option>Search</option>
        </select>
      </dropList>
    </div>
  );
};

export default Nav;
