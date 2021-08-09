import { Link } from 'gatsby';
import React from 'react'
import _404Img from "../../images/404.svg"
import './NotFound.scss';

const NotFound = () => {
    return (
        <div className="_404-container">
            <div className="_404-image-container">
                <img src={_404Img} alt="rajakumar" />
            </div>
            <h2>404 Page not found</h2>
            <Link to='/'>
                <div className="btn">
                    Go to Home
                </div>
            </Link>
        </div>
    )
}

export default NotFound
