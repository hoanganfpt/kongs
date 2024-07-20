import React, { useState } from 'react';
import { FaStar, FaArrowLeft, FaChevronDown } from 'react-icons/fa';
import image from '../../assets/Group 9.png';  // Đảm bảo đường dẫn chính xác tới tệp hình ảnh của bạn

const BoostScores2 = () => {
  const [selected, setSelected] = useState(500);

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center text-white">
      <div className="bg-gray-800 p-6 rounded-lg w-11/12 max-w-md">
        <div className="flex justify-between items-center mb-4">
          <FaArrowLeft className="text-xl cursor-pointer" />
          <h2 className="text-2xl font-bold">Boost Score</h2>
        </div>
        <div className="flex flex-col items-center mb-4">
          <img className="w-[50%] h-[50%] mb-4" src={image} alt="Boost Score" />
          <p className="text-center">250 Star Needed</p>
          <p className="text-center text-sm">Buy Stars and use them on Banana and other miniapps.</p>
        </div>
        <div className="w-full mb-4">
          {[250, 500, 1000, 2000].map((amount) => (
            <div
              key={amount}
              className={`flex items-center justify-between p-4 mb-2 rounded-lg bg-gray-700 cursor-pointer ${
                selected === amount ? 'border border-yellow-500' : ''
              }`}
              onClick={() => setSelected(amount)}
            >
              <div className="flex items-center">
                <FaStar className="text-yellow-500 mr-2" />
                <span>{amount} Star</span>
              </div>
              <span>{(amount * 479.99).toLocaleString()} đ</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mb-4">
          <button className="flex items-center justify-center bg-gray-700 w-full py-2 px-4 rounded-lg">
            Show More Option <FaChevronDown className="ml-2" />
          </button>
        </div>
        <p className="text-center text-xs">
          By proceeding and purchasing Stars, you agree with the <span className="text-blue-500">Terms and Conditions.</span>
        </p>
      </div>
    </div>
  );
};

export default BoostScores2;
