import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import images from '../assets/Layer_1.png';

const Loading = () => {
  return (
    <div className="  min-h-screen flex flex-col justify-center items-center">
      <div className="p-2 rounded-lg w-12/12 max-w-md flex flex-col items-center">
        <img className="w-1/2 mt-2 shadow-lg" src={images} alt="Kongs" />
        <div className="w-full py-3 px-2 mt-10 rounded-full font-bold flex items-center justify-center bg-gray-500 text-white cursor-not-allowed">
          <FaSpinner className="animate-spin mr-2" /> Loading...
        </div>
      </div>
    </div>
  );
};

export default Loading;
