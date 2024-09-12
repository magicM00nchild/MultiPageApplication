import React from 'react';
import './Header.css';
import { AiFillHome } from 'react-icons/ai';

const Header = () => {
  return (
    <div className="header-container">
      {/*TODO: switch to correct logo of page */}
      <AiFillHome className="header-home-icon" />
      <div className="link-list">
        <a href="/anime">Anime</a>
        <a href="/character">Character</a>
        <a href="/fanart">Fanart</a>
      </div>
    </div>
  );
};

export default Header;
