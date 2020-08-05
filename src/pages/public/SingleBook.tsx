import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Tooltip from "@material-ui/core/Tooltip";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Button from "@material-ui/core/Button";
import { useParams, Link } from "react-router-dom";

import { IPublicState, IBook, IChapter } from "../../types/publicTypes";
import { PublicPages } from "../../constants/pages";
import { readableBook } from "../../functions/readable";

import "./SingleBook.css";
import { IAdminState } from "../../types/adminType";

interface ISingleBookProps {
  books: IBook[];
  chapters: IChapter[];
  boughtBooks: number[];
}

const SingleBook = (props: ISingleBookProps) => {
  let { id } = useParams();

  const book = props.books.find((b) => b.id === Number(id));
  if (!book) {
    return (
      <div className="not-found">
        <h2>متاسفانه کتاب مورد نظر پیدا نشد.</h2>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={"/" + PublicPages.POSTS}
        >
          بازگشت به صفحه مقالات
        </Button>
      </div>
    );
  }

  const bookChapters = props.chapters.filter((c) => c.book_id === book.id);
  const readabledBook = readableBook(
    props.books,
    Number(id),
    props.boughtBooks
  );

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
            {!readabledBook && (
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
        <Typography variant="h5" component="h4" className="chapter-header">
          فصل های کتاب
        </Typography>

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              {bookChapters.map((chapter) => (
                <TableRow
                  key={chapter.id}
                  hover
                  className={
                    chapter.free || readabledBook
                      ? "enable-chapter"
                      : "locked-chapter"
                  }
                >
                  <Tooltip
                    title={
                      chapter.free || readabledBook
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
                      {chapter.free || readabledBook ? (
                        <Link
                          to={
                            "/" + PublicPages.READ + "/" + id + "/" + chapter.id
                          }
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
                    {chapter.free || readabledBook ? (
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
};

const mapStateToProps = (State: {
  public: IPublicState;
  admin: IAdminState;
}) => ({
  books: State.public.books,
  chapters: State.public.chapters,
  boughtBooks: State.admin.boughtBooks,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SingleBook);
