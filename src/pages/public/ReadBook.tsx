import React from "react";
import {connect} from "react-redux";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

import { useParams, Link, Redirect } from "react-router-dom";

import ScrollTop from "../components/ScrollTop";

import "./ReadBook.css";

// TODO: not found chapter
// TODO: back to book page

interface IReadBookProps{
	loggedIn:boolean;
	boughtBooks: number[];
	chapters: IChapter[];
}

const ReadBook = (props: IReadBookProps) => {
	const { book_id, chapter_id } = useParams();

	const [chapter,setChapter] = React.useState();
	const [prevChapter,setPrevChapter] = React.useState();
	const [nextChapter,setNextChapter] = React.useState();
      
	React.useEffect(() => {      
		const anchor = document.querySelector("#chapter-title");
		if (anchor) {
			anchor.scrollIntoView({ behavior: "smooth", block: "center" });
		}

		const (chapter, prevChapter, nextChapter) = getSingleChapter(book_id, chapter_id)
setChapter(chapter)
setPrevChapter(prevChapter)
setNextChapter(nextChapter)
	}, [book_id,chapter_id]);

	// get all chapter base on book id
  const getSingleChapter = (book_id:string, chapter_id:string) => {
    const chapter =  props.chapters.find(
      (chap) => chap.id === Number(chapter_id)
    );
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


 return (

        const owned = props.loggedIn && 
          props.boughtBooks &&
          props.boughtBooks.includes(Number(book_id));

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
 )
}

const mapStateToProps = (State: { public: IPublicState, admin: IAdminState }) => ({
	loggedIn: State.admin.loggedIn,
boughtBooks: State.admin.boughtbooks,
chapters: State.public.chapters,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ReadBook);
~                                                                        
