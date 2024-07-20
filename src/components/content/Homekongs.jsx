import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import image from '../../assets/Layer_1.png';
import imageFame from '../../assets/Frame 4.png';
import imageFame6 from '../../assets/Frame 8.png';
import { fetchLeaderboardData } from '../../api/leaderboard';

const Homekongs = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const success = sessionStorage.getItem('success');
        console.log('Mã success:', success);
        if (!success) {
            navigate('/login');
        } else {
            fetchLeaderboardData()
                .then(data => {
                    console.log("Dữ liệu bảng xếp hạng đã lấy về:", data);
                    const user = JSON.parse(localStorage.getItem('userData'));
                    setUserData(user);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Lỗi khi lấy dữ liệu bảng xếp hạng:", err);
                    setError(err.message);
                    setLoading(false);
                });
        }
    }, [navigate]);

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

    const calculateTotalKongs = (rewards) => {
        return rewards.age + rewards.boost + rewards.frens + rewards.premium;
    };

    return (
        <div className="min-h-screen text-white flex flex-col items-center font-roboto overflow-y-auto">
            {userData && (
                <div className="mt-10 w-11/12 max-w-md">
                    <div className="flex flex-col items-center mt-10 w-11/12 max-w-md">
                        <img className="w-[50%] h-[50%] mb-4" src={image} alt="Kongs" />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <span className="bg-gray-700 p-2 rounded-full flex items-center justify-center">
                                <img className="w-6 h-6" src={imageFame} alt="Account age" />
                            </span>
                            <span className="ml-2 font-semibold">Account age</span>
                        </div>
                        <span className="font-semibold">
                            +{calculateTotalKongs(userData.rewards)} KONGS
                        </span>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg mt-6 max-w-md items-center">
                        <h2 className="text-xl font-bold">KONGS COMMUNITY</h2>
                        <p className="mt-4">Home ..</p>
                        <a
                            href="https://t.me/kongs2024"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block  bg-white mt-6 text-black py-2 px-6 rounded-lg  font-bold  text-center"
                        >
                            Join
                        </a>
                    </div>
                    {userData.rewards && (
                        <>
                            <div className="flex justify-between mt-4 items-center mb-4">
                                <div className="flex items-center">
                                    <span className="bg-gray-700 p-2 rounded-full flex items-center justify-center">
                                        <img className="w-6 h-6" src={imageFame6} alt="Boost" />
                                    </span>
                                    <span className="ml-2 font-semibold">Boost</span>
                                </div>
                                <span className="font-semibold">+{userData.rewards.boost} KONGS</span>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center">
                                    <span className="bg-gray-700 p-2 rounded-full flex items-center justify-center">
                                        <img className="w-6 h-6" src={imageFame6} alt="Frens" />
                                    </span>
                                    <span className="ml-2 font-semibold">Frens</span>
                                </div>
                                <span className="font-semibold">+{userData.rewards.frens} KONGS</span>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center">
                                    <span className="bg-gray-700 p-2 rounded-full flex items-center justify-center">
                                        <img className="w-6 h-6" src={imageFame6} alt="Premium" />
                                    </span>
                                    <span className="ml-2 font-semibold">Premium</span>
                                </div>
                                <span className="font-semibold">+{userData.rewards.premium} KONGS</span>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Homekongs;
