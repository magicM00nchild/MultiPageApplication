export enum TileType {
  Main = 'main',
  Inactive = 'inactive',
}

export interface TileContent {
  id: number;
  content: any;
  imageSrc: string;
}

export enum PageType {
  anime = 'anime',
  character = 'character',
  fanart = 'fanart',
}
