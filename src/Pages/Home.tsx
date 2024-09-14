import './Home.css';
import CarouselTileList from '../Components/CarouselList/CarouselTileList';
import Header from '../Components/Header/Header';
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
