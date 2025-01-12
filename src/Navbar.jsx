import React from "react";
import logo from "./assets/logo.svg";
import NavabrLogo from "./assets/Navbar.svg"
const Navbar = () => {
  return (
    <nav className='bg-white  w-full border-b border-gray-200 '>
      <div className='flex justify-between items-center px-8'>
        {/* Logo/Brand Section */}
        <div className='flex items-center '>
          <img src={logo} alt='WhatBytes Logo' className='w-20 h-16 ' />
        </div>

        {/* Navigation Links */}
        <ul className='hidden md:flex items-center gap-8'>
          <li>
            <a
              href='/'
              className='text-[#0F1629] hover:text-gray-600 font-[600] transition'
            >
              Crypto Taxes
            </a>
          </li>
          <li>
            <a
              href='/about'
              className='text-[#0F1629] hover:text-gray-600 font-[600] transition'
            >
              Free Tools
            </a>
          </li>
          <li>
            <a
              href='/services'
              className='text-[#0F1629] hover:text-gray-600 font-[600] transition'
            >
              Resource Center
            </a>
          </li>
          <li className='bg-[#0052FE] rounded-md h-8 flex items-center'>
            <a href='/contact' className='text-white font-[600] transition p-5'>
              Get Started
            </a>
          </li>
        </ul>
        
        <img src={NavabrLogo} alt="ogo" className="md:hidden block" />



      </div>
    </nav>
  );
};

export default Navbar;
