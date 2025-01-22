import React, { useState } from "react";
import {FaHome, FaBars} from 'react-icons/fa'
import {HiX} from 'react-icons/hi'
import { Link } from "react-router-dom";
import './styles.scss'

const Navbar = () => {

    const data = [
        {
            label : "Home",
            to : "/"
        },
        {
            label : "About",
            to : "/About"
        },
        {
            label : "Experience",
            to : "/Experience"
        },
        {
            label : "Projects",
            to : "/Projects"
        },
        {
            label : "Resume",
            to : "/Resume"
        },
    ]

    const[toggleIcon, setToggleIcon] = useState(false)
    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon)
    }

    return(
        <div style={{width:'100vw'}}>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to={'/'} className="navbar__container__logo"> <FaHome size={30}/> </Link>
                </div>
                <ul className="navbar__container__menu">
                    {
                        data.map((item,key) => (
                            <li className="navbar__container__menu__item">
                                <Link to={item.to} className="navbar__container__menu__item__links">
                                {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                        {toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar;