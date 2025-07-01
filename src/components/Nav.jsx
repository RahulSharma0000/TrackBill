import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";


const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinkClass = ({ isActive }) =>
  isActive
    ? "text-blue-600 font-bold transition"
    : "text-gray-700 hover:text-blue-400 transition";


  return (
    <div className="sticky top-0  flex flex-col  justify-center h-[10vh] bg-white  w-full   gap-4 mb-5  rounded shadow z-50  ">
      <div className="flex  px-4 sm:px-10 justify-between items-center w-full ">
        <h1 className="text-2xl text-blue-600 font-bold ">
          {" "}
          <img className="w-40 scale-110" src="/Logo.jpg" alt="" />
        </h1>
      <div className="hidden md:flex gap-10 font-medium">
  <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>
  <NavLink to="/add" className={navLinkClass}>Add Receipts</NavLink>
  <NavLink to="/receipt" className={navLinkClass}>Receipt</NavLink>
</div>

          <button  onClick={() => setMenuOpen(!menuOpen)} className="md:hidden right-0 ">
  {menuOpen ? <X className="w-10 h-10" /> : <Menu className="w-10 h-10" />}
</button>

      </div>

 

{/* Mobile Slide-In Menu */}
{menuOpen && (
  <div className="fixed inset-0 z-40 flex sm:hidden text-2xl">
    {/* Dim background only */}
    <div
      onClick={() => setMenuOpen(false)}
      className="absolute inset-0 bg-black/30"
    />

    {/* Slide-in blurred panel */}
    <div className="relative ml-auto w-3/4 max-w-xs h-full backdrop-blur-md bg-white/10 p-6 flex flex-col gap-6 animate-slide-in z-50 text-black font-semibold ">
      
      
      {/* Close Icon */}
<button
  onClick={() => setMenuOpen(false)}
  className="self-end text-black hover:text-red-400 transition"
>
  <X className="w-8 h-8" />
</button>
  <NavLink to="/dashboard" onClick={() => setMenuOpen(false)} className={navLinkClass}>
    Dashboard
  </NavLink>
  <NavLink to="/add" onClick={() => setMenuOpen(false)} className={navLinkClass}>
    Add Receipts
  </NavLink>
  <NavLink to="/receipt" onClick={() => setMenuOpen(false)} className={navLinkClass}>
    Receipt
  </NavLink>
    </div>
  </div>
)}
 </div>
  );
};

export default Nav;
