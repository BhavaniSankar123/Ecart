import React, { useState, useContext } from "react";
// import "./RightGadget.css";
import { CartContext } from "./contexts/CartProvider";
// import { AddCartContext } from "./contexts/AddCartProvider";

const RightGadget = ({ gadgetData, itemList }) => {
  const { addToCart,updateQuantity } = useContext(CartContext);
  // const { addCartCount } = useContext(AddCartContext);

  const handleAddToCart = (item) => {
      addToCart(item,1);
      updateQuantity(item.id, 1);
      // addCartCount();
  };

  // Use all items if gadgetData is empty
  const itemsToDisplay = gadgetData.length > 0 ? gadgetData : itemList;

  return (
    <div className=" ml-10 bg-gradient-t from-green to-red grid md:grid-cols-4 sm:grid-cols-2 gap-5">
      {itemsToDisplay.map((item) => (
        <li
          key={item.id}
          className="list-none bg-white border border-gray-300 rounded-md p-2 shadow-md transition-transform transform hover:scale-105 hover:bg-orange-200"
        >
          <div className="h-40 w-40 flex items-center justify-center p-4">
            <img
              src={item.imgUrl}
              alt={item.product === "Book" ? item.title : item.brand}
              className="h-auto rounded-md object-fit"
            />
          </div>
          <div className=" mt-2">
            <h3 className="my-2 text-lg">
              {item.product === "Book" ? item.author : item.brand}
            </h3>
            <p className="my-1 text-gray-600">
              {item.product === "Book" ? item.title : item.model}
            </p>
            <b>${item.price}</b>
            <p>{item.description}</p>
            
            <button
              className="py-2 px-4 bg-blue-500 text-white border-none cursor-pointer rounded-md mt-2 hover:bg-blue-700"
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default RightGadget;
