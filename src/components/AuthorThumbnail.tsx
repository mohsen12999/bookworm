import React from "react";

// TODO: new Author banner
// TODO: best Author

interface IAuthorThumbnailProps {
  id: number;
  title: string;
  author: string;
  img: string;
  // newAuthor: boolean;
  // bestAuthor: boolean;
}

const AuthorThumbnail = (props: IAuthorThumbnailProps) => (
  <div className="author-thumb">
    <img src={props.img} alt={props.title + " - " + props.author} />
    <p>{props.title}</p>
  </div>
);

export default AuthorThumbnail;
