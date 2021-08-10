import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'
import { Helmet } from 'react-helmet';

const Seo = ({ title, lang, description, meta }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                author
                description
                keywords
                siteUrl
                title
                }
            }
        }
    `);
    const keywords = data.site.siteMetadata?.keywords;
    const metaDescription = description || data.site.siteMetadata?.description;
    const defaultTitle = data.site.siteMetadata?.title;
    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={defaultTitle ? `%s ${defaultTitle}` : null}
            meta={[
                {
                    name: "description",
                    content: metaDescription,
                },
                {
                    name: "keywords",
                    content: keywords,
                },
                {
                    property: "og:title",
                    content: title
                },
                {
                    property: "og:description",
                    content: metaDescription,
                },
                {
                    property: "og:type",
                    content: "website"
                },
                {
                    name: `twitter:card`,
                    content: "summary",
                },
                {
                    name: "twitter:creator",
                    content: data.site.siteMetadata?.author || ``,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ]}
        >

        </Helmet>
    )
}

export default Seo
