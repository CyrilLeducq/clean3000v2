import React from 'react';
import logo from '../images/logo-clean3000-transparent.png';
import '../stylesheet/header.scss';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <Link to="/" className="logo-link">
                <img src={logo} alt="Logo" className="logo" />
            </Link>
        </header>
    );
}

export default Header;