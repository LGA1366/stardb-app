import React from "react";
import './Styles/Main.css';

function Main() {
    return (
        <main className="Main container">
            <h1 className="Main__title">Welcome  to StarDB</h1>
            <div className="Main__descr">Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et&nbsp;magnis dis parturient montes, nascetur ridiculus mus.
                Donec quam felis, ultricies nec, pellentesque&nbsp;eu, pretium quis, sem. Nulla consequat massa quis enim
                <div className="grad"></div>
            </div>
        </main>
    );
}

export default Main;