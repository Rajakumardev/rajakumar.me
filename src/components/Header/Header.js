import React from 'react'
import Nav from '../nav/Nav';
import header from './Header.module.scss';

function Header() {
    return (
        <div className={header.container}>
            <h1 className={header.title}>./rajakumar.me</h1>
            <Nav />
        </div>
    )
}

export default Header
