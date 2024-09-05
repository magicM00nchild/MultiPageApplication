import React from 'react';
import './Tile.css';  // Importiere die CSS-Datei

interface TileProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
}

const Tile: React.FC<TileProps> = ({
  borderRadius = '10px',
  backgroundColor = '#3498db',
  children
}) => {
  return (
    <div
      className="tile"
    >
      {children}
    </div>
  );
};

export default Tile;
