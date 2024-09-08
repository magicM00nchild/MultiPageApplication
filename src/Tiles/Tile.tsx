import React from 'react';
import './Tile.css';  

export enum TileType {
  Main = 'main',
  Inactive = 'inactive',
  Placeholder = 'placeholder',
}

interface TileProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
  type: string
}

const Tile: React.FC<TileProps> = ({
  borderRadius = '10px',
  backgroundColor = '#3498db',
  type,
  children
}) => {
  const imageSrc = require('../Pictures/images.png')
  return (
    <div
      className={`tile ${type}`}>
      <div className='tilePicture'>
        {imageSrc && <img src={imageSrc} alt="Tile" />}
      </div>
      <div className='tileInfo'>
        {children}
      </div>
    </div>
  );
};

export default Tile;
