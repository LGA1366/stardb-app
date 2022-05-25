import React from 'react';
import falcon from './../images/starshipsPages/Falcon.jpg';
import "./Styles/ShipsPage.css";
import {NavLink} from "react-router-dom";

const MilleniumFalconPage = () => {
    return (
        <article className="ships-page container">
            <h2 className="ships-page__title">Millenium Falcon</h2>
            <div className="ships-page__container">
                <img src={falcon} className="ships-page__img" alt="falcon"/>
                <ul className="ships-page__list list-reset">
                    <li className="ships-page__item"></li>
                    <li className="ships-page__item"></li>
                    <li className="ships-page__item"></li>
                    <li className="ships-page__item"></li>
                    <li className="ships-page__item"></li>
                </ul>
                <p className="ships-page__descr">
                    Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean commodo ligula eget dolor.
                    Aenean massa. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Donec quam felis,
                    ultricies nec, pellentesque eu, pretium quis, sem.
                    Nulla consequat massa quis enim. Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo
                    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                    Nulla consequat massa quis enim
                </p>
            </div>
            <NavLink to="/starships">home</NavLink>
        </article>
    );
};

export default MilleniumFalconPage;