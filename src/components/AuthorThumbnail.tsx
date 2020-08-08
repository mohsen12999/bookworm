import React from "react";
import { Link } from "react-router-dom";

import { PublicPages } from "../constants/pages";
import "./BookThumbnail.css";

// TODO: new Author banner
// TODO: best Author

interface IAuthorThumbnailProps {
  id: number;
  name: string;
  img: string;
  // newAuthor: boolean;
  // bestAuthor: boolean;
}

const AuthorThumbnail = (props: IAuthorThumbnailProps) => (
  <Link className="post-thumb" to={"/" + PublicPages.BOOKS + "/" + props.name}>
    <div className="author-thumb">
      <img src={props.img} alt={props.name} />
      <p>{props.name}</p>
    </div>
  </Link>
);

export default AuthorThumbnail;
