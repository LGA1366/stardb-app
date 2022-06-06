import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import PlanetsCard from "../Components/PlanetsCard";
import "./Styles/Planets.css";
import axios from "axios";

const id = [1, 3, 7, 3, 7, 1, 8, 4];
const planetsData = [];
for (let el of id) {
    axios.get('https://swapi.dev/api/planets')
        .then((response) => {
            planetsData.push(response.data.results[el]);
        });
}
console.log(planetsData);
planetsData.map( (planet) => (
    console.log(planet.name)
));
const Planets = () => {
    const [data, setData] = useState(planetsData);
    return (
        <main className="planets-main container">
            <h2 className="planets-main__title">Planets</h2>
            <ul className="planets-main__list list-reset">
                {
                    data.map( planet => (
                        <li className="planets-main__item">
                            <NavLink to="/planets" className="planets-main__link">
                                <PlanetsCard img={require("./../images/planets/Hoth.jpg")} planetName={planet.name} diameter={planet.diameter} population={planet.population}/>
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </main>
    );
};

export default Planets;