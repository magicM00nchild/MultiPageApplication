import { PageType } from './types';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import SubPageWithCarusel from './Pages/SubPageWithCarusel';
import React from 'react';

const routesConfig = [
  {
    path: '/',
    element: <Home />,
    layout: true,
  },
  {
    path: '/anime',
    element: (
      <SubPageWithCarusel type={PageType.anime} content="anime content" />
    ),
    layout: true,
  },
  {
    path: '/character',
    element: (
      <SubPageWithCarusel
        type={PageType.character}
        content="character content"
      />
    ),
    layout: true,
  },
  {
    path: '/fanart',
    element: (
      <SubPageWithCarusel type={PageType.fanart} content="fanart content" />
    ),
    layout: true,
  },
  {
    path: '/login',
    element: <Login />,
    layout: true,
  },
  {
    path: '/signup',
    element: <SignUp />,
    layout: true,
  },
];

export default routesConfig;
