import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

// import { articles } from "../services/data";
import { Context } from "../contexts/Context";

import "./BlogList.css";
import { FixDate } from "../services/function";

// TODO: blog time -> یکشنبه 8 اسفند
// Todo: blog subject
const BlogList = () => (
  <Container maxWidth="sm">
    <Context.Consumer>
      {(context) =>
        context.public.posts.map((post) => (
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
                to={"/blog/" + post.id}
              >
                خواندن مطلب
              </Button>
            </div>
          </Paper>
        ))
      }
    </Context.Consumer>
  </Container>
);

export default BlogList;
