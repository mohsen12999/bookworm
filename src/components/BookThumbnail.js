import React from "react";
import { Link } from "react-router-dom";

import Fab from "@material-ui/core/Fab";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Tooltip from "@material-ui/core/Tooltip";

import "./BookThumbnail.css";

// TODO: new book banner
// TODO: sale banner
// TODO: top or trend books

const BookThumbnail = (props) => (
  <Link to={"/book/" + props.id} className="book-thumb">
    {props.owned && (
      <Tooltip title="شما صاحب این کتاب هستید" aria-label="owned">
        <Fab
          color="primary"
          size="small"
          variant="extended"
          className="fab-btn"
        >
          خریداری شده
          <ShoppingBasketIcon className="fab-extended-icon" />
        </Fab>
      </Tooltip>
    )}

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
