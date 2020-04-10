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

import { useParams } from "react-router-dom";

import { getBook, getBookChapter } from "../services/data";
import { AuthContext } from "../contexts/AuthContext";

import "./SingleBook.css";

// TODO: Book Name
// TODO: Book Author
// TODO: Book Abstract
// TODO: Can Read(Auth & Buy)
// TODO: Link to chapter

const SingleBook = () => {
  let { id } = useParams();
  const book = getBook(id);
  const chapters = getBookChapter(id);

  return (
    <AuthContext.Consumer>
      {(context) => {
        const owned =
          context.isAuthenticated && context.boughtBook.includes(book.id);
        console.log(owned);
        return (
          <React.Fragment>
            <div className="big-book-banner">
              <div>
                <img
                  src={process.env.PUBLIC_URL + book.img}
                  className="book-img"
                  alt={book.title}
                />
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
                          <TableCell component="th" scope="row" align="right">
                            {chapter.title}
                          </TableCell>
                        </Tooltip>
                        <TableCell component="th" scope="row" align="left">
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
    </AuthContext.Consumer>
  );
};

export default SingleBook;
