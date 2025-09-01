import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // On mount: check if user is already logged in
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        if (parsedUser && typeof parsedUser === 'object') {
          setUser(parsedUser); // user already logged in
        }
      }
    } catch (err) {
      console.error('Failed to parse user from localStorage', err);
      localStorage.removeItem('user');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const res = await axios.post('https://shopmate-backend-81uv.onrender.com/login', { email, password });
      // Backend should return: { token, user: { name, email } }
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setUser(res.data.user);
      setMessage('Login successful!');
      setEmail('');
      setPassword('');
      // Optional redirect after login:
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setMessage('You have logged out.');
    setError('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          {user ? 'Welcome' : 'Welcome Back'}
        </h1>

        {message && <p className="text-green-600 text-center mb-4">{message}</p>}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {user ? (
          <div className="text-center space-y-4">
            <p className="text-gray-700">
              Logged in as <strong>{user.name || user.email}</strong>
            </p>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded transition w-full"
              >
                Login
              </button>
            </form>

            <p className="text-center text-gray-600 text-sm mt-4">
              Don’t have an account?{' '}
              <button
                onClick={() => navigate('/register')}
                className="text-green-600 hover:underline"
              >
                Register here
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
