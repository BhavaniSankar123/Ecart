import React, { useState, useContext } from "react";
// import "./RightGadget.css";
import { CartContext } from "../contexts/CartProvider";
import { AddCartContext } from "../contexts/AddCartProvider";

const RightGadget = ({ gadgetData, itemList }) => {
  const { addToCart } = useContext(CartContext);
  const { addCartCount } = useContext(AddCartContext);
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = (item) => {
    addToCart(item);
    addCartCount();
    console.log("Item added to cart:", item);
  };

  const increQuant = (item) => {
    console.log(quantity);
    setQuantity(quantity + 1);
  };

  const decreQuant = (item) => {
    console.log(quantity);
    setQuantity(quantity - 1);
  };

  // Use all items if gadgetData is empty
  const itemsToDisplay = gadgetData.length > 0 ? gadgetData : itemList;

  return (
    <div className=" ml-10 bg-gradient-t from-green to-red grid md:grid-cols-4 sm:grid-cols-2 gap-5">
      {itemsToDisplay.map((item) => (
        <li
          key={item.product === "Book" ? item.title : item.model}
          className="list-none bg-white border border-gray-300 rounded-md p-2 shadow-md transition-transform transform hover:scale-105 hover:bg-yellow-200"
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
            <div className="flex items-center mt-2">
              <button
                className="bg-gray-300 border-none w-8 text-black py-1 px-2 cursor-pointer hover:bg-gray-400"
                onClick={() => {
                  decreQuant(item);
                }}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className=" bg-gray-300 border-none w-8 text-black py-1 px-2 cursor-pointer hover:bg-gray-400"
                onClick={() => {
                  increQuant(item);
                }}
              >
                +
              </button>
            </div>
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
