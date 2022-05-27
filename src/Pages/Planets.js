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
                    <NavLink  to="/planets" className="planets-main__link">
                        <PlanetsCard img={require("./../images/planets/Alderaan.jpg")} planetName="Alderaan" diameter="12 475km" population="8.000.000.000"/>
                    </NavLink>
                </li>
                <li className="planets-main__item">
                    <NavLink to="/planets" className="planets-main__link">
                        <PlanetsCard img={require("./../images/planets/Hoth.jpg")} planetName="Hoth" diameter="100 332km" population="240.000.000"/>
                    </NavLink>
                </li>
                <li className="planets-main__item">
                    <NavLink to="/planets" className="planets-main__link">
                        <PlanetsCard img={require("./../images/planets/Naboo.jpg")} planetName="Naboo" diameter="8 350km" population="50.000.000"/>
                    </NavLink>
                </li>
                <li className="planets-main__item">
                    <NavLink  to="planets" className="planets-main__link">
                        <PlanetsCard img={require("./../images/planets/Alderaan.jpg")} planetName="Alderaan" diameter="12 475km" population="8.000.000.000"/>
                    </NavLink>
                </li>
                <li className="planets-main__item">
                    <NavLink to="/planets" className="planets-main__link">
                        <PlanetsCard img={require("./../images/planets/Hoth.jpg")} planetName="Hoth" diameter="100 332km" population="240.000.000"/>
                    </NavLink>
                </li>
                <li className="planets-main__item">
                    <NavLink to="/planets" className="planets-main__link">
                        <PlanetsCard img={require("./../images/planets/Naboo.jpg")} planetName="Naboo" diameter="8 350km" population="50.000.000"/>
                    </NavLink>
                </li>
                <li className="planets-main__item">
                    <NavLink to="/planets" className="planets-main__link">
                        <PlanetsCard img={require("./../images/planets/Naboo.jpg")} planetName="Naboo" diameter="8 350km" population="50.000.000"/>
                    </NavLink>
                </li>
            </ul>
        </main>
    );
};

export default Planets;