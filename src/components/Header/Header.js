import React from 'react';
import Logo from '../../assets/nasa-logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="container header-content">
        <a
          href="/"
          className="logo">
            Nasa Imagery
        </a>
        <div className="nav">
          <img src={Logo} alt="Logo"/>
        </div>
      </div>
    </div>
  );
}

export default Header;