// @flow 
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSpinner, FaMedal } from 'react-icons/fa'; 
import { fetchLeaderboardData } from '../../api/leaderboard'; 
import imageFame6 from '../../assets/Frame 8.png'; 

const Leaderboard = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const success = sessionStorage.getItem('success');
        if (!success) {
            navigate('/login');
        } else {
            const storedUserData = localStorage.getItem('userData');
            if (storedUserData) {
                setUserData(JSON.parse(storedUserData));
            }

            fetchLeaderboardData()
                .then(data => {
                    setLeaderboardData(data.leaderboards);
                    setLoading(false);
                })
                .catch(err => {
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

    return (
        <div className="min-h-screen mt-4 ml-4 text-white flex flex-col items-center font-roboto overflow-auto bg-black">
            <div className="flex flex-col items-center w-full max-w-md">
                <div className="flex items-center bg-gray-800 w-full p-4 rounded-lg mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-full">
                        <span className="text-xl font-bold text-white">{userData?.username?.[0]}</span>
                    </div>
                    <div className="ml-4 flex flex-col">
                        <span className="font-bold text-lg">{userData?.username}</span>
                        <span className="text-gray-400">{userData?.balance} DOGS</span>
                    </div>
                    <span className="ml-auto text-gray-400">#{userData?.rank}</span>
                </div>

                <h2 className="text-2xl font-bold mb-4">Telegram Wall of Fame</h2>
                
                {leaderboardData.map((player, index) => (
                    <div key={index} className="bg-gray-800 p-4 rounded-lg w-full mb-4 flex items-center">
                        <div className="flex items-center justify-center w-12 h-12 bg-gray-500 rounded-full">
                            <span className="text-xl font-bold text-white">{player.username[0]}</span>
                        </div>
                        <div className="ml-4 flex flex-col">
                            <span className="font-bold text-lg">{player.username}</span>
                            <span className="text-gray-400">{player.balance} DOGS</span>
                        </div>
                        <div className="ml-auto flex items-center">
                            {index === 0 && <FaMedal className="text-yellow-500 w-6 h-6" />}
                            {index === 1 && <FaMedal className="text-gray-300 w-6 h-6" />}
                            {index === 2 && <FaMedal className="text-orange-500 w-6 h-6" />}
                            {index > 2 && <span className="text-gray-400">#{index + 1}</span>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leaderboard;
