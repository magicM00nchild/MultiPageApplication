import React, { useState } from 'react';
import './CarouselTileList.css'
import Tile, { TileType } from '../Tiles/Tile';

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
        <div
            className={'carousel-item'}
          >
        <Tile type={currentIndex === 0 ? TileType.Placeholder : TileType.Inactive }>{currentIndex === 0 ? null : tiles[currentIndex-1].content}</Tile>
      </div>
        <div
            className={'carousel-item active'}
          >
          <Tile type={TileType.Main}>{tiles[currentIndex].content}</Tile>
        </div>
        <div
            className={'carousel-item'}
          >
        <Tile type={currentIndex === tiles.length-1 ? TileType.Placeholder : TileType.Inactive}>{currentIndex === tiles.length-1 ? null : tiles[currentIndex+1].content}</Tile>
      </div>
      </div>
      <button className="carousel-button right" onClick={handleNext} disabled={disableRight()}>
        ▶
      </button>
    </div>
  );
};

export default CarouselTileList;
