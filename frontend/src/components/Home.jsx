import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="text-center text-white p-8">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Our App</h1>
        <p className="text-lg mb-8 max-w-md mx-auto">
          Your journey starts here! Sign up to create your account or log in if you already have one.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/signup"
            className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="bg-transparent border border-white text-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-indigo-600 transition"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
