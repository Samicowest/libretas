import React from "react";
import Logo from "@/assets/logo.png";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Picture */}
      <img
        src={Logo} // Replace with your image path
        alt="Loading"
        className="w-32 h-32 mb-8 animate-bounce" // Add a bounce animation
      />

      {/* Spinner */}
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse delay-100"></div>
        <div className="w-4 h-4 bg-pink-500 rounded-full animate-pulse delay-200"></div>
      </div>

      {/* Loading Text */}
      <p className="mt-6 text-lg text-gray-700 font-semibold">
        Loading, please wait...
      </p>
    </div>
  );
};

export default LoadingSpinner;
