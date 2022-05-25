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
                    <li className="ships-page__item">
                        <span className="ships-page__name">Model:</span>
                        <span className="ships-page__value">YT-1300 light freighter</span>
                    </li>
                    <li className="ships-page__item">
                        <span className="ships-page__name">Model:</span>
                        <span className="ships-page__value">Millennium Falcon</span>
                    </li>
                    <li className="ships-page__item">
                        <span className="ships-page__name">Length:</span>
                        <span className="ships-page__value">34.37</span>
                    </li>
                    <li className="ships-page__item">
                        <span className="ships-page__name">Cost:</span>
                        <span className="ships-page__value">$30.000.000.000</span>
                    </li>
                    <li className="ships-page__item">
                        <span className="ships-page__name">Created:</span>
                        <span className="ships-page__value">12.12.2012</span>
                    </li>
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
            <NavLink to="/starships" className="to-ships-btn">to Starships</NavLink>
        </article>
    );
};

export default MilleniumFalconPage;