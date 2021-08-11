import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'
import { Helmet } from 'react-helmet';

const Seo = ({ title, lang, description, meta = [], canonicalUrl  }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    description
                    keywords
                    siteUrl
                    title
                    google_site_verification
                }
            }
        }
    `);
    const keywords = data.site.siteMetadata?.keywords;
    const metaDescription = description || data.site.siteMetadata?.description;
    const defaultTitle = data.site.siteMetadata?.title;
    const googleSearchConsoleHash = data.site.siteMetadata?.google_site_verification;
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
                {
                    name: `google-site-verification`,
                    content: googleSearchConsoleHash,
                },
            ].concat(meta)}
        >
        </Helmet>
    )
}

export default Seo
