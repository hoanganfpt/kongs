import React, { useState, useEffect } from 'react';
import image from '../../assets/Layer_1.png';
import { getInvitees } from '../../api/api';

const InviteFriends = () => {
    const [invitees, setInvitees] = useState([]);

    useEffect(() => {
        fetchInvitees();
    }, []);

    const fetchInvitees = async () => {
        try {
            const result = await getInvitees();
            console.log('Invitees data:', result);
            setInvitees(result);
        } catch (error) {
            console.error('Failed to fetch invitees:', error);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center font-dogs">
            <div className="flex flex-col items-center w-11/12 max-w-md mt-10">
                <h2 className="text-2xl font-bold mb-6 text-center">Invite friends and get more DOGS</h2>
                <img className="w-[50%] h-[50%] mb-4" src={image} alt="Invite Friends" />
                <div className="w-full mt-8">
                    <h3 className="text-xl font-bold mb-4">Invitees</h3>
                    {invitees.length === 0 ? (
                        <p>No invitees</p>
                    ) : (
                        invitees.map((invitee, index) => (
                            <div key={index} className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center text-lg">
                                        {invitee.username.charAt(0).toUpperCase()}
                                    </div>
                                    <span className="ml-2">{invitee.username}</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>

            </div>
        </div>
    );
};

export default InviteFriends;
