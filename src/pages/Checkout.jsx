import React, { useEffect, useState } from "react";

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment: "cod",
  });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    console.log("Order placed:", { form, cart });
    alert("Order placed successfully!");
    localStorage.removeItem("cart");
    setCart([]);
    setForm({
      name: "",
      email: "",
      phone: "",
      address: "",
      payment: "cod",
    });
  };

  return (
    <div
      className="min-h-screen p-6"
      style={{
        background: "linear-gradient(135deg, rgba(37,99,235,0.8), rgba(96,165,250,0.7))",
        backdropFilter: "blur(10px)",
        color: "white",
      }}
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Checkout Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl shadow-xl space-y-4"
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-100">Checkout</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 rounded-md text-black focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 rounded-md text-black focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-2 rounded-md text-black focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="address"
            placeholder="Shipping Address"
            value={form.address}
            onChange={handleChange}
            className="w-full p-2 rounded-md text-black focus:ring-2 focus:ring-blue-400"
            required
          />
          <select
            name="payment"
            value={form.payment}
            onChange={handleChange}
            className="w-full p-2 rounded-md text-black focus:ring-2 focus:ring-blue-400"
          >
            <option value="cod">Cash on Delivery</option>
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition"
          >
            Place Order
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-blue-100">Order Summary</h2>
          {cart.length === 0 ? (
            <p className="text-blue-50">Your cart is empty.</p>
          ) : (
            <div className="space-y-3">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-blue-200 pb-2"
                >
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-blue-100">₹{item.price}</p>
                  </div>
                  <img
                    src={item.img || "https://via.placeholder.com/60"}
                    alt={item.name}
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                </div>
              ))}
              <p className="text-xl font-semibold text-right mt-4">
                Total: <span className="text-green-200">₹{totalPrice.toFixed(2)}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
