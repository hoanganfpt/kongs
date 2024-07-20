import React, { useState } from 'react';
import { FaStar, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom'; // Import useNavigate và useParams
import image from '../../assets/Group 9.png';  // Đảm bảo đường dẫn chính xác tới tệp hình ảnh của bạn

const BoostScore = () => {
  const { id } = useParams(); 
  const [selected, setSelected] = useState(500);
  const navigate = useNavigate(); // Sử dụng hook useNavigate để điều hướng

  const handleBack = () => {
    navigate(); // Quay lại trang trước
  };

  const handleConfirmAndPay = () => {
    navigate(`/BoostScores2/${id}`); 
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center text-white">
      <div className="bg-gray-800 p-6 rounded-lg w-11/12 max-w-md">
        <div className="flex justify-between items-center mb-4">
          <FaArrowLeft className="text-xl cursor-pointer" onClick={handleBack} />
          <h2 className="text-2xl font-bold">Boost Score</h2>
        </div>
        <div className="flex flex-col items-center mb-4">
          <img className="w-[50%] h-[50%] mb-4" src={image} alt="Boost Score" />
          <p className="text-center">Please select the amount of KONGS you would like to purchase.</p>
        </div>
        <div className="w-full mb-4">
          <div
            className={`flex items-center justify-between p-4 mb-2 rounded-lg border cursor-pointer ${
              selected === 250 ? 'border-yellow-500' : 'border-transparent'
            }`}
            onClick={() => setSelected(250)}
          >
            <FaStar className="text-yellow-500" />
            <span>250 = 250 KONGS</span>
          </div>
          <div
            className={`flex items-center justify-between p-4 mb-2 rounded-lg border cursor-pointer ${
              selected === 500 ? 'border-red-500' : 'border-transparent'
            }`}
            onClick={() => setSelected(500)}
          >
            <FaStar className="text-yellow-500" />
            <span>500 = 500 KONGS</span>
          </div>
          <div
            className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer ${
              selected === 1000 ? 'border-yellow-500' : 'border-transparent'
            }`}
            onClick={() => setSelected(1000)}
          >
            <FaStar className="text-yellow-500" />
            <span>1000 = 1000 KONGS</span>
          </div>
        </div>
        <button
          className="bg-blue-500 w-full py-2 px-4 rounded-full font-bold flex items-center justify-center"
          onClick={handleConfirmAndPay}
        >
          Confirm and pay <FaStar className="ml-2" /> {selected}
        </button>
      </div>
    </div>
  );
};

export default BoostScore;
