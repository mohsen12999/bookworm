import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import BookThumbnail from "../../components/BookThumbnail";
import { IPublicState, IBook } from "../../types/publicTypes";
import { IAdminState } from "../../types/adminType";

import "./BookList.css";

interface IBookListProps {
  books: IBook[];
  boughtBooks: number[];
}

const BookList = (props: IBookListProps) => {
  let { search } = useParams();

  const [sort, setSort] = React.useState("new");
  const [filter, setFilter] = React.useState("");
  const [filteredBooks, setFilteredBooks] = React.useState<IBook[]>([]);

  React.useEffect(() => {
    if (search != null || search !== undefined) {
      const searchText = search as string;
      if (searchText.length > 0) {
        setFilter(searchText);
      }
    }
  }, [search]);

  React.useEffect(() => {
    setFilteredBooks(filterBook(props.books, sort, filter));
  }, [props.books, sort, filter]);

  //const filteredBooks = context.GetFilteredBook(sort, filter);

  const filterBook = (books: IBook[], sort: string, filter: string) => {
    if (books.length === 0) return [];

    const filteredBook =
      filter === ""
        ? [...books]
        : [...books].filter(
            (book) =>
              book.title.indexOf(filter) >= 0 ||
              book.author.indexOf(filter) >= 0
          );

    const sortedBook =
      sort === "new"
        ? [...filteredBook].sort((a: IBook, b: IBook) => b.id - a.id)
        : sort === "exp"
        ? [...filteredBook].sort((a: IBook, b: IBook) => b.price - a.price)
        : [...filteredBook].sort((a: IBook, b: IBook) => a.price - b.price);
    return sortedBook;
  };

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
                onChange={(e: React.ChangeEvent<any>) =>
                  setSort(e.target.value)
                }
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
        {filteredBooks.map((book) => {
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
    </React.Fragment>
  );
};

const mapStateToProps = (State: {
  public: IPublicState;
  admin: IAdminState;
}) => ({
  books: State.public.books,
  boughtBooks: State.admin.boughtBooks,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
