import React from 'react';
import star from './../images/starshipsPages/DeathStar.jpg';
import "./Styles/ShipsPage.css";
import {NavLink} from "react-router-dom";

const DeathStarPage = () => {
    return (
        <article className="ships-page container">
            <h2 className="ships-page__title">Death Star</h2>
            <NavLink to="/starships">home</NavLink>
        </article>
    );
};

export default DeathStarPage;