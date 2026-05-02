import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "ProductData", href: "/" },
    { name: "Jokes", href: "/jokes" },
    { name: "Books", href: "/books" },
  ];

  return (
    <div className="w-full bg-black p-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between border border-zinc-800 rounded-lg px-4 h-16">

        {/* Logo */}
        <div className="flex items-center gap-2">
         
          <h2 className="text-lg font-bold text-white">
            ReactAssignment
          </h2>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
  <Link
    key={item.name}
    to={item.href}
    className="text-gray-400 hover:text-blue-400 transition"
  >
    {item.name}
  </Link>
))}

          <a
            href="https://chaicode.com/"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-400 hover:text-white"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 border border-zinc-800 rounded-lg bg-black p-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-gray-400 hover:text-blue-400"
            >
              {item.name}
            </a>
          ))}

          <a
            href="https://chaicode.com/"
            className="block text-center px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Get Started
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;