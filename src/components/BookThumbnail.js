import React from "react";

import "./BookThumbnail.css";
// TODO: new book banner
// TODO: sale banner

const BookThumbnail = props => (
  <div className="book-thumb">
    <img src={props.img} alt={props.title + " - " + props.author} />
    <p>{props.title}</p>
    <p>{props.author}</p>
    <p className="persian-number">{props.price} هزار تومان</p>
  </div>
);

export default BookThumbnail;
