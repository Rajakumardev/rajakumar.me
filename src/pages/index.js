import React from 'react';
import Banner from '../components/Banner/Banner';
import FeaturedPost from '../components/FeaturedPost/FeaturedPost';
import Layout from '../components/layout/Layout';
import Seo from '../components/Seo/Seo';

function index() {
    return (
        <Layout>
            <Seo
                title="Home"
                canonicalUrl="https://rajakumar.me/"
                meta={[{
                    name: "og:image",
                    content: "../images/rajakumar.me_OG.png"
                }
                ]}
            />
            <Banner />
            <FeaturedPost title="Recent Articles"/>
        </Layout>
    )
}

export default index
