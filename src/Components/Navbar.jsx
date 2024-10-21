import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = '+919360769012'; 
  const message = encodeURIComponent('Hello, I am Vj Developer, This is my sample portfolio website.'); 

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10 shadow-md">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        {/* Logo or Brand */}
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-bold text-3xl tracking-tight">
            <a href='#homepage'>VJ Developer</a>
          </span>
        </div>

        {/* Toggle Button for Mobile */}
        <div className="block lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 border rounded text-gray-400 border-gray-600 hover:text-white hover:border-white"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`${isOpen ? "block" : "hidden"} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
          <div className="text-2xl lg:flex-grow text-center lg:text-right">
            <a
              href="#homepage"
              onClick={handleLinkClick}
              className="block mt-4 lg:inline-block text-2xl lg:mt-0 text-white hover:text-gray-300 mr-4"
            >
              Home
            </a>
            <a
              href="#aboutpage"
              onClick={handleLinkClick}
              className="block mt-4 lg:inline-block  lg:mt-0 text-white hover:text-gray-300 mr-4"
            >
              About
            </a>
            <a
              href="#skillspage"
              onClick={handleLinkClick}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
            >
              Skills
            </a>
            <a
              href="#educationpage"
              onClick={handleLinkClick}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
            >
              Education
            </a>
            <a
              href="#internshippage"
              onClick={handleLinkClick}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
            >
              Internship
            </a>
            <a
              href="#projectpage"
              onClick={handleLinkClick}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-2"
            >
              Projects
            </a>
          </div>

          {/* Contact Links */}
          <div className="text-center lg:text-right mt-3 lg:mt-0 flex justify-center lg:justify-end items-center">
            <a
              href="#contactpage"
              onClick={handleLinkClick}
              className="inline-block text-xl px-4 py-2 leading-none border mt-2 rounded text-white border-white hover:scale-105 hover:border-transparent hover:text-gray-800 hover:bg-white flex items-center mb-2 lg:mb-0 lg:mr-2"
            >
              Contact Us
            </a>
            <a
              href={`https://wa.me/${phoneNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="inline-block text-xl px-4 py-2 ml-1 sm:ml-4 leading-none border mt-2 rounded text-white border-white hover:scale-105 hover:border-transparent hover:text-gray-800 hover:bg-white flex items-center mb-2 lg:mb-0 lg:mr-2"
            >
              <FaWhatsapp className="mr-2" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
