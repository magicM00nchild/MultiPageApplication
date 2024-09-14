import './Home.css';
import CarouselTileList from '../CarouselList/CarouselTileList';
import Header from '../Header/Header';
import React from 'react';

const Home = () => {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div className="App-body">
        <CarouselTileList />
      </div>
    </div>
  );
};

export default Home;
