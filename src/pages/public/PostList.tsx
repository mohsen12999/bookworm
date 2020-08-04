import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { FixDate } from "../../functions/date";
import { IPost, IPublicState } from "../../types/publicTypes";

import "./PostList.css";
import { HomePages } from "../../constants/pages";

interface IPostListProps {
  posts: IPost[];
}

const PostList = (props: IPostListProps) => (
  <Container maxWidth="sm">
    {props.posts.map((post) => (
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
          خلاصه مقاله، یک یا دوخط جدا از متن اصلی و مستقل هست. مفاهیم اصلی نوشته
          را بیان می نماید.
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
);

const mapStateToProps = (State: { public: IPublicState }) => ({
  posts: State.public.posts,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
