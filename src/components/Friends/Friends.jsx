// @flow 
import React from 'react';
import image from '../../assets/Layer_1.png'; // Đảm bảo rằng đường dẫn là chính xác

const InviteFriends = () => {
    return (
        <div className=" min-h-screen text-white flex flex-col items-center font-roboto">
            <div className="flex mt-20 flex-col items-center w-11/12 max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Invite friends and get more KONGS</h2>
                <img className="w-[50%] h-[50%] mb-4" src={image} alt="Invite Friends" />
                <p className="text-center mb-4">Tap on the button to invite your friends</p>
                <button className="w-full bg-white text-black py-4 px-4 rounded-lg font-bold">Invite friends</button>
            </div>
        </div>
    );
};

export default InviteFriends;
