import React from "react";

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
  <div className="author-thumb">
    <img src={props.img} alt={props.name} />
    <p>{props.name}</p>
  </div>
);

export default AuthorThumbnail;
