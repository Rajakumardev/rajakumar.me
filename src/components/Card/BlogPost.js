import { Link } from 'gatsby'
import React from 'react'

const BlogPost = (props) => {
    return (
            <Link to={`/blog/${props.link}`} className="item">
                <div className="thumb">

                </div>
                <div className="details">
                    <h4 className="title">{props.title}</h4>
                    <p className="date">{props.date}</p>
                </div>
            </Link>
    )
}

export default BlogPost
