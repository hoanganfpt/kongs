import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import image from '../../assets/Layer_1.png'; 
import imageFame from '../../assets/Frame 4.png';
import imageFame6 from '../../assets/Frame 8.png'; 
import { fetchLeaderboardData } from '../../api/leaderboard';

const Homekongs = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log('Mã token:', token);
        if (!token) {
            navigate('/login');
        } else {
            const storedUserData = localStorage.getItem('userData');
            console.log('Dữ liệu người dùng được lưu trữ:', storedUserData);
            if (storedUserData) {
                const parsedUserData = JSON.parse(storedUserData);
                console.log('Dữ liệu người dùng sau khi phân tích:', parsedUserData);
                setUserData([parsedUserData]);
            } else {
                console.log('Không tìm thấy dữ liệu người dùng đã lưu trữ.');
            }

            fetchLeaderboardData()
                .then(data => {
                    console.log("Dữ liệu bảng xếp hạng đã lấy về:", data); 
                    setLeaderboardData(data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Lỗi khi lấy dữ liệu bảng xếp hạng:", err);
                    setError(err.message);
                    setLoading(false);
                });
        }
    }, [navigate]);

    useEffect(() => {
        if (userData.length > 0) {
            console.log("Dữ liệu người dùng đã được thiết lập:", userData);
        } else {
            console.log("Dữ liệu người dùng chưa được thiết lập");
        }
    }, [userData]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <FaSpinner className="animate-spin text-4xl" />
            </div>
        );
    }

    if (error) {
        return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
    }

    return (
        <div className="min-h-screen text-white flex flex-col items-center font-roboto overflow-hidden">
            <div className="flex flex-col items-center mt-10 w-11/12 max-w-md">
                <img className="w-[50%] h-[50%] mb-4" src={image} alt="Kongs" />
                <h1 className="text-4xl font-bold mt-4">9,999 KONGS</h1>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mt-6 w-11/12 max-w-md">
                <h2 className="text-xl font-bold">KONGS COMMUNITY</h2>
                <p className="mt-2">Home ..</p>
            </div>

            {userData.map((user, index) => (
                <div key={index} className="mt-10 w-11/12 max-w-md">
                    <h2 className="text-xl font-bold">Your Balance</h2>
                    <div className="mt-4">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center">
                                <span className="bg-gray-700 p-2 rounded-full flex items-center justify-center">
                                    <img className="w-6 h-6" src={image} alt="Balance" />
                                </span>
                                <span className="ml-2 font-semibold"></span>
                            </div>
                            <span className="font-semibold">{user.balance} KONGS</span>
                        </div>
                        <h2 className="text-xl font-bold mt-10">Your Rewards</h2>
                        {user.rewards && (
                            <>
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center">
                                        <span className="bg-gray-700 p-2 rounded-full flex items-center justify-center">
                                            <img className="w-6 h-6" src={imageFame} alt="Account age" />
                                        </span>
                                        <span className="ml-2 font-semibold">Account age</span>
                                    </div>
                                    <span className="font-semibold">+{user.rewards.age} KONGS</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center">
                                        <span className="bg-gray-700 p-2 rounded-full flex items-center justify-center">
                                            <img className="w-6 h-6" src={imageFame6} alt="Boost" />
                                        </span>
                                        <span className="ml-2 font-semibold">Boost</span>
                                    </div>
                                    <span className="font-semibold">+{user.rewards.boost} KONGS</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center">
                                        <span className="bg-gray-700 p-2 rounded-full flex items-center justify-center">
                                            <img className="w-6 h-6" src={imageFame6} alt="Frens" />
                                        </span>
                                        <span className="ml-2 font-semibold">Frens</span>
                                    </div>
                                    <span className="font-semibold">+{user.rewards.frens} KONGS</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center">
                                        <span className="bg-gray-700 p-2 rounded-full flex items-center justify-center">
                                            <img className="w-6 h-6" src={imageFame6} alt="Premium" />
                                        </span>
                                        <span className="ml-2 font-semibold">Premium</span>
                                    </div>
                                    <span className="font-semibold">+{user.rewards.premium} KONGS</span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            ))}

            {leaderboardData && (
                <div className="mt-10 w-11/12 max-w-md">
                    <h2 className="text-xl font-bold">Leaderboard</h2>
                    <div className="mt-4">
                        {leaderboardData.map((player, index) => (
                            <div key={index} className="flex justify-between items-center mb-4">
                                <div className="flex items-center">
                                    <span className="bg-gray-700 p-2 rounded-full flex items-center justify-center">
                                        <img className="w-6 h-6" src={imageFame6} alt="Player" />
                                    </span>
                                    <span className="ml-2 font-semibold">{player.username}</span>
                                </div>
                                <span className="font-semibold">{player.balance} KONGS</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Homekongs;
