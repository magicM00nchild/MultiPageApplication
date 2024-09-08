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
      content: { title: 'test', info: 'test2' },
      imageSrc: require('../Pictures/images.png'),
    },
    {
      id: 1,
      content: { title: 'test', info: 'test2' },
      imageSrc: require('../Pictures/images.png'),
    },
    {
      id: 2,
      content: { title: 'test', info: 'test2' },
      imageSrc: require('../Pictures/images.png'),
    },
    {
      id: 3,
      content: { title: 'test', info: 'test2' },
      imageSrc: require('../Pictures/images.png'),
    },
    {
      id: 4,
      content: { title: 'test', info: 'test2' },
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
  const disableLeft = () => {
    if (currentIndex === 0) {
      return true;
    }
    return false;
  };
  const disableRight = () => {
    if (currentIndex === tiles.length - 1) {
      return true;
    }
    return false;
  };


  const prev = currentIndex === 0 ? null : tiles[currentIndex - 1]
  const next = currentIndex === tiles.length - 1 ? null : tiles[currentIndex + 1]

  return (
    <div className="carousel-container">
      <button
        className="carousel-button left"
        onClick={handlePrev}
        disabled={disableLeft()}
      >
        ◀
      </button>
      <div className="carousel">
        <div className={'carousel-item'}>
          <Tile
            type={prev == null ? TileType.Placeholder : TileType.Inactive}
            content={
              prev?.content
            }
            imageSrc={prev?.imageSrc}
          />
        </div>
        <div className={'carousel-item active'}>
          <Tile
            type={TileType.Main}
            content={tiles[currentIndex].content}
            imageSrc={tiles[currentIndex].imageSrc}
          />
        </div>
        <div className={'carousel-item'}>
          <Tile
            type={
              currentIndex === tiles.length - 1
                ? TileType.Placeholder
                : TileType.Inactive
            }
            content={ next?.content }
            imageSrc={next?.imageSrc}
          />
        </div>
      </div>
      <button
        className="carousel-button right"
        onClick={handleNext}
        disabled={disableRight()}
      >
        ▶
      </button>
    </div>
  );
};

export default CarouselTileList;
