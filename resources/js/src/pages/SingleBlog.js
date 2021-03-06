import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { useParams } from "react-router-dom";

import ScrollTop from "../components/ScrollTop";
//import { getArticle } from "../services/data";
import { Context } from "../contexts/Context";

import "./SingleBlog.css";

// TODO: not find blog

const SingleBlog = (props) => {
  const { blog_id } = useParams();

  return (
    <Context.Consumer>
      {(context) => {
        const article = context.GetPost(blog_id);
        return (
          <Paper className="single-blog-page">
            <div className="article-intro">
              <img
                id="article-img"
                className="article-img"
                src={article.img}
                alt={article.title}
              />
              <Typography variant="h4" className="article-title">
                {article.title}
              </Typography>
              <Typography paragraph className="article-author">
                نوشته {article.author}
              </Typography>
            </div>

            <Typography paragraph className="article-abstract">
              {article.abstract}
              {/* خلاصه مقاله، یک یا دوخط جدا از متن اصلی و مستقل هست.
                            مفاهیم اصلی نوشته را بیان می نماید. */}
            </Typography>

            <Typography paragraph className="article-body">
              {article.description}
              {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                            لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                            باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا
                            با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
                            علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                            ایجاد کرد، در این صورت می توان امید داشت که تمام و
                            دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به
                            پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
                            اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
                            اساسا مورد استفاده قرار گیرد. */}
            </Typography>
            {/* <Typography paragraph className="article-body">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                            لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                            باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا
                            با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
                            علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                            ایجاد کرد، در این صورت می توان امید داشت که تمام و
                            دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به
                            پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
                            اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
                            اساسا مورد استفاده قرار گیرد.
                        </Typography> */}

            <Typography component="p" className="article-post-time">
              تاریخ انتشار: {new Date(article.date).toLocaleString("fa-IR")}
            </Typography>

            <ScrollTop {...props} target_id="article-img" />
          </Paper>
        );
      }}
    </Context.Consumer>
  );
};

export default SingleBlog;
