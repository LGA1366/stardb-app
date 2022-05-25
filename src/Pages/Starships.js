import React from 'react';
import Select from "../Components/Select";
import "./Styles/Starships.css";
import StarshipsCard from "./../Components/StarshipsCard";
import {NavLink} from "react-router-dom";

const Starships = () => {
    return (
            <main className="starships-main container">
                <h2 className="starships-main__title">Starships</h2>
                <Select />
                <ul className="starships-main__list list-reset">
                    <li className="starships-main__item">
                        <NavLink to="/starships/falcon" className="starships-main__link">
                            <StarshipsCard img={require("./../images/starships/img3.jpg")} nameValue="Millennium Falcon" costValue="2.000.000.000"/>
                        </NavLink>
                    </li>
                    <li className="starships-main__item">
                        <NavLink to="/starships/deathstar" className="starships-main__link">
                            <StarshipsCard img={require("./../images/starships/img2.jpg")} nameValue="Death Star" costValue="950.000.000.000"/>
                        </NavLink>
                    </li>
                    <li className="starships-main__item">
                        <NavLink to="/starships/imperial" className="starships-main__link">
                            <StarshipsCard img={require("./../images/starships/img1.jpg")} nameValue="Imperial Ship" costValue="2.000.000.000"/>
                        </NavLink>
                    </li>
                    <li className="starships-main__item">
                        <NavLink to="/starships/imperial" className="starships-main__link">
                            <StarshipsCard img={require("./../images/starships/img1.jpg")} nameValue="Imperial Ship" costValue="950.000.000.000"/>
                        </NavLink>
                    </li>
                    <li className="starships-main__item">
                        <NavLink to="/starships/deathstar" className="starships-main__link">
                            <StarshipsCard img={require("./../images/starships/img2.jpg")} nameValue="Death Star" costValue="50.000.000.000"/>
                        </NavLink>
                    </li>
                    <li className="starships-main__item">
                        <NavLink to="/starships/falcon" className="starships-main__link">
                            <StarshipsCard img={require("./../images/starships/img3.jpg")} nameValue="Millenium Falcon" costValue="950.000.000.000"/>
                        </NavLink>
                    </li>
                    <li className="starships-main__item">
                        <NavLink to="/starships/deathstar" className="starships-main__link">
                            <StarshipsCard img={require("./../images/starships/img2.jpg")} nameValue="Death Star" costValue="90.000.000.000"/>
                        </NavLink>
                    </li>
                    <li className="starships-main__item">
                        <NavLink to="/starships/imperial" className="starships-main__link">
                            <StarshipsCard img={require("./../images/starships/img1.jpg")} nameValue="Imperial Ship" costValue="950.000.000.000"/>
                        </NavLink>
                    </li>
                </ul>
            </main>
    );
};

export default Starships;