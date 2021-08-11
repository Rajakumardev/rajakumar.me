import React from 'react'
import BlogPost from '../Card/BlogPost';
import './Grid.scss';

const Grid = (props) => {
    const Items = props.data || [];
    console.log("grid data:", props);
    return (
        <div className="grid-container">
            {/* <h3>Grid</h3> */}
            <div className="grid-content">
                {Items.map((item, index) => {
                    return (
                        <BlogPost
                            key={`blog-grid-${index}`}
                            title={item.node.frontmatter.title}
                            date={item.node.frontmatter.date}
                            link={item.node.fields.slug}
                            readingTime = {item.node.fields.readingTime.text}
                            featuredImage={item.node.frontmatter.featuredImage.childImageSharp.fluid}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default Grid
