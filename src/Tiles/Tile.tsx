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
  return (
    <div
      className={`tile ${type}`}>
      {children}
    </div>
  );
};

export default Tile;
