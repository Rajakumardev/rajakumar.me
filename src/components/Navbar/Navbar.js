import React from 'react';
import { Link } from 'gatsby';
import './Navbar.scss';

function Navbar() {
    return (

        <div className="nav__container">
            <div className="navbar__hamburger shadow">
                <span className="navbar__hamburger__item"></span>
                <span className="navbar__hamburger__item"></span>
                <span className="navbar__hamburger__item"></span>
            </div>
            {/* <ul className="nav__list">
                <li className="nav__item"> <Link to="/">./home</Link></li>
                <li className="nav__item"> <Link to="/">./blog</Link></li>
                <li className="nav__item"> <Link to="/">./work</Link></li>
                <li className="nav__item"> <Link to="/">./git</Link></li>
            </ul> */}
        </div>
    )
}

export default Navbar
