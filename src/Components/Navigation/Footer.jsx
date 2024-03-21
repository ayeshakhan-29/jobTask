import React from "react";
import logo from "../../assets/logo.png"
import "./../../../src/App.css"

const Footer = () => {
  return (
    <div className="bg-[#181d22] text-white py-8 z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1: Logo */}
          <div>
            <img src={logo} alt="Logo" className="logo" />
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h2 className="text-xl font-bold text-[#76ABAE] mb-2 text-left">Navigation</h2>
            <ul className="text-left text-white">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h2 className="text-xl font-bold text-[#76ABAE] mb-2 text-left">Contact</h2>
            <div id="contact" className=" text-left ml-0">
              <p>Email: explorease@gmail.com</p>
              <p>Phone: +923219311116</p>
              <p>Address: 29 Main St, Lahore, Pakistan</p>
            </div>
          </div>

          {/* Column 4: Subscribe */}
          <div>
            <h2 className="text-xl font-bold text-[#76ABAE] mb-2 text-left" >Subscribe Our Newsletter</h2>
            <form>
              <input type="email" placeholder="Enter your email" className="w-full py-2 px-4 rounded mt-2 mb-1" />
              <button type="submit" className="cursor-pointer bg-[#76ABAE] hover:bg-black text-white transition-all duration-300 ease-in-out font-bold py-2 px-4 rounded-lg mt-4">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Footer;
