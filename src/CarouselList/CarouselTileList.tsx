import React, { useState } from 'react';
import './CarouselTileList.css'
import Tile, { TileType } from '../Tiles/Tile';

interface Tile {
  id: number;
  content: any
}

const CarouselTileList: React.FC = () => {
  const tiles: Tile[] = [
    { id: 0, content: {title: 'test', info: 'test2' } },
    { id: 1, content: {title: 'test', info: 'test2' } },
    { id: 2, content: {title: 'test', info: 'test2' } },
    { id: 3, content: {title: 'test', info: 'test2' } },
    { id: 4, content: {title: 'test', info: 'test2' } },
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
          <Tile type={currentIndex === 0 ? TileType.Placeholder : TileType.Inactive } content={currentIndex === 0 ? null :tiles[currentIndex-1].content} />
        </div>
        <div
            className={'carousel-item active'}
          >
          <Tile type={TileType.Main} content={tiles[currentIndex].content} />
        </div>
        <div
            className={'carousel-item'}
          >
          <Tile type={currentIndex === tiles.length-1 ? TileType.Placeholder : TileType.Inactive} content={currentIndex === tiles.length-1 ? null :tiles[currentIndex+1].content} />
      </div>
      </div>
      <button className="carousel-button right" onClick={handleNext} disabled={disableRight()}>
        ▶
      </button>
    </div>
  );
};

export default CarouselTileList;
