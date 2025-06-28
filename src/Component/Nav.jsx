import React from "react";

const Nav = () => {
  return (
    <div className="flex flex-col  justify-center h-[45vh] bg-amber-300 px-32 pt-10 gap-4">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-2xl text-blue-600 font-bold ">TrackBill</h1>
        <div className="flex gap-10 font-medium">
          <h1>Dashboard</h1>
          <h1>Add Expenses</h1>
          <h1>Reciept</h1>
        </div>
      </div>
      <box className="bg-blue-600 h-32 w-full rounded-xl self-center">
        <h1 className="p-4 text-xl text-white font-semibold">Monthly Total</h1>
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
