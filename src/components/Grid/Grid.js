import React from 'react'
import BlogPost from '../Card/BlogPost';
import './Grid.scss';

const Grid = (props) => {
    const {data:items = []} = props;
    console.log("grid data:", props);
    return (
        <div className="grid-container">
            <div className="grid-content">
                {items.map((item, index) => {
                    return (
                        <BlogPost
                            key={`blog-grid-${index}`}
                            title={item.node.frontmatter.title}
                            date={item.node.frontmatter.date}
                            link={item.node.fields.slug}
                            readingTime={item.node.fields.readingTime.text}
                            featuredImage={item.node.frontmatter.featuredImage.childImageSharp.fluid}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default Grid
