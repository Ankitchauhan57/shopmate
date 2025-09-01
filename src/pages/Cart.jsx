import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      className="min-h-screen p-6"
      style={{
        background: "linear-gradient(135deg, lightblue, blue)",
        backdropFilter: "blur(8px)",
        color: "white",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-6 text-center">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-300">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white bg-opacity-10 backdrop-blur-lg p-4 rounded-xl shadow-lg hover:scale-[1.01] transition-transform"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.img || "https://via.placeholder.com/80"}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-bold text-lg">{item.name}</p>
                    <p className="text-green-400 font-semibold">₹{item.price}</p>
                  </div>
                </div>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Cart Summary */}
            <div className="mt-6 p-4 bg-white bg-opacity-10 rounded-xl text-right shadow-lg">
              <p className="text-xl font-semibold">
                Total: <span className="text-green-400">₹{totalPrice.toFixed(2)}</span>
              </p>
              <button
                className="mt-3 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md transition"
                onClick={() => navigate("/checkout")}
              >
                Checkout
              </button>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}
