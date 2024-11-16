import React, { useContext, useState } from "react";
import Layout from "../../Home/Layout";
import { ProductContext } from "../../../App";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { RiSubtractFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";

export default function ShoppingCart() {
  const { cartValue, removeFromCart } = useContext(ProductContext);
  const [quantities, setQuantities] = useState(
    cartValue.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  // Update the quantity for an item
  const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => {
      const newQuantity = Math.max(1, (prev[id] || 1) + delta);
      return { ...prev, [id]: newQuantity };
    });
  };

  // Calculate total price
  const totalPrice = cartValue.reduce((total, item) => {
    return total + item.price * (quantities[item.id] || 1);
  }, 0);

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        {cartValue.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartValue.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-4 shadow-md rounded-lg bg-white mb-4 p-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.thumbnail || item.images[0]}
                    alt={item.name}
                    className="w-20 h-auto mr-4 rounded-md shadow-sm"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-700">${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <button
                        className="mr-2 p-2 border border-gray-400 rounded hover:bg-gray-200 transition"
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        <RiSubtractFill />
                      </button>
                      <span>{quantities[item.id]}</span>
                      <button
                        className="ml-2 p-2 border border-gray-400 rounded hover:bg-gray-200 transition"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  className="text-red-500 hover:text-red-700 transition"
                  onClick={() => {
                    removeFromCart(item.id);
                    toast.success(`${item.name} removed from cart`);
                  }}
                >
                  <RxCross1 className="text-lg" />
                </button>
              </div>
            ))}
            <div className="mt-4 text-right">
              <h2 className="text-xl font-semibold">
                Total: ${totalPrice.toFixed(2)}
              </h2>
            </div>
            <div className="flex justify-between mt-6">
              <Link
                to="/"
                className="text-blue-600 underline hover:text-blue-800 transition"
              >
                Continue Shopping
              </Link>
              <Link
                to="/checkout"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
