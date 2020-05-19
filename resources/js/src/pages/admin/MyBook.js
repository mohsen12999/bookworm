import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { Context } from "../../contexts/Context";
import BookThumbnail from "../../components/BookThumbnail";

import { Link } from "react-router-dom";

//import { books } from "../../services/data";

import "../BookList.css";

const MyBook = () => (
    <Context.Consumer>
        {context => {
            const myBook = context.public.books.filter(book =>
                context.admin.boughtBooks.includes(book.id)
            );
            return (
                <div>
                    <Typography
                        variant="h5"
                        component="h3"
                        className="section-title"
                    >
                        کتاب های شما
                    </Typography>
                    <Grid container spacing={1}>
                        {myBook.length === 0 ? (
                            <div className="no-book">
                                <Typography variant="h5">
                                    شما تا کنون کتابی نخریده‌اید.
                                </Typography>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    component={Link}
                                    to={"/books"}
                                >
                                    انتخاب کتاب
                                </Button>
                            </div>
                        ) : (
                            myBook.map(book => (
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
        }}
    </Context.Consumer>
);

export default MyBook;
