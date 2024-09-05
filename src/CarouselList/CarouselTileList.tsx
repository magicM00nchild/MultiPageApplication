import React, { useEffect, useState } from 'react';
import Tile from '../AnimeTile/Tile';
import './CarouselTileList.css'

interface Tile {
  id: number;
  content: string;
}

const CarouselTileList: React.FC = () => {
  const tiles: Tile[] = [
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


  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tiles.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? tiles.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={handlePrev}>
        ◀
      </button>
      <div className="carousel">
        {visibleTiles.map((tile, index) => (
          <div
            key={tile.id}
            className={`carousel-item ${
              index === currentIndex ? 'active' : ''
            }`}
          >
            <Tile>{tile.content}</Tile>
          </div>
        ))}
      </div>
      <button className="carousel-button right" onClick={handleNext}>
        ▶
      </button>
    </div>
  );
};

export default CarouselTileList;
