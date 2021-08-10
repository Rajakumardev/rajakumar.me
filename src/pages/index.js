import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../components/Banner/Banner';
import Grid from '../components/Grid/Grid';
import Layout from '../components/layout/Layout';
function index() {
    return (
        <Layout>
            <Helmet>
                <html lang="en"/>
                <meta name="google-site-verification" content="5txZwkAUwhgDgll3sWgdtziT1CMrXDejLOErZqCW65I" />
                <title>rajakumar.me - developer writer</title>
                <description>
                    Hi, 👋 i have been creating web apps and android apps since 2010, 
                    working as a 💻 engineer for 2+ years. 
                    i created this blog to share my learning. 
                    also you can join the newsletter to get updates.</description>
            </Helmet>
            <Banner />
        </Layout>
    )
}

export default index
