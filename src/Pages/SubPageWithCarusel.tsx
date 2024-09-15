import React from 'react';
import './SubPageWithCarusel.css';
import CarouselTileList from '../Components/CarouselList/CarouselTileList';
import { PageType } from '../types';
import { animeTiles } from './Content/Anime';
import { characterTiles } from './Content/Character';
import { fanartTiles } from './Content/Fanart';
import { placeholderTiles } from './Content/Placeholder';

const SubPageWithCarusel = ({ type, content }: { type: any; content: any }) => {
  console.log(type, content);
  let tiles;

  switch (type) {
    case PageType.anime:
        tiles= animeTiles
      break;

    case PageType.character:
        tiles = characterTiles
      break;

    case PageType.fanart:
        tiles = fanartTiles
      break;

    default:
        tiles = placeholderTiles
      break;
  }

  return (
    <div className="sub-page-with-carusel">
      <div className="sub-page-with-carusel-body">
        <CarouselTileList tiles={tiles} />
      </div>
    </div>
  );
};

export default SubPageWithCarusel;
