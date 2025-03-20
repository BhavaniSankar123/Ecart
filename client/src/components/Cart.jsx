import React, { useState, useContext } from "react";
import { CartContext } from "./contexts/CartProvider";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const [quantities, setQuantities] = useState({});

  const increQuant = (item) => {
    const newQuantity = (quantities[item.id] || item.quantity) + 1;
    setQuantities((prev) => ({
      ...prev,
      [item.id]: newQuantity,
    }));
    updateQuantity(item.id, newQuantity);
  };

  const decreQuant = (item) => {
    const currentQuantity = quantities[item.id] || item.quantity;
    const newQuantity = currentQuantity - 1;

    if (newQuantity === 0) {
      removeFromCart(item);
    } else {
      setQuantities((prev) => ({
        ...prev,
        [item.id]: newQuantity,
      }));
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cart.length > 0 ? (
        <ul className="flex flex-col justify-center items-center space-y-4 w-full">
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-4 p-4 border rounded-lg shadow-md w-[50%]"
            >
              <img
                src={item.imgUrl}
                alt={item.product === "Book" ? item.title : item.brand}
                className="w-20 h-20 object-cover"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">
                  {item.product === "Book" ? item.author : item.brand}
                </h3>
                <p className="text-gray-600">
                  {item.product === "Book" ? item.title : item.model}
                </p>
                <p className="text-gray-800">
                  Quantity: {quantities[item.id] || item.quantity}
                </p>
                <p className="text-gray-800">Price: ${item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    className="bg-gray-300 border-none w-8 text-black py-1 px-2 cursor-pointer hover:bg-gray-400"
                    onClick={() => decreQuant(item)}
                  >
                    -
                  </button>
                  <span>{quantities[item.id] || item.quantity}</span>
                  <button
                    className="bg-gray-300 border-none w-8 text-black py-1 px-2 cursor-pointer hover:bg-gray-400"
                    onClick={() => increQuant(item)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-gray-800">
                  Total: ${item.price * (quantities[item.id] || item.quantity)}
                </p>
                <button
                  onClick={() => removeFromCart(item)}
                  className="mt-2 px-4 py-2 w-auto bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600 font-bold text-3xl">
          Cart is empty
        </p>
      )}
    </div>
  );
};

export default Cart;
