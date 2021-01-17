import React from 'react';
import './SocialRibbon.scss';
import Twitter from '../../assets/svg/twitter.svg';

function SocialRibbon() {
    return (
        <div className="socialribbon__container">
            <div className="socialribbon__item">
                <a className="block-link" target="_blank" href="https://twitter.com/srajakumar95" title="@srajakumar95"><Twitter /></a>
            </div>
        </div>
    )
}

export default SocialRibbon
