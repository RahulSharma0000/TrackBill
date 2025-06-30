import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const navLinkClass = ({ isActive }) =>
  `px-3 py-1 rounded ${isActive ? "text-blue-600 font-bold" : "text-black"}`;

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col  justify-center h-[10vh] bg-gray-100   gap-4 my-2 p-2 rounded shadow-sm">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-2xl text-blue-600 font-bold ">
          {" "}
          <img className="w-40 scale-110" src="/public/Logo.jpg" alt="" />
        </h1>

        <div className="flex gap-10 font-medium">
          <NavLink to="/dashboard" className={navLinkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/add" className={navLinkClass}>
            Add Receipts
          </NavLink>
          <NavLink to="/receipt" className={navLinkClass}>
            Receipt
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
