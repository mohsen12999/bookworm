import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import BookThumbnail from "../components/BookThumbnail";
import AuthorThumbnail from "../components/AuthorThumbnail";
import ArticleThumbnail from "../components/ArticleThumbnail";

import { books, articles, authors, genres, getRandom } from "../services/data";
import { AuthContext } from "../contexts/AuthContext";

import "./index.css";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: "flex"
  // },
  // drawer: {
  //   [theme.breakpoints.up("sm")]: {
  //     flexShrink: 0
  //   }
  // },
  // appBar: {
  //   [theme.breakpoints.up("sm")]: {
  //     // width: `calc(100% - ${drawerWidth}px)`,
  //     // marginLeft: drawerWidth
  //     zIndex: 1201
  //   }
  // },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  //   [theme.breakpoints.up("sm")]: {
  //     display: "none"
  //   }
  // },
  // // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  // drawerPaper: {
  //   width: drawerWidth
  // },
  // content: {
  //   flexGrow: 1,
  //   padding: theme.spacing(3)
  // },
  // title: {
  //   flexGrow: 1,
  //   textAlign: "right",
  //   // marginRight: drawerWidth
  //   [theme.breakpoints.up("sm")]: {
  //     textAlign: "center",
  //     fontSize: "2rem"
  //   }
  // }
  // bidSlider: {
  //   background: "lightgray",
  //   display: "display",
  //   [theme.breakpoints.up("sm")]: {
  //     display: "flex"
  //   }
  // },
  // image: {
  //   width: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     width: "50%"
  //   }
  // },
  // imageSpan: {
  //   flexGrow: "1",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   direction: "rtl"
  // }
  // search_div: {
  //   background: "lightgray",
  //   textAlign: "center",
  //   paddingTop: "2em",
  //   paddingBottom: "2em",
  //   direction: "rtl"
  // },
  // searchText: {
  //   //display: "block"
  //   width: "80%",
  //   [theme.breakpoints.up("sm")]: {
  //     width: "50%"
  //   }
  // },
  // searchBtn: {
  //   marginTop: "2rem"
  // },

  searchText: {
    width: "98%",
  },
  grid_item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imgSlider: {
    width: "100%",
  },
}));

// TODO: footer

const Index = () => {
  const classes = useStyles();
  const rand_book = getRandom(books, 8);
  const pop_books = rand_book.splice(0, 4);
  const new_books = rand_book;

  const best_authors = getRandom(authors, 4);
  const best_genres = getRandom(genres, 6);

  const last_articles = getRandom(articles, 3);

  return (
    <React.Fragment>
      <div className={classes.mainBanner}>
        <img
          src={
            process.env.PUBLIC_URL + "/img/slider/slider1-skybook1-1368x599.jpg"
          }
          className={classes.imgSlider}
          alt="img"
        />
      </div>
      <form className="search-grid persian-form">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3} className={classes.grid_item}>
            <Typography variant="h5" component="h2">
              جستجوی کتاب
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.grid_item}>
            <TextField
              className={classes.searchText}
              id="standard-basic"
              variant="outlined"
              label="جستجوی عنوان کتاب، نویسنده یا موضوع"
            />
          </Grid>
          <Grid item xs={12} sm={2} className={classes.grid_item}>
            <Button
              variant="contained"
              color="primary"
              className={classes.searchBtn}
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
        <AuthContext.Consumer>
          {(context) =>
            pop_books.map((book) => {
              const owned =
                context.isAuthenticated && context.boughtBook.includes(book.id);
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
            })
          }
        </AuthContext.Consumer>
      </Grid>

      <Typography variant="h5" component="h3" className="section-title">
        جدیدترین کتاب ها
      </Typography>
      <Grid container spacing={1}>
        <AuthContext.Consumer>
          {(context) =>
            new_books.map((book) => {
              const owned =
                context.isAuthenticated && context.boughtBook.includes(book.id);
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
            })
          }
        </AuthContext.Consumer>
      </Grid>
      <Typography variant="h5" component="h3" className="section-title">
        نویسندگان برتر
      </Typography>

      <Grid container spacing={1}>
        {best_authors.map((author) => (
          <Grid key={author.id} item xs={6} sm={3}>
            <AuthorThumbnail title={author.title} img={author.img} />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" component="h3" className="section-title">
        موضوعات پر طرفدار
      </Typography>

      <Grid container spacing={1}>
        {best_genres.map((genre) => (
          <Grid key={genre.id} item xs={6} sm={2}>
            <AuthorThumbnail title={genre.title} img={genre.img} />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" component="h3" className="section-title">
        مقالات
      </Typography>

      <Grid container spacing={1}>
        {last_articles.map((article) => (
          <Grid key={article.id} item xs={6} sm={4}>
            <ArticleThumbnail
              id={article.id}
              title={article.title}
              img={article.img}
              author={article.author}
            />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default Index;
