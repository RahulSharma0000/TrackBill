import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 flex flex-col  justify-center h-[10vh] bg-white   gap-4 mb-5 p-5 rounded shadow-sm">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-2xl text-blue-600 font-bold ">
          {" "}
          <img className="w-40 scale-110" src="/public/Logo.jpg" alt="" />
        </h1>
        <div className="flex gap-10 text-lg font-medium space-x-1.5">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/add">Add Receipts</NavLink>
          <NavLink to="/receipt">Receipt</NavLink>
        </div>
      </div>

      {/* Dropdown menu for small screens */}
      {menuOpen && (
        <div className="flex flex-col gap-3 px-4 pt-2 sm:hidden font-medium">
          <NavLink to="/dashboard" onClick={() => setMenuOpen(false)}>
            Dashboard
          </NavLink>
          <NavLink to="/add" onClick={() => setMenuOpen(false)}>
            Add Receipts
          </NavLink>
          <NavLink to="/receipt" onClick={() => setMenuOpen(false)}>
            Receipt
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Nav;
