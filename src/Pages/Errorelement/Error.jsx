import React from 'react';
import { useNavigate } from 'react-router';

const Error = () => {
    const navigate = useNavigate;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-10 text-center max-w-md w-full">
        
        <h1 className="text-7xl font-extrabold text-indigo-600">404</h1>
        
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          Oops! Page Not Found
        </h2>
        
        <p className="text-gray-500 mt-2 text-sm">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition duration-300"
        >
          Go Home
        </button>

      </div>
    </div>
  );
};

export default Error;