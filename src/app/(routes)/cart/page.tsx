"use client"; // ✅ Client Components ke liye zaroori hai

import { useState } from "react";
import Link from "next/link";
import { FiTrash2 } from "react-icons/fi"; // For remove icon

const CartPage = () => {
  // Sample cart data (In a real application, it would come from state or database)
  const initialCart = [
    { id: 1, title: "Elegant Sofa", image: "/sofa.jpg", price: "$499", quantity: 1 },
    { id: 2, title: "Modern Coffee Table", image: "/table.jpg", price: "$199", quantity: 2 },
    { id: 3, title: "Luxurious Armchair", image: "/chair.jpg", price: "$299", quantity: 1 },
  ];

  const [cart, setCart] = useState(initialCart);

  // Handle removing item from cart
  const handleRemove = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Handle quantity change
  const handleQuantityChange = (id: number, action: "increase" | "decrease") => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQuantity = action === "increase" ? item.quantity + 1 : item.quantity - 1;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace("$", "")) * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-black mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty!</p>
      ) : (
        <div className="space-y-6">
          {cart.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">
              <div className="flex items-center">
                <img src={item.image} alt={item.title} className="w-28 h-28 object-cover rounded-md mr-6" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-lg font-medium text-gray-600 mt-2">{item.price}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleQuantityChange(item.id, "decrease")}
                    className="px-4 py-2 bg-gray-300 rounded-md text-black hover:bg-gray-400 transition duration-200"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold text-gray-800">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, "increase")}
                    className="px-4 py-2 bg-gray-300 rounded-md text-black hover:bg-gray-400 transition duration-200"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:text-red-700 transition duration-200"
                    aria-label="Remove from cart"
                  >
                    <FiTrash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-8 flex justify-between items-center">
          <div className="text-2xl font-semibold text-gray-800">
            <span>Total: </span>
            <span className="text-yellow-500">${calculateTotal()}</span>
          </div>
          <Link href="/checkout">
            <button className="px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-200">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;