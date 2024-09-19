import React from 'react';
import './SubPageWithCarusel.css';
import CarouselTileList from '../Components/CarouselList/CarouselTileList';
import { PageType, TileContent } from '../types';
import { animeTiles } from './Content/Anime';
import { characterTiles } from './Content/Character';
import { fanartTiles } from './Content/Fanart';
import { placeholderTiles } from './Content/Placeholder';

const SubPageWithCarusel = ({ type, content }: { type: any; content: any }) => {
  const tileMap: Record<PageType, TileContent[]> = {
    anime: animeTiles,
    character: characterTiles,
    fanart: fanartTiles,
  };

  const tiles: TileContent[] = tileMap[type as PageType] || placeholderTiles;
  return (
    <div className="sub-page-with-carusel">
      <div className="sub-page-with-carusel-body">
        <CarouselTileList tiles={tiles} />
      </div>
    </div>
  );
};

export default SubPageWithCarusel;
