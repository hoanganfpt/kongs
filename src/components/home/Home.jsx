import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTrophy, FaUserFriends } from 'react-icons/fa'; // Thêm các icon từ react-icons

const Home = () => {
  return (
    <div>
      <nav className="bg-black p-4 fixed bottom-0 w-full">

        <ul className="flex justify-around text-white">
          <li className="flex flex-col items-center">
            <Link to="/">
              <FaHome className='ml-2' size={24} />
              <span>Home</span>
            </Link>
          </li>
          <li className="flex flex-col items-center">
            <Link to="/Leaderboard">
              <FaTrophy className='ml-8' size={24} />
              <span>Leaderboard</span>
            </Link>
          </li>
          <li className="flex flex-col items-center">   
            <Link to="/InviteFriends">
              <FaUserFriends className='ml-3' size={24} />
              <span>Friends</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
