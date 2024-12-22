"use client"; // ✅ Client Components ke liye zaroori hai

import { useState } from "react";
import Link from "next/link";

const CheckoutPage = () => {
  // Sample cart data (In a real application, it would come from state or database)
  const initialCart = [
    { id: 1, title: "Elegant Sofa", image: "/sofa.jpg", price: "$499", quantity: 1 },
    { id: 2, title: "Modern Coffee Table", image: "/table.jpg", price: "$199", quantity: 2 },
    { id: 3, title: "Luxurious Armchair", image: "/chair.jpg", price: "$299", quantity: 1 },
  ];

  const [cart] = useState(initialCart);

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace("$", "")) * item.quantity, 0).toFixed(2);
  };

  // Sample shipping info
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo(prevState => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle the form submission here (e.g., sending data to an API)
    alert("Order Placed Successfully!");
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-black mb-8">Checkout</h1>
      
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Order Summary</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          {cart.map(item => (
            <div key={item.id} className="flex items-center justify-between py-4 border-b">
              <div className="flex items-center">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md mr-6" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.price}</p>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between items-center text-xl font-semibold text-gray-800">
          <span>Total:</span>
          <span className="text-yellow-500">${calculateTotal()}</span>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Shipping Information</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={shippingInfo.name}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 border rounded-md border-gray-300"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-gray-700 font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={shippingInfo.address}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 border rounded-md border-gray-300"
              required
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="city" className="block text-gray-700 font-medium">City</label>
              <input
                type="text"
                name="city"
                value={shippingInfo.city}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border rounded-md border-gray-300"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="postalCode" className="block text-gray-700 font-medium">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={shippingInfo.postalCode}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border rounded-md border-gray-300"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={shippingInfo.phone}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 border rounded-md border-gray-300"
              required
            />
          </div>
          <div className="mt-6">
            <Link href="/payment">
              <button type="submit" className="w-full py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-200">
                Proceed to Payment
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;