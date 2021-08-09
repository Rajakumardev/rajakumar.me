import React from 'react';
import './SocialRibbon.scss';
import Twitter from '../../assets/svg/twitter.svg';

function SocialRibbon() {
    return (
        <div className="socialribbon__container">
            <div className="socialribbon__item">
                <a className="block-link" rel="noreferrer" target="_blank" href="https://twitter.com/rajakumar_dev" title="@rajakumar_dev"><Twitter /></a>
            </div>
        </div>
    )
}

export default SocialRibbon
