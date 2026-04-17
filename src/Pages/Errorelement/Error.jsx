import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
      <div className="text-center max-w-lg">
        
        {/* Error Code */}
        <h1 className="text-7xl md:text-9xl font-extrabold text-red-500 drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-400 text-sm md:text-base">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          {/* <button
            onClick={() => window.history.back()}
            className="px-6 py-2 rounded-xl bg-gray-700 hover:bg-gray-600 transition duration-300"
          >
            Go Back
          </button> */}

          <a
            href="/"
            className="px-6 py-2 rounded-xl bg-red-500 hover:bg-red-600 transition duration-300"
          >
            Go Home
          </a>
        </div>

        {/* Decorative Glow */}
        <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-red-500"></div>
      </div>
    </div>
  );
};

export default ErrorPage;