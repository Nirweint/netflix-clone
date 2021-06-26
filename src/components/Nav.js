import React, { useEffect, useState } from "react";
import netflixLogo from "../img/netflix-logo-vector.svg";
import profileLogo from "../img/profile.png";
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        });
        return () => {
            window.removeEventListener("scroll")
        }
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src={netflixLogo} alt="Netflix Logo" />
            <img className="nav__avatar" src={profileLogo} alt="Netflix Logo" />
        </div>
    );
}

export default Nav;
