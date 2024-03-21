import React from "react";
import logo from "../../assets/logo.png"
import "./../../../src/App.css"

export default function Navbar() {
  return (
    <div className="w-full border h-full py-6 px-4 fixed top-0 bg-transparent">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-black ml-12">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="flex gap-14 mr-12 mb-6">
          <a href="#home" className="text-lg text-slate-500">
            Home
          </a>
          <a href="#about" className="text-lg text-slate-500">
            About
          </a>
          <a href="#services" className="text-lg text-slate-500">
            Services
          </a>
          <a href="#" className="text-lg text-slate-500">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
