import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { FixDate } from "../../functions/date";
import { IPost, IPublicState } from "../../types/publicTypes";

import "./PostList.css";
import { HomePages } from "../../constants/pages";

interface IPostListProps {
  posts: IPost[];
}

const PostList = (props: IPostListProps) => {
  const [sort, setSort] = React.useState("new");
  const [filter, setFilter] = React.useState("");
  const [filteredPost, setFilteredPost] = React.useState<IPost[]>([]);

  React.useEffect(() => {
    setFilteredPost(filterPost(props.posts, sort, filter));
  }, [props.posts, sort, filter]);

  const filterPost = (posts: IPost[], sort: string, filter: string) => {
    if (posts.length === 0) return [];

    const filteredPosts =
      filter === ""
        ? [...posts]
        : [...posts].filter(
            (post) =>
              post.title.indexOf(filter) >= 0 ||
              post.author.indexOf(filter) >= 0
          );

    const sortedPosts =
      sort === "new"
        ? [...filteredPosts].sort((a: IPost, b: IPost) => b.id - a.id)
        : [...filteredPosts].sort((a: IPost, b: IPost) => b.id - a.id);
    return sortedPosts;
  };

  return (
    <React.Fragment>
      <div className="search-filtered-book">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4} className="center-grid-item">
            <Typography variant="h5" component="h2">
              لیست مقاله ها
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
                <MenuItem value={"exp"}>قدیمی ترین</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>

      <Container maxWidth="sm">
        {filteredPost.map((post) => (
          <Paper key={post.id} className="single-post-paper">
            <img className="post-img" src={post.img} alt={post.title} />
            <div className="post-first-row">
              <Typography variant="h5" component="h3" className="post-title">
                {post.title}
              </Typography>
              <Typography component="p" className="post-time">
                {FixDate(post.created_at)}
              </Typography>
            </div>

            <Typography component="p">
              خلاصه مقاله، یک یا دوخط جدا از متن اصلی و مستقل هست. مفاهیم اصلی
              نوشته را بیان می نماید.
            </Typography>
            <div className="post-btn">
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={"/" + HomePages.POST + "/" + post.id}
              >
                خواندن مطلب
              </Button>
            </div>
          </Paper>
        ))}
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (State: { public: IPublicState }) => ({
  posts: State.public.posts,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
