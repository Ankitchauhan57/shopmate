import React from "react";

export default function About() {
  return (
    <div className="px-4 py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl font-extrabold text-blue-700 mb-4">
            About ShopMate
          </h1>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Welcome to <span className="font-semibold">ShopMate</span> — your
            trusted online marketplace. We’re passionate about connecting
            people with the latest gadgets, fashion, and home essentials. Our
            goal is to make online shopping seamless, secure, and enjoyable.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            From carefully curated collections to unbeatable deals, we make sure
            every product you see is top-quality and worth your time. Our
            customer-first approach ensures fast delivery, hassle-free returns,
            and a smooth shopping experience every step of the way.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At ShopMate, innovation and customer satisfaction are at the heart
            of what we do. Join thousands of happy customers who shop smarter
            every day!
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80"
            alt="Our Team at Work"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>

      {/* Highlight Section */}
      <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3 gap-6 text-center mt-20">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Fast Delivery</h2>
          <p className="text-gray-600">
            Get your orders delivered quickly and safely across the country.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Top Quality</h2>
          <p className="text-gray-600">
            We partner with trusted brands to bring you premium products.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Customer Support</h2>
          <p className="text-gray-600">
            Our support team is here 24/7 to help you with any concerns.
          </p>
        </div>
      </div>
    </div>
  );
}
