// @flow 
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSpinner, FaMedal } from 'react-icons/fa'; // Sử dụng icon từ react-icons
import { fetchLeaderboardData } from '../../api/leaderboard'; // Import hàm fetchLeaderboardData
import imageFame6 from '../../assets/Frame 8.png'; 

const Leaderboard = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Sử dụng hook useNavigate để điều hướng

    useEffect(() => {
        fetchLeaderboardData()
            .then(data => {
                // Sắp xếp dữ liệu theo số tiền giảm dần
                const sortedData = data.sort((a, b) => b.balance - a.balance);
                setLeaderboardData(sortedData);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

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

    const handleBoostScore = (playerId) => {
        navigate(`/BoostScore/${playerId}`);
    };

    return (
        <div className="min-h-screen text-white flex flex-col items-center font-roboto">
            <div className="flex flex-col items-center mt-20 w-11/12 max-w-md">
                <h2 className="text-2xl font-bold mb-4">Telegram Wall of Fame</h2>
                {leaderboardData.map((player, index) => (
                    <div key={index} className="bg-gray-800 p-4 rounded-lg w-full mb-4">
                        <div className="flex items-center mb-2">
                            <div className="w-12 h-12 rounded-full bg-gray-500">
                                <img className="w-12 h-12 rounded-full" src={imageFame6} alt="Player" />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-bold">{player.username}</h3>
                                <p>{player.balance} KONGS</p>
                            </div>
                            <div className="ml-auto">
                                {index === 0 && <FaMedal className="text-yellow-500 w-6 h-6" />} {/* Huy chương vàng */}
                                {index === 1 && <FaMedal className="text-gray-300 w-6 h-6" />} {/* Huy chương bạc */}
                                {index === 2 && <FaMedal className="text-orange-500 w-6 h-6" />} {/* Huy chương đồng */}
                            </div>
                        </div>
                        <span className="ml-auto text-gray-400">#{player.id}</span>
                        <button
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-bold mt-2"
                            onClick={() => handleBoostScore(player.id)}
                        >
                            Boost score
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leaderboard;
