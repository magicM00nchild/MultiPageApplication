import React from 'react';
import './Header.css';
import { AiFillHome } from 'react-icons/ai';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-home-icon-container">
        {/*TODO: switch to correct logo of page */}
        <AiFillHome className="header-home-icon" />
      </div>
      <div className="link-list">
        <a href="/anime">Anime</a>
        <a href="/character">Character</a>
        <a href="/fanart">Fanart</a>
      </div>
      <div className='button-list'>
        <a href="/login">Login</a>
        <a href="/signup">SignUp</a>
      </div>
    </div>
  );
};

export default Header;
