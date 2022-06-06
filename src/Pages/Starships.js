import React, {useState, useEffect} from 'react';
import Select from "../Components/Select";
import "./Styles/Starships.css";
import StarshipsCard from "./../Components/StarshipsCard";
import {NavLink} from "react-router-dom";

const starshipsData = [
    {
        id : 0,
        img: require("../images/starships/img3.jpg"),
        starshipsName: "Millenium Falcon",
        cost: 2000000000,
        linkTo: "/starships/falcon"
    },
    {
        id : 1,
        img:require( "../images/starships/img2.jpg"),
        starshipsName: "Death Star",
        cost: 9500000000,
        linkTo: "/starships/deathstar"
    },
    {
        id : 2,
        img:require( "../images/starships/img1.jpg"),
        starshipsName: "Imperial Ship",
        cost: 1000000000,
        linkTo: "/starships/imperial"
    },
    {
        id : 3,
        img:require( "../images/starships/img3.jpg"),
        starshipsName: "Millenium Falcon",
        cost: 2000000000,
        linkTo: "/starships/falcon"
    },
    {
        id : 4,
        img: require("../images/starships/img1.jpg"),
        starshipsName: "Imperial Ship",
        cost: 1000000000,
        linkTo: "/starships/imperial"
    },
    {
        id : 6,
        img: require("../images/starships/img2.jpg"),
        starshipsName: "Death Star",
        cost: 9500000000,
        linkTo: "/starships/deathstar"
    },
    {
        id : 6,
        img: require("../images/starships/img3.jpg"),
        starshipsName: "Millenium Falcon",
        cost: 2000000000,
        linkTo: "/starships/falcon"
    },
    {
        id : 7,
        img: require("../images/starships/img1.jpg"),
        starshipsName: "Imperial Ship",
        cost: 2000000000,
        linkTo: "/starships/imperial"
    },
];


const Starships = () => {
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('name');

    useEffect(() => {
        const sortArray = type => {
            const types = {
                name: 'starshipsName',
                cost: 'cost'
            };
            const sortProperty = types[type];
            const sorted = [...starshipsData].sort((a, b) => (a[sortProperty] > b[sortProperty] ? -1 : 1));
            setData(sorted);
        };

        sortArray(sortType);
    }, [sortType]);
    return (

            <main className="starships-main container">
                <h2 className="starships-main__title">Starships</h2>
                <Select op1="name" op2="cost" onChange={(e) => setSortType(e.target.value)}/>
                <ul className="starships-main__list list-reset">
                        {
                            data.map( starship => (
                                <li className="starships-main__item">
                                    <NavLink to={starship.linkTo} className="starships-main__link">
                                        <StarshipsCard img={starship.img} nameValue={starship.starshipsName} costValue={starship.cost}/>
                                    </NavLink>
                                </li>
                                )
                            )
                        }
                </ul>
            </main>
    );
};

export default Starships;