import React from "react";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Tooltip from "@material-ui/core/Tooltip";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";

import { useParams, Link } from "react-router-dom";

// import { getBook, getBookChapters } from "../services/data";
import { Context } from "../contexts/Context";

import "./SingleBook.css";

// TODO: not find book
// TODO: Book Name, Author, Abstract, chapter list

const SingleBook = () => {
  let { book_id } = useParams();

  return (
    <Context.Consumer>
      {(context) => {
        const book = context.GetBook(book_id);
        const chapters = context.GetChapters(book_id);

        const owned =
          context.admin.isAuthenticated &&
          context.admin.boughtBooks &&
          context.admin.boughtBooks.includes(book.id);
        return (
          <React.Fragment>
            <div className="big-book-banner">
              <div>
                <img src={book.img} className="book-img" alt={book.title} />
              </div>
              <div>
                <div className="book-text">
                  <Typography variant="h4">{book.title}</Typography>
                  <Typography paragraph>نوشته {book.author}</Typography>
                  {!owned && (
                    <Button
                      className="buy-book-btn"
                      variant="contained"
                      color="primary"
                      endIcon={<ShoppingCartIcon />}
                    >
                      خرید کتاب
                    </Button>
                  )}
                </div>
              </div>
            </div>

            <div className="book-abstract">
              <Typography variant="h5" component="h4">
                خلاصه کتاب
              </Typography>
              <Typography paragraph>چکیده یا خلاصه کتاب</Typography>
            </div>

            <div className="book-chapters">
              <Typography
                variant="h5"
                component="h4"
                className="chapter-header"
              >
                فصل های کتاب
              </Typography>

              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableBody>
                    {chapters.map((chapter) => (
                      <TableRow
                        key={chapter.id}
                        hover
                        className={
                          chapter.free || owned
                            ? "enable-chapter"
                            : "locked-chapter"
                        }
                      >
                        <Tooltip
                          title={
                            chapter.free || owned
                              ? "خواندن فصل"
                              : "برای خواندن این فصل باید کتاب را بخرید"
                          }
                          aria-label="خواندن"
                        >
                          <TableCell
                            component="td"
                            scope="row"
                            align="right"
                            className="chapter-title"
                          >
                            {chapter.free || owned ? (
                              <Link
                                to={"/read/" + book_id + "/" + chapter.id}
                                className="chapter-link"
                              >
                                {chapter.title}
                              </Link>
                            ) : (
                              chapter.title
                            )}
                          </TableCell>
                        </Tooltip>
                        <TableCell component="td" scope="row" align="left">
                          {chapter.free || owned ? (
                            <LockOpenIcon />
                          ) : (
                            <LockIcon />
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </React.Fragment>
        );
      }}
    </Context.Consumer>
  );
};

export default SingleBook;
