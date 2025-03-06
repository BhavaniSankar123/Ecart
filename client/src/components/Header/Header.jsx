import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AddCartContext } from "../contexts/AddCartProvider";

const Header = ({ login, setLogin }) => {
  const { cartCount } = useContext(AddCartContext);

  const handleLogout = () => {
    setLogin(false);
    localStorage.setItem("login", "false");
  };

  return (
    <div className="flex justify-between items-center p-4 bg-blue-500 text-black">
      <Link to="/">
        <h1 className="text-2xl font-bold text-white">E-Cart</h1>
      </Link>
      <div className="flex items-center border border-gray-400 bg-white rounded-md pr-1">
        <input
          type="search"
          placeholder="Search..."
          className="p-2 rounded-l-md border-none outline-none"
        />
        <button className="p-1 px-2 bg-blue-500 text-white rounded-r-md">
          Search
        </button>
      </div>
      <div className="flex items-center">
        {login ? (
          <button
            onClick={handleLogout}
            className="p-2 bg-red-500 text-white rounded ml-2"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">
              <button className="px-2 py-1 bg-green-500 text-white rounded ml-2">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="p-1 bg-green-500 text-white rounded ml-6">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
      <Link to="/cart" className="relative">
        <FaShoppingCart className="text-2xl" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-sm font-bold leading-none bg-white rounded-full text-red-600">
            {cartCount}
          </span>
        )}
      </Link>
    </div>
  );
};

export default Header;
