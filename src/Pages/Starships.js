import React from 'react';
import Select from "../Components/Select";
import "./Styles/Starships.css";
import img1 from "./../images/starships/img1.jpg";
import img2 from "./../images/starships/img2.jpg";
import img3 from "./../images/starships/img3.jpg";

const Starships = () => {
    return (
            <main className="starships-main container">
                <h2 className="starships-main__title">Starships</h2>
                <Select />
                <ul className="starships-main__list list-reset">
                    <li className="starships-main__item">
                        <a href="" className="starships-main__link">
                            <article className="starships-card">
                                <img src={img1} alt="" className="starships-card__image"/>
                                <ul className="starship-card__list list-reset">
                                    <li className="starship-card__item">
                                        <span className="name">Cost:</span>
                                        <span className="cost-value">$2.000.000.000</span>
                                    </li>
                                    <li className="starship-card__item">
                                        <span className="name">Name:</span>
                                        <span className="name-value">Millenium Falcon</span>
                                    </li>
                                </ul>
                            </article>
                        </a>
                    </li>
                    <li className="starships-main__item">
                        <a href="" className="starships-main__link">
                            <article className="starships-card">
                                <img src={img2} alt="" className="starships-card__image"/>
                            </article>
                        </a>
                    </li>
                    <li className="starships-main__item">
                        <a href="" className="starships-main__link">
                            <article className="starships-card">
                                <img src={img3} alt="" className="starships-card__image"/>
                            </article>
                        </a>
                    </li>
                    <li className="starships-main__item">
                        <a href="" className="starships-main__link">
                            <article className="starships-card">
                                <img src={img1} alt="" className="starships-card__image"/>
                            </article>
                        </a>
                    </li>
                    <li className="starships-main__item">
                        <a href="" className="starships-main__link">
                            <article className="starships-card">
                                <img src={img3} alt="" className="starships-card__image"/>
                            </article>
                        </a>
                    </li>
                    <li className="starships-main__item">
                        <a href="" className="starships-main__link">
                            <article className="starships-card">
                                <img src={img2} alt="" className="starships-card__image"/>
                            </article>
                        </a>
                    </li>
                    <li className="starships-main__item">
                        <a href="" className="starships-main__link">
                            <article className="starships-card">
                                <img src={img1} alt="" className="starships-card__image"/>
                            </article>
                        </a>
                    </li>
                    <li className="starships-main__item">
                        <a href="" className="starships-main__link">
                            <article className="starships-card">
                                <img src={img3} alt="" className="starships-card__image"/>
                            </article>
                        </a>
                    </li>
                </ul>
            </main>
    );
};

export default Starships;