import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa"; // Import Upwork icon
import { FaSquareUpwork, FaUpwork } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-0 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-8">
          <p className="text-sm font-medium text-gray-400">
            © {new Date().getFullYear()} MELOS. All rights reserved.
          </p>

          <div className="flex items-center space-x-8">
            <a
              href="https://github.com/melos-simeneh/qenjs-ethiopian-date-converter"
              className="flex items-center text-gray-400 hover:text-blue-800 transition-colors duration-300 text-sm space-x-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View the source code on GitHub"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/melos/"
              className="flex items-center text-gray-400 hover:text-blue-800 transition-colors duration-300 space-x-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn Profile"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://www.upwork.com/freelancers/~019d7a01da7621dac9"
              className="flex items-center text-gray-400 hover:text-blue-800 transition-colors duration-300 space-x-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my Upwork profile"
            >
              <FaSquareUpwork />
              <span>Upwork</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
