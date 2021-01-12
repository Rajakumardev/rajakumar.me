import React from 'react';
import { Link } from 'gatsby';
import nav from './nav.module.scss';

function Nav() {
    return (
        <ul className={nav.nav_container}>
            <li className={nav.nav_item}> <Link to="/">./home</Link></li>
            <li className={nav.nav_item}> <Link to="/">./blog</Link></li>
            <li className={nav.nav_item}> <Link to="/">./work</Link></li>
            <li className={nav.nav_item}> <Link to="/">./git</Link></li>
        </ul>
    )
}

export default Nav
