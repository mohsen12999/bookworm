import React from "react";
import { Link } from "react-router-dom";

import { PublicPages } from "../constants/pages";

import "./PostThumbnail.css";

// TODO: new article banner

interface IPostThumbnailProps {
  id: number;
  title: string;
  author: string;
  img: string;
  // newArticle: boolean
}

const PostThumbnail = (props: IPostThumbnailProps) => (
  <Link className="post-thumb" to={"/" + PublicPages.POST + "/" + props.id}>
    <img src={props.img} alt={props.title + " - " + props.author} />
    <p>{props.title}</p>
    <p>{props.author}</p>
  </Link>
);

export default PostThumbnail;
