import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'
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
            <h1 className="header__title">{data.site.siteMetadata.title}</h1>
        </div>
    )
}
export default Header
