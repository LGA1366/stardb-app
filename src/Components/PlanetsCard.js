import React from 'react';
import "./Styles/PlanetsCard.css";

const StarshipsCard = (props) => {
    return (
        <article className="planets-card">
            <img src={props.img} alt="" className="planets-card__image"/>
            <ul className="planets-card__list list-reset">
                <li className="planets-card__item">
                    <span className="name">Cost:</span>
                    <span className="cost-value"> $ {props.costValue}</span>
                </li>
                <li className="planets-card__item">
                    <span className="name">Name:</span>
                    <span className="name-value">{props.nameValue}</span>
                </li>
            </ul>
        </article>
    );
};

export default StarshipsCard;