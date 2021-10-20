import React from 'react';
import Section from '../Section/Section';
import Grid from '../Grid/Grid';
import { graphql, Link, useStaticQuery } from 'gatsby';

const FeaturedPost = (props) => {
  const { title = '' } = props;
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
  return (
    <Section className="section" title={title}>
      <div className="section-title">
        <Link to='/blog'>
          <div className="link-title">
            {title}
            <span className="icon">
              {"->"}
            </span>
          </div>
        </Link>
      </div>
      <Grid data={postsEdge} />
    </Section>
  );
}

export default FeaturedPost;
