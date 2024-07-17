// @flow 
import React from 'react';
import { FaMedal } from 'react-icons/fa'; // Sử dụng icon từ react-icons

const Leaderboard = () => {
    return (
        <div className="  min-h-screen text-white flex flex-col items-center font-roboto">
            <div className="flex flex-col items-center mt-20 w-11/12 max-w-md">
                <h2 className="text-2xl font-bold mb-4">Telegram Wall of Fame</h2>
                <div className="bg-gray-800 p-4 rounded-lg w-full mb-4">
                    <div className="flex items-center mb-2">
                        <div className="w-12 h-12 rounded-full bg-gray-500"></div> {/* Thay thế bằng hình ảnh của bạn */}
                        <div className="ml-4">
                            <h3 className="text-lg font-bold">Player Name 123</h3>
                            <p>9,999 KONGS</p>
                        </div>
                        <span className="ml-auto text-gray-400">#1234567</span>
                    </div>
                    <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-bold">Boost score</button>
                </div>

                <h2 className="text-2xl font-bold mb-4">99,9M holders</h2>
                <div className="bg-gray-800 p-4 rounded-lg w-full mb-4">
                    <div className="flex items-center mb-2">
                        <div className="w-12 h-12 rounded-full bg-gray-500"></div> {/* Thay thế bằng hình ảnh của bạn */}
                        <div className="ml-4">
                            <h3 className="text-lg font-bold">Player Name 123</h3>
                            <p>9,999,999 KONGS</p>
                        </div>
                        <div className="ml-auto">
                            <FaMedal className="text-yellow-500 w-6 h-6" /> {/* Huy chương vàng */}
                        </div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-12 h-12 rounded-full bg-gray-500"></div> {/* Thay thế bằng hình ảnh của bạn */}
                        <div className="ml-4">
                            <h3 className="text-lg font-bold">Player Name 123</h3>
                            <p>9,999,999 KONGS</p>
                        </div>
                        <div className="ml-auto">
                            <FaMedal className="text-gray-300 w-6 h-6" /> {/* Huy chương bạc */}
                        </div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-12 h-12 rounded-full bg-gray-500"></div> {/* Thay thế bằng hình ảnh của bạn */}
                        <div className="ml-4">
                            <h3 className="text-lg font-bold">Player Name 123</h3>
                            <p>9,999,999 KONGS</p>
                        </div>
                        <div className="ml-auto">
                            <FaMedal className="text-orange-500 w-6 h-6" /> {/* Huy chương đồng */}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Leaderboard;
