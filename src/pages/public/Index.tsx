import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import BookThumbnail from "../../components/BookThumbnail";
import AuthorThumbnail from "../../components/AuthorThumbnail";
import ArticleThumbnail from "../../components/ArticleThumbnail";

import "./index.css";
import { IPublicState } from "../../types/publicTypes";
import { IBook, IAuthor, IGenre, IPost } from "../../types/publicTypes";
import { IAdminState } from "../../types/adminType";

interface IIndexProps {
  popBooks: IBook[];
  newBooks: IBook[];
  bestAuthors: IAuthor[];
  bestGenres: IGenre[];
  latestPosts: IPost[];

  boughtBooks: number[];
}

const Index = (props: IIndexProps) => {
  const [searchText, setSearchText] = React.useState("");

  return (
    <React.Fragment>
      <div className="main-banner">
        <img
          src={"/images/slider/slider1-skybook1-1368x599.jpg"}
          className="img-slider"
          alt="img"
        />
      </div>
      <form className="search-grid persian-form">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3} className="grid-item">
            <Typography variant="h5" component="h2">
              جستجوی کتاب
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className="grid-item">
            <TextField
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="search-text"
              id="standard-basic"
              variant="outlined"
              label="جستجوی عنوان کتاب، نویسنده یا موضوع"
            />
          </Grid>
          <Grid item xs={12} sm={2} className="grid-item">
            <Button
              variant="contained"
              color="primary"
              className="search-btn"
              size="large"
              type="submit"
            >
              جستجو
            </Button>
          </Grid>
        </Grid>
      </form>

      <Typography variant="h5" component="h3" className="section-title">
        پر بازدیدترین کتاب ها
      </Typography>
      <Grid container spacing={1}>
        {props.popBooks.map((book) => {
          const owned = props.boughtBooks.includes(book.id);
          return (
            <Grid key={book.id} item xs={6} sm={3}>
              <BookThumbnail
                id={book.id}
                title={book.title}
                img={book.img}
                author={book.author}
                price={book.price}
                owned={owned}
              />
            </Grid>
          );
        })}
      </Grid>

      <Typography variant="h5" component="h3" className="section-title">
        جدیدترین کتاب ها
      </Typography>
      <Grid container spacing={1}>
        {props.newBooks.map((book) => {
          const owned = props.boughtBooks.includes(book.id);
          return (
            <Grid key={book.id} item xs={6} sm={3}>
              <BookThumbnail
                id={book.id}
                title={book.title}
                img={book.img}
                author={book.author}
                price={book.price}
                owned={owned}
              />
            </Grid>
          );
        })}
      </Grid>
      <Typography variant="h5" component="h3" className="section-title">
        نویسندگان برتر
      </Typography>

      <Grid container spacing={1}>
        {props.bestAuthors.map((author) => (
          <Grid key={author.id} item xs={6} sm={3}>
            <AuthorThumbnail
              id={author.id}
              name={author.name}
              img={author.avatar}
            />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" component="h3" className="section-title">
        موضوعات پر طرفدار
      </Typography>

      <Grid container spacing={1}>
        {props.bestGenres.map((genre) => (
          <Grid key={genre.id} item xs={6} sm={2}>
            <AuthorThumbnail id={genre.id} name={genre.title} img={genre.img} />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" component="h3" className="section-title">
        مقالات
      </Typography>

      <Grid container spacing={1}>
        {props.latestPosts.map((post) => (
          <Grid key={post.id} item xs={6} sm={4}>
            <ArticleThumbnail
              id={post.id}
              title={post.title}
              img={post.img}
              author={post.author}
            />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = (State: {
  public: IPublicState;
  admin: IAdminState;
}) => ({
  popBooks: State.public.books.filter((b) =>
    State.public.popBooks.includes(b.id)
  ),
  newBooks: State.public.books.filter((b) =>
    State.public.newBooks.includes(b.id)
  ),
  bestAuthors: State.public.authors.filter((b) =>
    State.public.bestAuthors.includes(b.id)
  ),
  bestGenres: State.public.genres.filter((b) =>
    State.public.bestGenres.includes(b.id)
  ),
  latestPosts: State.public.posts.filter((b) =>
    State.public.latestPosts.includes(b.id)
  ),
  boughtBooks: State.admin.boughtBooks,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
