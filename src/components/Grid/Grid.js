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
                            title={item.node.frontmatter.title}
                            date={item.node.frontmatter.date}
                            link={item.node.fields.slug}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default Grid
