import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react'
import Navbar from '../Navbar/Navbar';
import './Header.scss';

function Header() {
    const data = useStaticQuery(graphql`
        query HeaderQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    return (
        <div className="header__container">
            <Link to='/'><h1 className="header__title">{data.site.siteMetadata.title}</h1></Link>
            <div className="header__nav__container">
                <Navbar />
            </div>
        </div>
    )
}
export default Header
