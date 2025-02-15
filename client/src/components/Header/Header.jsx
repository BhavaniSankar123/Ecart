import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ login, setLogin }) => {
  const handleLogout = () => {
    setLogin(false);
    localStorage.setItem("login", "false");
  };

  return (
    <div className="header">
      <Link to="/">
        <h1>E-Cart</h1>
      </Link>
      <div className="search-container">
        <input type="search" placeholder="Search..." />
        <button className="search-button">Search</button>
      </div>
      <div className="auth-buttons">
        {login ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>
      <Link to="/cart">
        <button className="cart-button">Cart</button>
      </Link>
    </div>
  );
};

export default Header;
