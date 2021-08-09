import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'


import Grid from '../components/Grid/Grid'
import Layout from '../components/layout/Layout'

const Blog = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
              fields {
                slug
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
            <Grid data={postsEdge}/>
        </Layout>
    )
}

export default Blog
