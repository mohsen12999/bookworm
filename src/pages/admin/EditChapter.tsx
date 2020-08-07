import React from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useParams } from "react-router-dom";
import { push } from "connected-react-router";

import { savingChapter } from "../../actions/adminAction";
import { IAdminState, IWrittenChapter } from "../../types/adminType";

import "./Profile.css";
import { AdminPages } from "../../constants/pages";

interface IEditChapterProps {
  writtenChapters?: IWrittenChapter[];

  savingChapter(data: FormData): boolean;
  changePage: Function;
}

const EditChapter = (props: IEditChapterProps) => {
  const { book_id, chapter_id } = useParams();

  const [title, setTitle] = React.useState<string | undefined>();
  const [body, setBody] = React.useState<string | undefined>();
  const [published, setPublished] = React.useState<boolean>(false);
  const [free, setFree] = React.useState<boolean>(false);

  const writtenChapter = props.writtenChapters?.find(
    (wc) => wc.id === Number(chapter_id)
  );
  if (writtenChapter) {
    setTitle(writtenChapter.title);
    setBody(writtenChapter.body);
    setPublished(writtenChapter.save_status > 10);
    setFree(writtenChapter.free);
  }

  if (writtenChapter?.writtenBook_id !== Number(book_id)) {
    console.log("اشکال در ناهماهنگی فصل و کتاب");
  }

  const writeChapter = (exit: boolean) => {
    const data = new FormData();
    data.append("id", String(writtenChapter?.id));
    data.append("title", title ?? "");
    data.append("body", body ?? "");
    data.append("book_id", book_id ?? "");
    data.append("published", published ? "1" : "0");
    data.append("free", free ? "1" : "0");

    const result = props.savingChapter(data);

    if (result && exit) {
      props.changePage("/" + AdminPages + "/" + book_id);
    }
  };

  return (
    <React.Fragment>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          writeChapter(false);
        }}
      >
        <Container maxWidth="sm">
          <div className="center-item persian-form">
            <TextField
              className="max-width right-text"
              label="عنوان فصل"
              value={
                title ??
                (writtenChapter && writtenChapter.title
                  ? writtenChapter.title
                  : "")
              }
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              required
            />
          </div>
        </Container>

        <Container maxWidth="md">
          <div className="center-item persian-form">
            <TextareaAutosize
              aria-label="body"
              className="min-width-70p right-text right-dir"
              rowsMin={4}
              placeholder="متن فصل"
              value={body ?? ""}
              onChange={(e) => {
                setBody(e.target.value);
              }}
            />
          </div>
        </Container>

        <Container maxWidth="sm">
          <div className="center-item right-dir mt-2">
            <FormControlLabel
              control={
                <Checkbox
                  checked={published ?? false}
                  onChange={(e) => setPublished(e.target.checked)}
                  color="primary"
                />
              }
              label="منتشر شود"
            />
          </div>
          <div className="center-item right-dir mt-2">
            <FormControlLabel
              control={
                <Checkbox
                  checked={free ?? false}
                  onChange={(e) => setFree(e.target.checked)}
                  color="primary"
                />
              }
              label="رایگان باشد"
            />
          </div>
        </Container>
        <div className="center-item save-btn-div mt-2">
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            disabled={!writtenChapter && (!title || title.length < 3)}
            startIcon={<SaveIcon />}
            onClick={() => writeChapter(false)}
          >
            ذخیره
          </Button>
        </div>
      </form>

      <Container maxWidth="sm">
        <div className="center-item mt-2">
          <Button
            variant="contained"
            color="primary"
            size="large"
            disabled={
              !writtenChapter &&
              (!title || title.length < 3 || !body || body.length < 3)
            }
            startIcon={<SaveIcon />}
            onClick={() => writeChapter(true)}
          >
            ذخیره و خروج
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (State: { admin: IAdminState }) => ({
  writtenChapters: State.admin.writtenChapters,
});
const mapDispatchToProps = {
  savingChapter,
  changePage: (url: string) => push(url),
};
export default connect(mapStateToProps, mapDispatchToProps)(EditChapter);
