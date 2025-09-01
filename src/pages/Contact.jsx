import React from "react";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Banner */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
          alt="Contact Banner"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-extrabold">Get in Touch</h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">
            Contact Information
          </h2>
          <p className="text-gray-700 mb-4">
            Have questions about your orders or products? We're here to help!
            Reach out to us through email, phone, or visit us at our office.
          </p>
          <ul className="space-y-3 text-gray-800">
            <li>
              📍 <span className="font-semibold">Address:</span> 123 Market
              Street, New Delhi, India
            </li>
            <li>
              📞 <span className="font-semibold">Phone:</span> +91 98765 xxxxx
            </li>
            <li>
              📧 <span className="font-semibold">Email:</span> support@shopmate.com
            </li>
            <li>
              🕒 <span className="font-semibold">Hours:</span> Mon–Sat: 9:00am –
              8:00pm
            </li>
          </ul>
          <img
            src="https://images.unsplash.com/photo-1581090700227-4c4d63c49242?auto=format&fit=crop&w=600&q=80"
            alt="Office"
            className="mt-6 rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
