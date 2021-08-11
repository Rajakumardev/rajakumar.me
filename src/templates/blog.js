import { graphql } from 'gatsby';
import React from 'react'
import Layout from '../components/layout/Layout'
import './blog.scss';

export const query = graphql`
query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
        frontmatter {
            title
            date
        }
        fields {
            readingTime {
                text
            }
        }
        id
        excerpt
        html
    }
  }
`

const Blog = (props) => {
    return (
        <Layout>
            <div className="post-container">
                <div className="post-title-container">
                    <h1 className="title">{props.data.markdownRemark.frontmatter?.title}</h1>
                    <p className="date">{props.data.markdownRemark.frontmatter?.date}</p>
                    <p className="readingTime">🕒 {props.data.markdownRemark.fields?.readingTime?.text}</p>
                </div>
                <div className="post-content" dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}} />
            </div>
        </Layout>
    )
}

export default Blog
