import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Theme.css';
import Home from './Pages/Home';
import Anime from './Pages/Anime';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime" element={<Anime/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

