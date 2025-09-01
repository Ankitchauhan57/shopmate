import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      await axios.post('https://shopmate-backend-81uv.onrender.com/register', { name, email, password });
      setMessage('Registration successful! Redirecting to login...');
      setTimeout(() => navigate('/login'), 2000); // redirect after 2s
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Create an Account</h1>
        {message && <p className="text-green-600 text-center mb-4">{message}</p>}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="password"
            placeholder="Password (min. 6 characters)"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded transition w-full"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-4">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-green-600 hover:underline"
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
}
