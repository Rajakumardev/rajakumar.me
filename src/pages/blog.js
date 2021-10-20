import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Grid from '../components/Grid/Grid'
import Layout from '../components/layout/Layout'
import Seo from '../components/Seo/Seo'
import Section from '../components/Section/Section'

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
  console.log("data:", data);
  return (
    <Layout>
      <Seo
        title="Blog"
      />
      <Section className="section">
        <Grid data={postsEdge} />
      </Section>
    </Layout>
  )
}

export default Blog
