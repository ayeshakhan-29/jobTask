import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from "../../assets/logo.png"


const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', link: '#' },
    { id: 2, text: 'About', link: '#about' },
    { id: 3, text: 'Services', link: '#services' },
    { id: 4, text: 'Contact', link: '#contact' },
  ];


  return (
    <div className='z-10 fixed bg-transparent	 flex justify-between items-center h-24 w-full mx-auto px-4 text-white'>
      {/* Logo */}
      <div className="flex items-center mx-20 mt-5">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <a href={item.link}>
            <li
              key={item.id}

              className='p-4 hover:bg-[#76ABAE] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
            >
              {item.text}


            </li>
          </a>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden z-10'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'z-10 fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <a href={item.link}>
            <li
              key={item.id}
              href={item.link}
              className='z-10 p-4 border-b rounded-xl hover:bg-[#76ABAE] duration-300 hover:text-black cursor-pointer border-gray-600'
            >

              {item.text}
            </li>
          </a>

        ))}
      </ul>
    </div >
  );
};

export default Navbar;