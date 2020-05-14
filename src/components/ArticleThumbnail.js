import React from "react";
import { Link } from "react-router-dom";

import "./ArticleThumbnail.css";

// TODO: new article banner

const ArticleThumbnail = props => (
    <Link className="author-thumb" to={"/blog/" + props.id}>
        <img src={props.img} alt={props.title + " - " + props.author} />
        <p>{props.title}</p>
        <p>{props.author}</p>
    </Link>
);

export default ArticleThumbnail;
