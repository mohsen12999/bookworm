import React from "react";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { IPublicState } from "../../types/publicTypes";
import {
  IGenre,
  IBook,
  IPost,
  ISubject,
  IAuthor,
} from "../../types/publicTypes";
import { PublicPages } from "../../constants/pages";

import "./index.css";

interface ISearchProps {
  genres: IGenre[];
  books: IBook[];
  posts: IPost[];
  subjects: ISubject[];
  authors: IAuthor[];
}

const Search = (props: ISearchProps) => {
  let { search } = useParams();

  const findGenres = props.genres.filter((g) => g.title.includes(search));
  const findSubjects = props.subjects.filter((s) => s.title.includes(search));
  const findAuthors = props.authors.filter((a) => a.name.includes(search));
  const findBooks = props.books.filter(
    (b) =>
      b.title.includes(search) ||
      b.author.includes(search) ||
      b.foreign_author.includes(search)
  );
  const findPosts = props.posts.filter(
    (p) =>
      p.title.includes(search) ||
      p.author.includes(search) ||
      p.foreign_author.includes(search)
  );

  if (
    findGenres.length === 0 &&
    findSubjects.length === 0 &&
    findAuthors.length === 0 &&
    findBooks.length === 0 &&
    findPosts.length === 0
  ) {
    return (
      <div className="not-found">
        <h2>متاسفانه صفحه مورد نظر پیدا نشد.</h2>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={"/" + PublicPages.INDEX}
        >
          بازگشت به صفحه اول
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        {findGenres.length !== 0 && (
          <React.Fragment>
            <Typography variant="h5" component="h3" className="section-title">
              موضوع ها
            </Typography>
          </React.Fragment>
        )}

        {findAuthors.length !== 0 && (
          <React.Fragment>
            <Typography variant="h5" component="h3" className="section-title">
              نویسندگان کتاب ها
            </Typography>
          </React.Fragment>
        )}

        {findBooks.length !== 0 && (
          <React.Fragment>
            <Typography variant="h5" component="h3" className="section-title">
              کتاب ها
            </Typography>
          </React.Fragment>
        )}

        {findSubjects.length !== 0 && (
          <React.Fragment>
            <Typography variant="h5" component="h3" className="section-title">
              موضوع مقاله ها
            </Typography>
          </React.Fragment>
        )}

        {findPosts.length !== 0 && (
          <React.Fragment>
            <Typography variant="h5" component="h3" className="section-title">
              مقاله ها
            </Typography>
          </React.Fragment>
        )}
      </div>
    );
  }
};

const mapStateToProps = (State: { public: IPublicState }) => ({
  genres: State.public.genres,
  books: State.public.books,
  posts: State.public.posts,
  subjects: State.public.subjects,
  authors: State.public.authors,
});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
