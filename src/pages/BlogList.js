import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { articles } from "../services/data";

import "./BlogList.css";

const BlogList = () => (
  <Container maxWidth="sm">
    {articles.map((post) => (
      <Paper className="single-post-paper">
        <img
          className="post-img"
          src={process.env.PUBLIC_URL + post.img}
          alt={post.title}
        />
        <div className="post-first-row">
          <Typography variant="h5" component="h3" className="post-title">
            {post.title}
          </Typography>
          <Typography component="p" className="post-time">
            {new Date(post.date).toLocaleString("fa-IR")}
          </Typography>
        </div>

        <Typography component="p">
          خلاصه مقاله، یک یا دوخط جدا از متن اصلی و جدا هست.
        </Typography>
        <div className="post-btn">
          <Button variant="contained" color="primary">
            خواندن مطلب
          </Button>
        </div>
      </Paper>
    ))}
  </Container>
);

export default BlogList;
