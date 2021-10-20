import React from 'react';
import Banner from '../components/Banner/Banner';
import Layout from '../components/layout/Layout';
import Section from '../components/Section/Section';
import Seo from '../components/Seo/Seo';

function index() {
    return (
        <Layout>
            <Seo
                title="Home"
                canonicalUrl = "https://rajakumar.me/"
                meta={[{
                    name:"og:image",
                    content: "../images/rajakumar.me_OG.png"
                }
                ]}
            />
            <Banner />
            <Section title="Featured Articles"/>
        </Layout>
    )
}

export default index
