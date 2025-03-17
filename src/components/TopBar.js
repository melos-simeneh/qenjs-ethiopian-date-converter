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
    <header className="bg-color-1 p-4">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="text-white ">
          <span className="text-2xl font-bold">QENJS</span>
          <span className="text-lg font-bold"> - Ethiopian Date Converter</span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-6">
          {Object.keys(MENU_ITEMS).map((key) => {
            const menu = MENU_ITEMS[key];
            return (
              <a
                key={menu}
                href={`#${menu}`}
                className={`relative px-3 py-2 text-white font-medium transition-all duration-300 ease-in-out ${
                  selectedMenu === menu
                    ? "bg-color-2 rounded-lg"
                    : "hover:text-gray-300"
                }`}
                onClick={() => handleMenuClick(menu)}
              >
                {menu.charAt(0).toUpperCase() + menu.slice(1)}
                {selectedMenu === menu && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-color-3"></span>
                )}
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
              className={`block px-4 py-2 text-white font-medium transition-all duration-300 ease-in-out ${
                selectedMenu === menu
                  ? "text-gray-300 bg-color-2 rounded-lg shadow-lg"
                  : "hover:text-gray-300"
              }`}
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
