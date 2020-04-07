import React from "react";
import { Link } from "react-router-dom";

import "./BookThumbnail.css";
// TODO: new book banner
// TODO: sale banner

const BookThumbnail = props => (
  <Link to={"/book/" + props.id} className="book-thumb">
    <img
      src={process.env.PUBLIC_URL + props.img}
      alt={props.title + " - " + props.author}
    />
    <p>{props.title}</p>
    <p>{props.author}</p>
    <p className="persian-number">{props.price} هزار تومان</p>
  </Link>
);

export default BookThumbnail;
