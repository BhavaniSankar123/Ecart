import React from "react";
import { Link } from "react-router-dom";

const Category = ({ gadgetsList }) => {
  return (
    <div>
      <ul className="flex justify-between items-center p-4 overflow-x-scroll scrollbar-hide">
        {gadgetsList.map((gadget, index) => (
          <Link to={`/${gadget}`} key={index}>
            <li
              key={index}
              className="border-[#000]  rounded-md bg-[#F78137] text-white p-2 m-2 hover:text-black"
            >
              {gadget}
            </li>
          </Link>
        ))}
      </ul>
      <hr className="border border-black mx-4" />
    </div>
  );
};

export default Category;
