import React from 'react';
import Banner from '../components/Banner/Banner';
import Layout from '../components/layout/Layout';
import Seo from '../components/Seo/Seo';

function index() {
    return (
        <Layout>
            <Seo
                title="Home"
                canonicalUrl = "https://rajakumar.me/"
            />
            <Banner />
        </Layout>
    )
}

export default index
