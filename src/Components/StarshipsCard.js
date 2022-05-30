import React from 'react';
import "./Styles/StarshipsCard.css";

const StarshipsCard = (props) => {
    return (
        <article className="starships-card">
            <img src={props.img} alt="" className="starships-card__image"/>
            <ul className="starship-card__list list-reset">
                <li className="starship-card__item">
                    <span className="name">Cost:</span>
                    <span className="cost-value"> $ {props.costValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
                </li>
                <li className="starship-card__item">
                    <span className="name">Name:</span>
                    <span className="name-value">{props.nameValue}</span>
                </li>
            </ul>
        </article>
    );
};

export default StarshipsCard;