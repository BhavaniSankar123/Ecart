import React, { useContext } from "react";
import { CartContext } from "../contexts/CartProvider";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      <ul className="space-y-4">
        {cart.map((item, index) => (
          <li
            key={index}
            className="flex items-center space-x-4 p-4 border rounded-lg shadow-md"
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
              <p className="text-gray-800">Quantity: {item.quantity}</p>
              <p className="text-gray-800">Price: ${item.price}</p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-gray-800">
                Total: ${item.price * item.quantity}
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
    </div>
  );
};

export default Cart;
