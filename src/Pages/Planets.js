import React from 'react';
import {NavLink} from "react-router-dom";
import PlanetsCard from "../Components/PlanetsCard";
import "./Styles/Planets.css";

const Planets = () => {
    return (
        <main className="planets-main container">
            <h2 className="planets-main__title">Planets</h2>
            <ul className="planets-main__list list-reset">
                <li className="planets-main__item">
                    <NavLink to="/starships/falcon" className="planets-main__link">
                        <PlanetsCard img={require("./../images/starships/img3.jpg")} nameValue="Millennium Falcon" costValue="2.000.000.000"/>
                    </NavLink>
                </li>
                <li className="planets-main__item">
                    <NavLink to="/starships/deathstar" className="planets-main__link">
                        <PlanetsCard img={require("./../images/starships/img2.jpg")} nameValue="Death Star" costValue="950.000.000.000"/>
                    </NavLink>
                </li>
                <li className="planets-main__item">
                    <NavLink to="/starships/imperial" className="planets-main__link">
                        <PlanetsCard img={require("./../images/starships/img1.jpg")} nameValue="Imperial Ship" costValue="2.000.000.000"/>
                    </NavLink>
                </li>
                <li className="planets-main__item">
                    <NavLink to="/starships/imperial" className="planets-main__link">
                        <PlanetsCard img={require("./../images/starships/img1.jpg")} nameValue="Imperial Ship" costValue="950.000.000.000"/>
                    </NavLink>
                </li>
                <li className="planets-main__item">
                    <NavLink to="/starships/deathstar" className="planets-main__link">
                        <PlanetsCard img={require("./../images/starships/img2.jpg")} nameValue="Death Star" costValue="50.000.000.000"/>
                    </NavLink>
                </li>
                <li className="planets-main__item">
                    <NavLink to="/starships/falcon" className="planets-main__link">
                        <PlanetsCard img={require("./../images/starships/img3.jpg")} nameValue="Millenium Falcon" costValue="950.000.000.000"/>
                    </NavLink>
                </li>
                <li className="planets-main__item">
                    <NavLink to="/starships/deathstar" className="planets-main__link">
                        <PlanetsCard img={require("./../images/starships/img2.jpg")} nameValue="Death Star" costValue="90.000.000.000"/>
                    </NavLink>
                </li>
                <li className="planets-main__item">
                    <NavLink to="/starships/imperial" className="planets-main__link">
                        <PlanetsCard img={require("./../images/starships/img1.jpg")} nameValue="Imperial Ship" costValue="950.000.000.000"/>
                    </NavLink>
                </li>
            </ul>
        </main>
    );
};

export default Planets;