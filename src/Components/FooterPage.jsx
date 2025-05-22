import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const FooterPage = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center sm:flex-row sm:justify-between px-4">
        <div className="mb-4 sm:mb-0">
          <h4 className="text-lg font-bold mb-2">Contact Us</h4>
          <p className="text-sm flex items-center">
            <FaEnvelope className="mr-2" />
            Email: <a href="mailto:vjdinesh8904@gmail.com" className="text-blue-400 hover:underline">vjdinesh8904@gmail.com</a>
          </p>
          <p className="text-sm flex items-center mt-2">
            <FaPhone className="mr-2" />
            Phone: <a href="tel:+919360769012" className="text-blue-400 hover:underline">+919360769012</a>
          </p>
        </div>

        <div className="flex space-x-4 mb-4 sm:mb-0">
          <a href="https://www.instagram.com/v_j_d_i_n_e_s_h_8904?igsh=MXZ5andsbHlpMDdyZA==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/dinesh-vetriselvam-5a7b79259/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm mt-4">
        &copy; 2024 Vj Developer. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterPage;
