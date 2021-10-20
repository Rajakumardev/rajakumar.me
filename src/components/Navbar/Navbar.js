import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import './Navbar.scss';
import { isValidNav } from '../../utils/navUtils';

function Navbar() {
    const [path,setPath] = useState('');
    useEffect(() => {
        setPath(window.location.pathname);
    });
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
                <li className={`nav__item ${isValidNav(path) && path === '/' ? 'active' :'' }`}> <Link to="/">./home</Link></li>
                <li className={`nav__item ${isValidNav(path) && path === '/blog' ? 'active' :'' }`}> <Link to="/blog">./blog</Link></li>
                <li className={`nav__item ${isValidNav(path) && path === '/projets' ? 'active' :'' }`}> <Link to="/projects">./projects (WIP)</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
