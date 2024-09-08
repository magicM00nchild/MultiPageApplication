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
  type: string
  content?: any
}

const Tile: React.FC<TileProps> = ({
  borderRadius = '10px',
  backgroundColor = '#3498db',
  type,
  content,
}) => {
  const imageSrc = require('../Pictures/images.png')
  return (
    <div
      className={`tile ${type}`}>
      {content ? 
      <div className='tilePicture'>
        { imageSrc && <img src={imageSrc} alt="Tile" />}
      </div>
             : null}
      {content ? 
      <div className='tileInfo'>
        <div className="title">
          <text>
            { content.title }
          </text>
        </div>
        <div className="info">
          <text> { content.info } </text>
        </div>
      </div>
      : null}

    </div>
  );
};

export default Tile;
