import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import BookThumbnail from "../components/BookThumbnail";

//import { books } from "../services/data";
import { Context } from "../contexts/Context";

import "./BookList.css";

// TODO: error in Select

const BookList = () => {
  const [sort, setSort] = React.useState("new");
  const [filter, setFilter] = React.useState("");

  return (
    <React.Fragment>
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
              onChange={(e) => setFilter(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControl className="full-width">
              <InputLabel id="demo-simple-select-label">ترتیب</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <MenuItem value={"new"}>جدیدترین</MenuItem>
                <MenuItem value={"exp"}>گران ترین</MenuItem>
                <MenuItem value={"cheap"}>ارزان ترین</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>

      <Grid container spacing={1} className="all-book-grid">
        <Context.Consumer>
          {(context) => {
            const filteredBooks = context.GetFilteredBook(sort, filter);

            return filteredBooks.map((book) => {
              const owned =
                context.admin.isAuthenticated &&
                context.admin.boughtBooks &&
                context.admin.boughtBooks.includes(book.id);
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
            });
          }}
        </Context.Consumer>
      </Grid>
    </React.Fragment>
  );
};

export default BookList;
