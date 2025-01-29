import React, { useContext } from "react";
import "./RightGadget.css";
import { CartContext } from "../contexts/CartProvider";
import { AddCartContext } from "../contexts/AddCartProvider";

const RightGadget = ({ gadgetData }) => {
  const { addToCart } = useContext(CartContext);
  const { addCartCount } = useContext(AddCartContext);

  const handleAddToCart = (item) => {
    addToCart(item);
    addCartCount();
    console.log("Item added to cart:", item);
  };

  const increQuant = (item) => {
    console.log(item);
  };

  const decreQuant = (item) => {
    console.log(item);
  };

  return (
    <div className="rightGadget">
      {gadgetData.map((item) => (
        <li key={item.product === "Book" ? item.title : item.model}>
          <img
            src={item.imgUrl}
            alt={item.product === "Book" ? item.title : item.brand}
          />
          <div className="product-details">
            <h3>{item.product === "Book" ? item.author : item.brand}</h3>
            <p>{item.product === "Book" ? item.title : item.model}</p>
            <b>${item.price}</b>
            <p>{item.description}</p>
            <div className="quantity">
              <button
                className="quant"
                onClick={() => {
                  decreQuant(item);
                }}
              >
                -
              </button>
              <span>{item.quantity || 1}</span>
              <button
                className="quant"
                onClick={() => {
                  increQuant(item);
                }}
              >
                +
              </button>
            </div>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default RightGadget;
