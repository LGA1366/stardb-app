import React from "react";
import {Link} from "react-router-dom";
import "./Styles/Header.css";
import logo from "./../images/logo.svg";


function Header() {
    return (
        <header className="header container">
            <Link to="/" className="header__link">
                <img src={logo} alt="Logo"/>
            </Link>
            <ul className="header__nav nav-list list-reset">
                <li className="nav-list__item">
                    <Link to="./starships" className="nav-list__link">Starships</Link>
                </li>
                <li className="nav-list__item">
                    <Link to="./planets" className="nav-list__link">Planets</Link>
                </li>
            </ul>
        </header>

    );
}

export default Header;