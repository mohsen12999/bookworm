import React from "react";
import { Link } from "react-router-dom";

import Fab from "@material-ui/core/Fab";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Tooltip from "@material-ui/core/Tooltip";

import "./BookThumbnail.css";
import { FixPrice } from "../functions/price";
import { PublicPages } from "../constants/pages";

// TODO: new book banner
// TODO: sale banner
// TODO: top or trend books

interface IBookThumbnailProps {
  id: number;
  title: string;
  author: string;
  price: number;
  img: string;
  // newBook: boolean;
  // saleBook: boolean;
  // topBook: boolean;
  // trendBook: boolean;
  owned?: boolean;
}

const BookThumbnail = (props: IBookThumbnailProps) => (
  <Link to={"/" + PublicPages.BOOK + "/" + props.id} className="book-thumb">
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

    <img src={props.img} alt={props.title + " - " + props.author} />
    <p>{props.title}</p>
    <p>{props.author}</p>
    <p className="persian-number">{FixPrice(props.price)}</p>
  </Link>
);

export default BookThumbnail;
