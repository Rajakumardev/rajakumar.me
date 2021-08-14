import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Grid from '../components/Grid/Grid'
import Layout from '../components/layout/Layout'
import Seo from '../components/Seo/Seo'

const Blog = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 700) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              fields {
                slug
                readingTime {
                  text
                }
              }
            }
          }
        }
      }
    `),
    postsEdge = data.allMarkdownRemark.edges || [];
    console.log("data:",data);
    return (
        <Layout>
          <Seo
            title="Blog"
          />
            <Grid data={postsEdge}/>
        </Layout>
    )
}

export default Blog
