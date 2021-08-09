import React from 'react';
import { Link } from 'gatsby';
import './Navbar.scss';

function Navbar() {
    
    const toggleNav = (event) =>{
        document.querySelector('#navMenu').classList.toggle('open');
        document.querySelector('#hamBtn').classList.toggle('open');
        console.log('test');
    }

    return (

        <div className="nav__container">
            <div id="hamBtn" className="navbar__hamburger shadow" onClick={toggleNav}>
                <span className="navbar__hamburger__item"></span>
                <span className="navbar__hamburger__item"></span>
                <span className="navbar__hamburger__item"></span>
            </div>
            <ul id='navMenu' className="nav__list">
                <li className="nav__item"> <Link to="/">./home</Link></li>
                <li className="nav__item"> <Link to="/blog">./blog</Link></li>
                <li className="nav__item"> <Link to="/">./work (WIP)</Link></li>
                <li className="nav__item"> <Link to="/">./git</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
