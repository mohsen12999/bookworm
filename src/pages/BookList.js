import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import BookThumbnail from "../components/BookThumbnail";

import { books } from "../services/data";
import { AuthContext } from "../contexts/AuthContext";

import "./BookList.css";

// TODO: error in Select

const BookList = () => {
  const bookList = books.sort((a, b) => a.id < b.id);

  const [filteredBooks, setFilteredBooks] = React.useState(bookList);
  const [sort, setSort] = React.useState("new");
  const [filter, setFilter] = React.useState("");

  const handleChangeSort = (event) => {
    event.preventDefault();
    const newSort = event.target.value;
    setSort(newSort);
    makeNewList(filter, newSort);
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const newFilter = event.target.value;
    setFilter(newFilter);
    makeNewList(newFilter, sort);
  };

  const makeNewList = (newFilter, newSort) => {
    const filteredBook =
      newFilter.length === 0
        ? [...bookList]
        : [...bookList].filter(
            (book) =>
              book.title.indexOf(newFilter) >= 0 ||
              book.author.indexOf(newFilter) >= 0
          );

    const sortedBook =
      newSort === "new"
        ? [...filteredBook].sort((a, b) => a.id < b.id)
        : newSort === "exp"
        ? [...filteredBook].sort((a, b) => a.price < b.price)
        : [...filteredBook].sort((a, b) => a.price > b.price);
    setFilteredBooks(sortedBook);
  };

  return (
    <div>
      <div className="search-filtered-book">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4} className="center-grid-item">
            <Typography variant="h5" component="h2">
              لیست کتاب ها
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} className="center-grid-item persian-form">
            <TextField
              className="search-input"
              id="standard-basic"
              variant="outlined"
              label="جستجو"
              value={filter}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControl className="full-width">
              <InputLabel id="demo-simple-select-label">ترتیب</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                onChange={handleChangeSort}
              >
                <MenuItem value={"new"}>جدیدترین</MenuItem>
                <MenuItem value={"exp"}>گران ترین</MenuItem>
                <MenuItem value={"cheap"}>ارزان ترین</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={1}>
        <AuthContext.Consumer>
          {(context) =>
            filteredBooks.map((book) => {
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
    </div>
  );
};

export default BookList;
