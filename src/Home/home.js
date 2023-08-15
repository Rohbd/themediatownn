import React from "react";
import Logo from '../images/Logo.png';
import '../Home/home.css'
import ContentPage from '../Content/content';
const menuOptions = ["Home", "Services", "About", "Contact"];

const home = () => {
    return (
        <div className="body">
            <div className="head">
                <img src={Logo}></img>
                <div className="navBar">{menuOptions.map((item) =>
                    <ul><h3>{item}</h3></ul>
                )}</div>
            </div>
            <ContentPage />
        </div>
    );
};

export default home;