import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = ({ gadgetsList }) => {
  return (
    <div className="category-container">
      <h2>Categories</h2>
      <ul className="category-list">
        {gadgetsList.map((gadget, index) => (
          <li key={index} className="category-item">
            <Link to={`/${gadget}`}>{gadget}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
