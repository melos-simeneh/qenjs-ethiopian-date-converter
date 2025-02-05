"use client";

import { useState } from "react";

const TopBar = ({ setActiveMenu, MENU_ITEMS }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(MENU_ITEMS.CONVERTER); // Default active menu

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setActiveMenu(menu);
  };

  return (
    <header className="bg-color1 p-4">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="text-white text-lg font-bold">
          QENJS - Ethiopian Date Converter
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-6">
          {Object.keys(MENU_ITEMS).map((key) => {
            const menu = MENU_ITEMS[key];
            return (
              <a
                key={menu}
                href={`#${menu}`}
                className={`${
                  selectedMenu === menu ? "text-gray-300" : "text-white"
                } transform transition-all duration-300 ease-in-out hover:text-gray-300 hover:scale-105`}
                onClick={() => handleMenuClick(menu)}
              >
                {menu.charAt(0).toUpperCase() + menu.slice(1)}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-blue-700 space-y-4 p-4 overflow-hidden`}
      >
        {Object.keys(MENU_ITEMS).map((key) => {
          const menu = MENU_ITEMS[key];
          return (
            <a
              key={menu}
              href={`#${menu}`}
              className={`${
                selectedMenu === menu ? "text-gray-300" : "text-white"
              } transform transition-all duration-300 ease-in-out hover:text-gray-300 hover:scale-105`}
              onClick={() => handleMenuClick(menu)}
            >
              {menu.charAt(0).toUpperCase() + menu.slice(1)}
            </a>
          );
        })}
      </div>
    </header>
  );
};

export default TopBar;
