import React, { useState } from 'react';
import './CarouselTileList.css';
import Tile, { TileType } from '../Tiles/Tile';

interface Tile {
  id: number;
  content: any;
  imageSrc: string;
}

const CarouselTileList: React.FC = () => {
  const tiles: Tile[] = [
    {
      id: 0,
      content: { title: '0', info: 'test2' },
      imageSrc: require('../Pictures/images.png'),
    },
    {
      id: 1,
      content: { title: '1', info: 'test2' },
      imageSrc: require('../Pictures/images.png'),
    },
    {
      id: 2,
      content: { title: '2', info: 'test2' },
      imageSrc: require('../Pictures/images.png'),
    },
    {
      id: 3,
      content: { title: '3', info: 'test2' },
      imageSrc: require('../Pictures/images.png'),
    },
    {
      id: 4,
      content: { title: '4', info: 'test2' },
      imageSrc: require('../Pictures/images.png'),
    },
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
      <button className="carousel-button left" onClick={handlePrev}>
        ◀
      </button>
      <div className="carousel">
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
      </div>
      <button className="carousel-button right" onClick={handleNext}>
        ▶
      </button>
    </div>
  );
};

export default CarouselTileList;
