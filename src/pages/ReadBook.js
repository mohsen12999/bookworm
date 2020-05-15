import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

import { useParams, Link, Redirect } from "react-router-dom";

import ScrollTop from "../components/ScrollTop";
//import { getSingleChapter } from "../services/data";
import { Context } from "../contexts/Context";

import "./ReadBook.css";

// TODO: not found chapter
// TODO: back to book page

const ReadBook = (props) => {
  const { book_id, chapter_id } = useParams();
  // const [chapterId, setChapter] = React.useState(Number(chapter_id));
  // const bookId = Number(book_id);
  // const chapterId = Number(chapter_id);

  // const { chapter, prev_chapter, next_chapter } = getSingleChapter(
  //   bookId,
  //   chapterId
  // );

  React.useEffect(() => {
    const anchor = document.querySelector("#chapter-title");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [chapter_id]);

  return (
    <Context.Consumer>
      {(context) => {
        const {
          chapter,
          prev_chapter,
          next_chapter,
        } = context.GetSingleChapter(book_id, chapter_id);

        const owned =
          context.admin.isAuthenticated &&
          context.admin.boughtBooks &&
          context.admin.boughtBooks.includes(Number(book_id));

        if (!(owned || chapter.free)) {
          return <Redirect to={"/book/" + book_id} />;
        }

        if (
          context.lastBookId !== Number(book_id) ||
          context.lastChapterId !== Number(chapter_id)
        ) {
          context.SetLastBookReading(book_id, chapter_id);
        }

        return (
          <div className="chapter-page">
            {prev_chapter &&
              (owned || prev_chapter.free ? (
                <Tooltip
                  title={"خواندن فصل قبل با  عنوان: " + prev_chapter.title}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    color="primary"
                    className="chapter-change"
                    component={Link}
                    to={"/read/" + book_id + "/" + prev_chapter.id}
                  >
                    فصل قبل - {prev_chapter.title}
                  </Button>
                </Tooltip>
              ) : (
                <Tooltip
                  title={
                    "برای دسترسی به فصل قبل می بایست کتاب را خریداری نمائید"
                  }
                >
                  <Button
                    variant="outlined"
                    size="large"
                    className="chapter-change disabled"
                  >
                    فصل قبل - {prev_chapter.title}
                  </Button>
                </Tooltip>
              ))}

            <Container maxWidth="sm" className="chapter-content-container">
              <Typography
                variant="h4"
                component="h3"
                id="chapter-title"
                className="chapter-title"
              >
                {chapter.title}
              </Typography>
              <Typography paragraph className="chapter-paragraph">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </Typography>
              <Typography paragraph className="chapter-paragraph">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </Typography>
              <Typography paragraph className="chapter-paragraph">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </Typography>
            </Container>

            {next_chapter &&
              (owned || next_chapter.free ? (
                <Tooltip
                  title={"خواندن فصل بعد با  عنوان: " + next_chapter.title}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    color="primary"
                    className="chapter-change"
                    component={Link}
                    to={"/read/" + book_id + "/" + next_chapter.id}
                  >
                    فصل بعد - {next_chapter.title}
                  </Button>
                </Tooltip>
              ) : (
                <Tooltip
                  title={
                    "برای دسترسی به فصل بعد می بایست کتاب را خریداری نمائید"
                  }
                >
                  <Button
                    variant="outlined"
                    size="large"
                    className="chapter-change disabled"
                  >
                    فصل بعد - {next_chapter.title}
                  </Button>
                </Tooltip>
              ))}

            <ScrollTop {...props} target_id="chapter-title" />
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default ReadBook;
