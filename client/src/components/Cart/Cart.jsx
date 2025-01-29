import React, { useContext } from "react";
import { CartContext } from "../contexts/CartProvider";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul className="cart-items">
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            <img
              src={item.imgUrl}
              alt={item.product === "Book" ? item.title : item.brand}
            />
            <div className="product-details">
              <h3>{item.product === "Book" ? item.author : item.brand}</h3>
              <p>{item.product === "Book" ? item.title : item.model}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
