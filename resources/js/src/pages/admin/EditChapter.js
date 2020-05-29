import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { useParams, Redirect } from "react-router-dom";
import { Context } from "../../contexts/Context";

import "./Profile.css";

// /chapter/:note_id/:chapter_id?
const EditChapter = () => {
    const { note_id, chapter_id } = useParams();

    const [id, setId] = React.useState(undefined);
    const [title, setTitle] = React.useState();
    const [description, setDescription] = React.useState();
    const [published, setPublished] = React.useState(undefined);

    const [exit2List, setExit2List] = React.useState(false);

    return exit2List ? (
        <Redirect to={"/chapters/" + note_id} />
    ) : (
        <Context.Consumer>
            {context => {
                const writtenChapter = context.GetWrittenChapter(chapter_id);

                if (writtenChapter && writtenChapter.book_id !== note_id) {
                    context.OpenSnackbar("اشکال در ناهماهنگی فصل و کتاب");
                    return <Redirect to={"/chapters/" + note_id} />;
                }

                if (writtenChapter) {
                    setId(writtenChapter.id);
                }

                const writeChapter = exit => {
                    if (
                        !writtenChapter &&
                        (!title ||
                            title.length < 3 ||
                            !description ||
                            description.length < 3)
                    ) {
                        context.OpenSnackbar("عنوان فصل و متن اجباری هستند");
                        return;
                    }

                    const data = new FormData();
                    data.append("id", id);
                    data.append("title", title);
                    data.append("description", description);
                    data.append("book_id", note_id);
                    data.append("published", published);

                    context.WriteChapter(data).then(res => {
                        if (res.success) {
                            context.OpenSnackbar("فصل با موفقیت ذخیره شد.");
                            setId(res.id);
                        } else {
                            context.OpenSnackbar("اشکال در ذخیره فصل");
                        }
                        if (exit) {
                            setExit2List(true);
                        }
                    });
                };

                return (
                    <React.Fragment>
                        <form
                            onSubmit={e => {
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
                                            (writtenChapter &&
                                            writtenChapter.title
                                                ? writtenChapter.title
                                                : "")
                                        }
                                        onChange={e => {
                                            setTitle(e.target.value);
                                        }}
                                        required
                                    />
                                </div>
                            </Container>

                            <Container maxWidth="md">
                                <div className="center-item persian-form">
                                    <TextareaAutosize
                                        aria-label="description"
                                        className="min-width-70p right-text right-dir"
                                        rowsMin={4}
                                        placeholder="متن فصل"
                                        value={
                                            description ??
                                            (writtenChapter &&
                                            writtenChapter.description
                                                ? writtenChapter.description
                                                : "")
                                        }
                                        onChange={e => {
                                            setDescription(e.target.value);
                                        }}
                                    />
                                </div>
                            </Container>

                            <Container maxWidth="sm">
                                <div className="center-item right-dir mt-2">
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={
                                                    published ??
                                                    (writtenChapter &&
                                                    writtenChapter.publish_status &&
                                                    writtenChapter.publish_status ===
                                                        10
                                                        ? true
                                                        : false)
                                                }
                                                onChange={e =>
                                                    setPublished(
                                                        e.target.checked
                                                    )
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="منتشر شود"
                                    />
                                </div>
                            </Container>
                            <div className="center-item save-btn-div mt-2">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    type="submit"
                                    disabled={
                                        !writtenChapter &&
                                        (!title || title.length < 3)
                                    }
                                    startIcon={<SaveIcon />}
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
                                        (!title ||
                                            title.length < 3 ||
                                            !description ||
                                            description.length < 3)
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
            }}
        </Context.Consumer>
    );
};

export default EditChapter;
