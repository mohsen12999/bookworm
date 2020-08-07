import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import BookThumbnail from "../../components/BookThumbnail";
import { IAdminState } from "../../types/adminType";
import { IPublicState, IBook } from "../../types/publicTypes";

import "../public/BookList.css";
import { PublicPages } from "../../constants/pages";

interface IMyLibraryProps {
  boughtBooks: number[];
  books: IBook[];
}

const MyLibrary = (props: IMyLibraryProps) => {
  const myLibraryBooks = props.books.filter((bk) =>
    props.boughtBooks.includes(bk.id)
  );

  return (
    <div>
      <Typography variant="h5" component="h3" className="section-title">
        کتاب های شما
      </Typography>
      <Grid container spacing={1}>
        {props.boughtBooks.length === 0 ? (
          <div className="no-book">
            <Typography variant="h5">شما تا کنون کتابی نخریده‌اید.</Typography>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              to={"/" + PublicPages.BOOKS}
            >
              انتخاب کتاب
            </Button>
          </div>
        ) : (
          myLibraryBooks.map((book) => (
            <Grid key={book.id} item xs={6} sm={3}>
              <BookThumbnail
                id={book.id}
                title={book.title}
                img={book.img}
                author={book.author}
                price={book.price}
              />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

const mapStateToProps = (State: {
  admin: IAdminState;
  public: IPublicState;
}) => ({
  boughtBooks: State.admin.boughtBooks,
  books: State.public.books,
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(MyLibrary);
