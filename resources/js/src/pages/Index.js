import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";

import BookThumbnail from "../components/BookThumbnail";
import AuthorThumbnail from "../components/AuthorThumbnail";
import ArticleThumbnail from "../components/ArticleThumbnail";

//import { books, articles, authors, genres, getRandom } from "../services/data";

import { getRandom } from "../services/function";
import { AuthContext } from "../contexts/AuthContext";

import "./index.css";

// TODO: footer

const Index = () => {
    //const classes = useStyles();

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

            <AuthContext.Consumer>
                {context => {
                    const books = context.books;
                    const rand_book = getRandom(books, 8);
                    const pop_books = rand_book.splice(0, 4);
                    const new_books = rand_book;

                    const best_authors = getRandom(context.authors, 4);
                    const best_genres = getRandom(context.genres, 6);

                    const last_articles = getRandom(context.posts, 3);

                    return (
                        <React.Fragment>
                            <Typography
                                variant="h5"
                                component="h3"
                                className="section-title"
                            >
                                پر بازدیدترین کتاب ها
                            </Typography>
                            <Grid container spacing={1}>
                                {pop_books.map(book => {
                                    const owned =
                                        context.isAuthenticated &&
                                        context.boughtBooks.includes(book.id);
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

                            <Typography
                                variant="h5"
                                component="h3"
                                className="section-title"
                            >
                                جدیدترین کتاب ها
                            </Typography>
                            <Grid container spacing={1}>
                                {new_books.map(book => {
                                    const owned =
                                        context.isAuthenticated &&
                                        context.boughtBooks.includes(book.id);
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
                            <Typography
                                variant="h5"
                                component="h3"
                                className="section-title"
                            >
                                نویسندگان برتر
                            </Typography>

                            <Grid container spacing={1}>
                                {best_authors.map(author => (
                                    <Grid key={author.id} item xs={6} sm={3}>
                                        <AuthorThumbnail
                                            title={author.name}
                                            img={author.avatar}
                                        />
                                    </Grid>
                                ))}
                            </Grid>

                            <Typography
                                variant="h5"
                                component="h3"
                                className="section-title"
                            >
                                موضوعات پر طرفدار
                            </Typography>

                            <Grid container spacing={1}>
                                {best_genres.map(genre => (
                                    <Grid key={genre.id} item xs={6} sm={2}>
                                        <AuthorThumbnail
                                            title={genre.title}
                                            img={genre.img}
                                        />
                                    </Grid>
                                ))}
                            </Grid>

                            <Typography
                                variant="h5"
                                component="h3"
                                className="section-title"
                            >
                                مقالات
                            </Typography>

                            <Grid container spacing={1}>
                                {last_articles.map(article => (
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
                }}
            </AuthContext.Consumer>
        </React.Fragment>
    );
};

export default Index;
