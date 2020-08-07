import React from "react";
import { Link } from "react-router-dom";

import "./ArticleThumbnail.css";
import { PublicPages } from "../constants/pages";

// TODO: new article banner

interface IArticleThumbnailProps {
  id: number;
  title: string;
  author: string;
  img: string;
  // newArticle: boolean
}

const ArticleThumbnail = (props: IArticleThumbnailProps) => (
  <Link className="author-thumb" to={"/" + PublicPages.POST + "/" + props.id}>
    <img src={props.img} alt={props.title + " - " + props.author} />
    <p>{props.title}</p>
    <p>{props.author}</p>
  </Link>
);

export default ArticleThumbnail;
