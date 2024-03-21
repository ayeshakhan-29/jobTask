import React from "react";
import logo from "../../assets/logo.png"
import "./../../../src/App.css"

export default function Navbar() {
  return (
    <div className="w-full h-20 py-6 px-4 fixed bg-gray z-10">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-black ml-32">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="flex gap-14 mr-32 mb-6 font-medium text-white">
          <a href="#home" className="text-lg  ">
            Home
          </a>
          <a href="#about" className="text-lg ">
            About
          </a>
          <a href="#services" className="text-lg">
            Services
          </a>
          <a href="#contact" className="text-lg">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
