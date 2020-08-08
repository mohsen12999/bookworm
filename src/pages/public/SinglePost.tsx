import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import ScrollTop from "../../components/ScrollTop";
import { IPost, IPublicState } from "../../types/publicTypes";
import { PublicPages } from "../../constants/pages";

import "./SinglePost.css";

interface ISinglePostProps {
  posts: IPost[];
}

const SinglePost = (props: ISinglePostProps) => {
  const { id } = useParams();
  const post = props.posts.find((p) => p.id === Number(id));

  return post === undefined ? (
    <div className="not-found">
      <h2>متاسفانه مقاله مورد نظر پیدا نشد.</h2>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={"/" + PublicPages.POSTS}
      >
        بازگشت به صفحه مقالات
      </Button>
    </div>
  ) : (
    <Paper className="single-blog-page">
      <div className="post-intro">
        <img
          id="post-img"
          className="post-img"
          src={post.img}
          alt={post.title}
        />
        <Typography variant="h4" className="post-title">
          {post.title}
        </Typography>
        <Typography paragraph className="post-author">
          نوشته {post.author}
        </Typography>
      </div>

      <Typography paragraph className="post-abstract">
        {post.abstract}
      </Typography>

      <Typography paragraph className="post-body">
        {post.description}
      </Typography>

      <Typography component="p" className="post-time">
        تاریخ انتشار: {new Date(post.created_at).toLocaleString("fa-IR")}
      </Typography>

      <ScrollTop {...props} target_id="post-img" />
    </Paper>
  );
};

const mapStateToProps = (State: { public: IPublicState }) => ({
  posts: State.public.posts,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
