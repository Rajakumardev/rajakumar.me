import React from 'react'
import Layout from '../components/layout/Layout'
import Seo from '../components/Seo/Seo'

const projects = () => {
    return (
        <Layout>
            <Seo
                title="Projects"
                canonicalUrl = "https://rajakumar.me/"
                meta={[{
                    name:"og:image",
                    content: "../images/rajakumar.me_OG.png"
                }
                ]}
            />
            Projects
        </Layout>
    )
}

export default projects
