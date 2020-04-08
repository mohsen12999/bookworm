import React from "react";

// TODO: new Author banner

const AuthorThumbnail = (props) => (
  <div className="author-thumb">
    <img
      src={process.env.PUBLIC_URL + props.img}
      alt={props.title + " - " + props.author}
    />
    <p>{props.title}</p>
  </div>
);

export default AuthorThumbnail;
