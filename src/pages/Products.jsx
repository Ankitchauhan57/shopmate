import React, { useEffect, useState } from "react";

const sampleProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    img: "https://m.media-amazon.com/images/I/515BArLM8oL._AC_UY327_FMwebp_QL65_.jpg",
    description: "High-quality wireless headphones with noise cancellation.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 89.99,
    img: "https://m.media-amazon.com/images/I/61gnwDgVZbL._AC_UY327_FMwebp_QL65_.jpg",
    description: "Track your health and fitness with style.",
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 39.99,
    img: "https://m.media-amazon.com/images/I/81QW6qOPIuL._AC_UY327_FMwebp_QL65_.jpg",
    description: "Durable backpack with multiple compartments for laptops and gadgets.",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 49.99,
    img: "https://m.media-amazon.com/images/I/51jFOZuPzYL._AC_UY327_FMwebp_QL65_.jpg",
    description: "High precision gaming mouse with customizable RGB lights.",
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 99.99,
    img: "https://m.media-amazon.com/images/I/61cvMO-HeeL._AC_UY327_FMwebp_QL65_.jpg",
    description: "Smooth typing experience with tactile feedback.",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 29.99,
    img: "https://m.media-amazon.com/images/I/71GNqOPWAuL._AC_UY327_FMwebp_QL65_.jpg",
    description: "Portable speaker with powerful sound.",
  },
];

export default function Products() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load cart from localStorage on mount
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div
      className="p-6"
      style={{
        background: "linear-gradient(135deg, rgba(57, 77, 229, 0.8), rgba(68, 82, 244, 0.96))",
        minHeight: "100vh",
        backdropFilter: "blur(8px)",
        color: "white",
      }}
    >
      {/* Banner */}
      <div className="backdrop-blur-md bg-white/20 text-white text-center py-12 px-4 shadow-lg">
        <h1 className="text-4xl font-bold mb-2">Our Exclusive Tech Collection</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Browse through our carefully curated gadgets, accessories, and tech must-haves — all in one place.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {sampleProducts.map((p) => (
          <div
            key={p.id}
            className="rounded-xl shadow-lg p-4 text-center bg-white bg-opacity-10 backdrop-blur-lg hover:scale-105 transition transform duration-300"
          >
            <img
              src={p.img}
              alt={p.name}
              className="mx-auto mb-3 rounded-lg h-48  object-cover"
            />
            <h2 className="font-bold text-xl">{p.name}</h2>
            <p className="text-sm text-gray-300 mt-1">{p.description}</p>
            <p className="text-green-400 font-semibold mt-2">₹{p.price}</p>
            <button
              className="mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
              onClick={() => addToCart(p)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
