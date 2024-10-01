import React from 'react';
import { FaHammer } from 'react-icons/fa'; // Importing a construction icon

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 text-center p-4">
      <FaHammer size={80} className="text-yellow-500 mb-4" />
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-2">Under Construction</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        We're working hard to bring you this section. Please check back later!
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
        Thank you for your patience!
      </p>
    </div>
  );
};

export default UnderConstruction;
