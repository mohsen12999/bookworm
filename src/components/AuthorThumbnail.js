import React from "react";

import "./BookThumbnail.css";
// TODO: new book banner
// TODO: sale banner

const AuthorThumbnail = props => (
  <div className="author-thumb">
    <img
      src={process.env.PUBLIC_URL + props.img}
      alt={props.title + " - " + props.author}
    />
    <p>{props.title}</p>
  </div>
);

export default AuthorThumbnail;
