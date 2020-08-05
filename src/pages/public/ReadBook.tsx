import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

import { useParams, Link, Redirect } from "react-router-dom";

import ScrollTop from "../../components/ScrollTop";
import { IChapter, IBook, IPublicState } from "../../types/publicTypes";
import { readableChapter } from "../../functions/readable";

import "./ReadBook.css";
import { IAdminState } from "../../types/adminType";
import { SetLastBookReading } from "../../actions/adminAction";
import { PublicPages } from "../../constants/pages";

// TODO: not found chapter
// TODO: back to book page

// interface IMatchParams {
//   book_id: string;
//   chapter_id: string;
// }

//interface IReadBookProps extends RouteComponentProps<IMatchParams> {
interface IReadBookProps {
  loggedIn: boolean;
  boughtBooks: number[];
  chapters: IChapter[];
  books: IBook[];

  lastBookId?: number;
  lastChapterId?: number;

  SetLastBookReading(
    book_id: string | number,
    chapter_id: string | number
  ): void;
}

const ReadBook = (props: IReadBookProps) => {
  const { book_id, chapter_id } = useParams();

  const [chapter, setChapter] = React.useState<IChapter | undefined>();
  const [prevChapter, setPrevChapter] = React.useState<IChapter | undefined>();
  const [nextChapter, setNextChapter] = React.useState<IChapter | undefined>();

  React.useEffect(() => {
    const anchor = document.querySelector("#chapter-title");
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    const { chapter, prevChapter, nextChapter } = getSingleChapter(
      props.chapters,
      book_id,
      chapter_id
    );

    setChapter(chapter);
    setPrevChapter(prevChapter);
    setNextChapter(nextChapter);

    if (
      props.lastBookId !== Number(book_id) &&
      props.lastChapterId !== Number(chapter_id)
    ) {
      props.SetLastBookReading(book_id, chapter_id);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [book_id, chapter_id]);

  // get all chapter base on book id
  const getSingleChapter = (
    chapters: IChapter[],
    book_id: string,
    chapter_id: string
  ) => {
    const chapter = chapters.find((chap) => chap.id === Number(chapter_id));
    if (!chapter || !chapter.book_id || chapter.book_id !== Number(book_id)) {
      return { chapter: undefined };
    }
    const chapterIndex = props.chapters.indexOf(chapter);
    const prevChapter =
      chapterIndex === 0 ? undefined : props.chapters[chapterIndex - 1];
    const nextChapter =
      chapterIndex === props.chapters.length - 1
        ? undefined
        : props.chapters[chapterIndex + 1];
    return { chapter, prevChapter, nextChapter };
  };

  const readableThisChapter = readableChapter(
    props.books,
    Number(book_id),
    props.boughtBooks,
    chapter
  );
  const readablePrevChapter = readableChapter(
    props.books,
    Number(book_id),
    props.boughtBooks,
    prevChapter
  );
  const readableNextChapter = readableChapter(
    props.books,
    Number(book_id),
    props.boughtBooks,
    nextChapter
  );

  return !readableThisChapter ? (
    <Redirect to={"/book/" + book_id} />
  ) : (
    <div className="chapter-page">
      {prevChapter &&
        (readablePrevChapter ? (
          <Tooltip title={"خواندن فصل قبل با  عنوان: " + prevChapter.title}>
            <Button
              variant="outlined"
              size="large"
              color="primary"
              className="chapter-change"
              component={Link}
              to={"/" + PublicPages.READ + "/" + book_id + "/" + prevChapter.id}
            >
              فصل قبل - {prevChapter.title}
            </Button>
          </Tooltip>
        ) : (
          <Tooltip
            title={"برای دسترسی به فصل قبل می بایست کتاب را خریداری نمائید"}
          >
            <Button
              variant="outlined"
              size="large"
              className="chapter-change disabled"
            >
              فصل قبل - {prevChapter.title}
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
          {chapter && chapter.title}
        </Typography>
        <Typography paragraph className="chapter-paragraph">
          {chapter && chapter.body}
        </Typography>
      </Container>

      {nextChapter &&
        (readableNextChapter ? (
          <Tooltip title={"خواندن فصل بعد با  عنوان: " + nextChapter.title}>
            <Button
              variant="outlined"
              size="large"
              color="primary"
              className="chapter-change"
              component={Link}
              to={"/" + PublicPages.READ + "/" + book_id + "/" + nextChapter.id}
            >
              فصل بعد - {nextChapter.title}
            </Button>
          </Tooltip>
        ) : (
          <Tooltip
            title={"برای دسترسی به فصل بعد می بایست کتاب را خریداری نمائید"}
          >
            <Button
              variant="outlined"
              size="large"
              className="chapter-change disabled"
            >
              فصل بعد - {nextChapter.title}
            </Button>
          </Tooltip>
        ))}

      <ScrollTop {...props} target_id="chapter-title" />
    </div>
  );
};

const mapStateToProps = (State: {
  public: IPublicState;
  admin: IAdminState;
}) => ({
  loggedIn: State.admin.loggedIn,
  boughtBooks: State.admin.boughtBooks,
  chapters: State.public.chapters,
  books: State.public.books,
  lastBookId: State.admin.lastBookId,
  lastChapterId: State.admin.lastChapterId,
});

const mapDispatchToProps = {
  SetLastBookReading,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadBook);
