import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white my-2 p-2 rounded shadow-sm">
      <div className="flex items-center justify-between h-[10vh] px-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img className="w-36 sm:w-40 scale-110" src="/public/Logo.jpg" alt="Logo" />
        </NavLink>

        {/* Hamburger button for small screens */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-blue-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation links */}
        <div className="hidden sm:flex gap-10 font-medium">
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
