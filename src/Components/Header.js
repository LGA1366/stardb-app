import React from "react";
import {NavLink} from "react-router-dom";
import "./Styles/Header.css";
import logo from "./../images/logo.svg";


function Header() {
    let activeStyle = {
        color: "#E2F063",
        borderBottom: "1px solid #E2F063"
    };
    return (
        <header className="header container">
            <NavLink to="/" className="header__link">
                <img src={logo} alt="Logo"/>
            </NavLink>
            <ul className="header__nav nav-list list-reset">
                <li className="nav-list__item">
                    <NavLink to="/starships" className="nav-list__link" style={({ isActive }) => isActive ? activeStyle : undefined}>Starships</NavLink>
                </li>
                <li className="nav-list__item">
                    <NavLink to="/planets" className="nav-list__link" style={({ isActive }) => isActive ? activeStyle : undefined}>Planets</NavLink>
                </li>
            </ul>
        </header>

    );
}

export default Header;