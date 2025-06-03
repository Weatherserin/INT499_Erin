import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css'; 
import '../styles/navbar.css';

const Menu = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                 <li>
                     <Link to="/streamlist">StreamList</Link>
                </li>
                 <li>
                    <Link to="/movies">Movies</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
