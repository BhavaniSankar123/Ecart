import React from "react";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import Cart from "./Cart";

const Header = ({ login, setLogin }) => {
  const handleLogout = () => {
    setLogin(false);
    localStorage.setItem("login", "false");
  };

  return (
    <div className="header">
      <Link to="/home">
        <h1>E-Cart</h1>
      </Link>
      <div className="search-container">
        <input type="search" placeholder="Search..." />
        <IoMdSearch className="search-icon" />
      </div>
      {login ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}
      <Link to="/cart">
        <Cart />
      </Link>
    </div>
  );
};

export default Header;
