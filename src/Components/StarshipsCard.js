import React from 'react';
import "./Styles/StarshipsCard.css";
import {useState, useEffect} from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const StarshipsCard = (props) => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const img = document.querySelectorAll(".starships-card__image");
        let imageEl;
        img.forEach(el => {
           return imageEl = el;
        });
        console.log(imageEl.complete);
        if (imageEl.complete === true) {
            setLoading(false);
        }
    },[]);
    return (
        <article className="starships-card">
            { loading ? <ClipLoader /> : <img src={props.img} alt="" className="starships-card__image"/>}
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