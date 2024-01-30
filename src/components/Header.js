import React from 'react';
import logo from '../images/logo-clean3000-transparent.png';
import '../stylesheet/header.scss';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
    </header>
  );
}

export default Header;