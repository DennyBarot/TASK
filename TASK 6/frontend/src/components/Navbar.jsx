import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => (
  <nav className="bg-blue-700 p-4 mb-6 flex justify-between items-center">
    <Link to="/" className="text-white font-bold text-xl">E-Shop</Link>
    <Link to="/cart" className="text-white relative">
      Cart
      {cartCount > 0 && (
        <span className="bg-red-500 rounded-full px-2 ml-1 text-xs">{cartCount}</span>
      )}
    </Link>
  </nav>
);

export default Navbar;
