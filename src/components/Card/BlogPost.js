import { Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image';

const BlogPost = (props) => {
    console.log("@@@:",props);
    return (
            <Link to={`/blog/${props.link}`} className="item">
                <div className="thumb">
                    <Img fluid={props.featuredImage} />
                </div>
                <div className="details">
                    <h4 className="title">{props.title}</h4>
                    <p className="date">{props.date}</p>
                    <p className="readingTime">🕒 {props.readingTime}</p>
                </div>
            </Link>
    )
}

export default BlogPost
