import React from "react";

export const LoadingCard = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-700 animate-pulse relative">
      <div className="text-center mb-6">
        <div className="w-48 h-48 mx-auto bg-gray-700 rounded-lg mb-4"></div>
        <div className="h-8 bg-gray-700 rounded-lg mb-2 w-48 mx-auto"></div>
        <div className="h-6 bg-gray-700 rounded-lg w-16 mx-auto"></div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 rounded-lg p-4 text-center border border-gray-700">
          <div className="h-4 bg-gray-700 rounded mb-2"></div>
          <div className="h-8 bg-gray-700 rounded"></div>
        </div>
        <span className="text-gray-400 text-sm absolute top-2 left-2">
          Loading...
        </span>
        <div className="bg-gray-900 rounded-lg p-4 text-center border border-gray-700">
          <div className="h-4 bg-gray-700 rounded mb-2"></div>
          <div className="h-8 bg-gray-700 rounded"></div>
        </div>
      </div>

      <div className="text-center">
        <div className="h-4 bg-gray-700 rounded mb-3 w-16 mx-auto"></div>
        <div className="flex justify-center gap-3">
          <div className="h-8 bg-gray-700 rounded-full w-20"></div>
          <div className="h-8 bg-gray-700 rounded-full w-20"></div>
        </div>
      </div>
    </div>
  );
};
