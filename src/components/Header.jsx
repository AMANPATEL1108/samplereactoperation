import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="shadow-md bg-blue-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center items-center">
        <nav className="space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-green-600 font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-green-600 font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-green-600 font-medium"
          >
            contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
