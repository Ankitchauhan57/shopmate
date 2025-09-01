import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react"; // lightweight icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide hover:text-yellow-300 transition-colors">
          ShopMate
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-yellow-300 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-yellow-300 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition-colors">Contact</Link>
          <Link to="/products" className="hover:text-yellow-300 transition-colors">Products</Link>
          <Link to="/cart" className="hover:text-yellow-300 transition-colors flex items-center gap-1">
            <ShoppingCart size={18} /> Cart
          </Link>
          <Link to="/login" className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-500 transition-colors">Login</Link>
          {/* <Link
            to="/register"
            className="bg-yellow-400 text-blue-900 px-3 py-1 rounded hover:bg-yellow-500 transition-colors"
          >
            Register
          </Link> */}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-4 pb-4 space-y-2 font-medium">
          <Link
            to="/"
            className="block hover:text-yellow-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block hover:text-yellow-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block hover:text-yellow-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/products"
            className="block hover:text-yellow-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="block hover:text-yellow-300 transition-colors flex items-center gap-1"
            onClick={() => setIsOpen(false)}
          >
            <ShoppingCart size={18} /> Cart
          </Link>
          <Link
            to="/login"
            className="block hover:text-yellow-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          {/* <Link
            to="/register"
            className="block bg-blue-800 text-blue-900 px-3 py-1 rounded hover:bg-yellow-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link> */}
        </div>
      )}
    </nav>
  );
}
