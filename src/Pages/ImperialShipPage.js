import React from 'react';
import imperial from './../images/starshipsPages/Imperial.jpg';
import "./Styles/ShipsPage.css";
import {NavLink} from "react-router-dom";

const ImperialShipPage = () => {
    return (
        <article className="ships-page container">
            <h2 className="ships-page__title">Imperial Ship</h2>
            <NavLink to="/starships">home</NavLink>
        </article>
    );
};

export default ImperialShipPage;