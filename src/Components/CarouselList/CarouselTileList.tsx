import React, { useState } from 'react';
import './CarouselTileList.css';
import Tile from '../Tiles/Tile';
import { AiTwotoneRightCircle, AiTwotoneLeftCircle } from 'react-icons/ai';
import { TileType } from '../../types';

export interface TileContent {
  id: number;
  content: any;
  imageSrc: string;
}

const CarouselTileList = ({ tiles }: { tiles: TileContent[] }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tiles.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? tiles.length - 1 : prevIndex - 1
    );
  };

  const getTileType = (index: number) => {
    if (index === currentIndex) return TileType.Main;
    return TileType.Inactive;
  };

  const getVisibleTiles = () => {
    const prevIndex = (currentIndex - 1 + tiles.length) % tiles.length;
    const nextIndex = (currentIndex + 1) % tiles.length;
    return [prevIndex, currentIndex, nextIndex];
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
      <button className="carousel-button left" onClick={handlePrev}>
        <AiTwotoneLeftCircle />
      </button>
        {getVisibleTiles().map((index) => (
          <div
            key={tiles[index].id}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <Tile
              type={index === currentIndex ? TileType.Main : TileType.Inactive}
              content={tiles[index].content}
              imageSrc={tiles[index].imageSrc}
            />
          </div>
        ))}
        <button className="carousel-button right" onClick={handleNext}>
        <AiTwotoneRightCircle />
      </button>
      </div>
      
    </div>
  );
};

export default CarouselTileList;
