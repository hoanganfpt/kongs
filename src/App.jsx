import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home/Home';
import './index.css'
import Leaderboard from './components/Leaderboard/Leaderboard';
import Homekongs from './components/content/Homekongs';
import InviteFriends from './components/Friends/Friends';
import LoginWithTelegram from './Login/Login';
import BoostScore from './components/BoostScore/BoostScore';
import BoostScores from './components/BoostScore/BoostScore2';

const App = () => {
  return (
    <Router>
      <div className="">
        <main className="">
          <Routes>
            <Route path="/" element={<LoginWithTelegram />} />
            <Route path="/home" element={<Homekongs />} />
            <Route path="/Leaderboard" element={<Leaderboard />} />
            <Route path="/InviteFriends" element={<InviteFriends />} />
            <Route path="/BoostScore" element={<BoostScore />} />
            <Route path="/BoostScore2" element={<BoostScores />} />
          </Routes>
        </main>
        <Home />
      </div>
    </Router>
  );
};

export default App;
