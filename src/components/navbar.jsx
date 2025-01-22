import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    const data = [
        {
            label : "ABOUT",
            to : "/"
        },
        {
            label : "SKILLS",
            to : "/skills"
        },
        {
            label : "EXPERIENCE",
            to : "/Experience"
        },
        {
            label : "PROJECTS",
            to : "/Projects"
        },
        {
            label : "RESUME",
            to : "https://drive.google.com/drive/folders/19OLlJmsSwIoAhbpp1YxR0CsJU-Rt9vKW?usp=sharing"
        },
    ]


    return(
        <div className="navbar__bg">
            <div className="navbar__logo__part">
                <Link to='/'> <img src="DK logo.png" alt = "DK"/> </Link>
            </div>
            <div className="navbar__button__part">
                <ul className="navbar__menu">
                    {data.map((item,key) => (
                        <li className="navbar__menu__item">
                            <Link to={item.to} className="navbar__menu__item__links">{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>

        </div>

    );
}

export default NavBar