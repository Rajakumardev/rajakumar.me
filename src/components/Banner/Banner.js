import React from 'react'
import ConvertKitForm from 'convertkit-react';
import "./Banner.scss";
import mypic from "../../images/mypic.jpg"
import SocialRibbon from '../SocialRibbon/SocialRibbon';
function Banner() {
    const config = {
        formId: 1964561,
        template: 'clare',
        emailPlaceholder: 'Enter an email address',
        submitText: 'Subcribe',
    }
    return (
        <div className="banner__container">
            <div className="banner__child">
                <div className="banner__imageContainer">
                    <img src={mypic} alt="rajakumar" />
                </div>
                <div className="banner__details">
                    <p>
                        Hi, 👋 i have been creating web apps and android apps since 2010, working as a 💻 engineer for 2+ years.
                        i created this blog (yet to be added) to share my learning. also you can join the newsletter to get updates. say hi 😉 on twitter 👇.
                    </p>
                </div>
                <SocialRibbon />
            </div>
            <div className="banner__child">
                <div className="card banner__mainCard" >
                    <h3>📬 Get updates in you inbox.</h3>
                    <ConvertKitForm {...config} />
                </div>
            </div>
        </div >
    )
}

export default Banner
