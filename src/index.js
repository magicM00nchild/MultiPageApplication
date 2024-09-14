import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Theme.css';
import Home from './Pages/Home';
import Anime from './Pages/Anime';
import Character from './Pages/Character';
import Fanart from './Pages/Fanart';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime" element={<Anime/>} />
        <Route path="/character" element={<Character/>} />
        <Route path="/fanart" element={<Fanart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

