// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/home/Home';
import './index.css'
import Leaderboard from './components/Leaderboard/Leaderboard';
import Homekongs from './components/content/Homekongs';
import InviteFriends from './components/Friends/Friends';
import LoginWithTelegram from './Login/Login';
import BoostScore from './components/BoostScore/BoostScore';
import BoostScores2 from './components/BoostScore/BoostScore2';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col  h-screen">
        <main className="flex-grow overflow-auto">
          <Routes>
            <Route path="/" element={<LoginWithTelegram />} />
            <Route path="/home" element={<Homekongs />} />
            <Route path="/Leaderboard" element={<Leaderboard />} />
            <Route path="/InviteFriends" element={<InviteFriends />} />
            <Route path="/BoostScore/:id" element={<BoostScore />} />
            <Route path="/BoostScores2/:id" element={<BoostScores2 />} />
          </Routes>
        </main>
        <ShowHome />
      </div>
    </Router>
  );
};

const ShowHome = () => {
  const location = useLocation();
  return location.pathname !== '/' ? <Home /> : null;
};

export default App;
