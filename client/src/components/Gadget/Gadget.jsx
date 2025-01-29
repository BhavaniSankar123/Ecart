import React from "react";
import "./Gadget.css";
import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  return (
    <div className="gadget">
      <div className="gadget-top">
        <h1>{gadget.product}</h1>
        <Link to={`/${gadget.product}`}>Show More</Link>
      </div>
      <div className="images">
        {gadget.slice(0, 4).map((item) => (
          <img
            key={item.product === "Book" ? item.title : item.model}
            src={item.imgUrl}
            alt={item.product === "Book" ? item.title : item.brand}
          />
        ))}
      </div>
    </div>
  );
};

export default Gadget;
