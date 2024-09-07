import React, { useEffect, useState } from 'react';
import Tile from '../AnimeTile/Tile';
import './CarouselTileList.css'

interface Tile {
  id: number;
  content: string;
}

const CarouselTileList: React.FC = () => {
  const tiles: Tile[] = [
    { id: 0, content: 'Tile 0' },
    { id: 1, content: 'Tile 1' },
    { id: 2, content: 'Tile 2' },
    { id: 3, content: 'Tile 3' },
    { id: 4, content: 'Tile 4' },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  //const [viewableTiles, setViewableTiles] = useState([0,1,2])
  const getVisibleTiles = () => {
    //if (tiles.length <= 3) return tiles; // Falls es weniger als 3 Tiles gibt

    const start = currentIndex === 0 ? 0 : currentIndex - 1;
    const end = currentIndex === tiles.length - 1 ? tiles.length : currentIndex + 2;

    return tiles.slice(start, end);
  };

  const visibleTiles = getVisibleTiles();
  console.log(currentIndex, visibleTiles[2].content)


  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tiles.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? tiles.length - 1 : prevIndex - 1
    );
  };
  const disableLeft = () => {
    if (currentIndex === 0){
      return true
    } 
    return false
  }
  const disableRight = ()=> {
    if (currentIndex === tiles.length - 1){
      return true
    }
    return false
   }

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={handlePrev} disabled={disableLeft()}>
        ◀
      </button>
      <div className="carousel">
        <Tile>{visibleTiles[0].content}</Tile>
        <Tile>{visibleTiles[1].content}</Tile>
        <Tile>{visibleTiles[2].content}</Tile>
 
        {/*
        {visibleTiles.map((tile, index) => (
          <div
            key={tile.id}
            className={`carousel-item ${
              index === currentIndex ? '' : ''
            }`}
          >
            <Tile>{tile.content}</Tile>
          </div>
        ))}
          */}
      </div>
      <button className="carousel-button right" onClick={handleNext} disabled={disableRight()}>
        ▶
      </button>
    </div>
  );
};

export default CarouselTileList;
