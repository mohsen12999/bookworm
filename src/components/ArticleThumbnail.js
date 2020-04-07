import React from "react";

import "./BookThumbnail.css";
// TODO: new book banner
// TODO: sale banner

const ArticleThumbnail = props => (
  <div className="author-thumb">
    <img
      src={process.env.PUBLIC_URL + props.img}
      alt={props.title + " - " + props.author}
    />
    <p>{props.title}</p>
    <p>{props.author}</p>
  </div>
);

export default ArticleThumbnail;
