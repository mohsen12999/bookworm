import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { useParams, Redirect } from "react-router-dom";
import { Context } from "../../contexts/Context";

import "./Profile.css";

const EditBlog = () => {
    const { blog_id } = useParams();

    const [id, setId] = React.useState(undefined);
    const [file, setFile] = React.useState(null);
    const [title, setTitle] = React.useState();
    const [abstract, setAbstract] = React.useState();
    const [description, setDescription] = React.useState();
    const [subject, setSubject] = React.useState();
    const [foreignAuthor, setForeignAuthor] = React.useState();
    const [published, setPublished] = React.useState(undefined);

    const [src, setSrc] = React.useState(undefined);

    const [exit2List, setExit2List] = React.useState(false);

    const handleInputFileChange = event => {
        const ele = event.target;
        const imgFile = ele.files[0];
        // console.log(ele, imgFile);
        setFile(imgFile);

        let reader = new FileReader();
        reader.onload = e => {
            setSrc(e.target.result);
        };

        reader.readAsDataURL(imgFile);
    };

    return exit2List ? (
        <Redirect to={"/myblog"} />
    ) : (
        <Context.Consumer>
            {context => {
                const writtenPost = context.GetWrittenPost(blog_id);
                if (writtenPost) {
                    setId(writtenPost.id);
                }

                const writePost = exit => {
                    if (
                        !writtenPost &&
                        (!title ||
                            title.length < 3 ||
                            !description ||
                            description.length < 3)
                    ) {
                        context.OpenSnackbar("عنوان مقاله و متن اجباری هستند");
                        return;
                    }

                    const data = new FormData();
                    data.append("id", id);
                    data.append("file", file);
                    data.append("title", title);
                    data.append("abstract", abstract);
                    data.append("foreignAuthor", foreignAuthor);
                    data.append("description", description);
                    data.append("subject", subject);
                    data.append("published", published);

                    context.WritePost(data).then(res => {
                        if (res.success) {
                            context.OpenSnackbar("مقاله با موفقیت ذخیره شد.");
                            setId(res.id);
                        } else {
                            context.OpenSnackbar("اشکال در ذخیره مقاله");
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
                                writePost(false);
                            }}
                        >
                            <Container maxWidth="sm">
                                <div className="center-item">
                                    <img
                                        src={
                                            src ??
                                            (writtenPost && writtenPost.img
                                                ? writtenPost.img
                                                : "/images/placeholder.png")
                                        }
                                        alt={title ?? "تصویر مقاله"}
                                        className="avatar-img"
                                    />
                                </div>
                                <div className="center-item">
                                    <input
                                        accept="image/*"
                                        className="hidden-input"
                                        id="icon-button-file"
                                        type="file"
                                        onChange={handleInputFileChange}
                                    />
                                    <label htmlFor="icon-button-file">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            component="span"
                                            startIcon={<PhotoCamera />}
                                        >
                                            بارگزاری تصویر
                                        </Button>
                                    </label>
                                </div>

                                <div className="center-item persian-form">
                                    <TextField
                                        className="max-width right-text"
                                        label="عنوان مقاله"
                                        value={
                                            title ??
                                            (writtenPost && writtenPost.title
                                                ? writtenPost.title
                                                : "")
                                        }
                                        onChange={e => {
                                            setTitle(e.target.value);
                                        }}
                                        required
                                    />
                                </div>
                                <div className="center-item persian-form">
                                    <TextareaAutosize
                                        aria-label="abstract"
                                        className="min-width-70p right-text right-dir"
                                        rowsMin={2}
                                        placeholder="خلاصه مقاله"
                                        value={
                                            abstract ??
                                            (writtenPost && writtenPost.abstract
                                                ? writtenPost.abstract
                                                : "")
                                        }
                                        onChange={e => {
                                            setAbstract(e.target.value);
                                        }}
                                    />
                                </div>
                            </Container>
                            <Container maxWidth="md">
                                <div className="center-item persian-form">
                                    <TextareaAutosize
                                        aria-label="description"
                                        className="min-width-70p right-text right-dir"
                                        rowsMin={4}
                                        placeholder="متن مقاله"
                                        value={
                                            description ??
                                            (writtenPost &&
                                            writtenPost.description
                                                ? writtenPost.description
                                                : "")
                                        }
                                        onChange={e => {
                                            setDescription(e.target.value);
                                        }}
                                    />
                                </div>
                            </Container>
                            <Container maxWidth="sm">
                                <div className="center-item persian-form">
                                    <TextField
                                        className="max-width"
                                        label="موضوع"
                                        value={
                                            subject ??
                                            (writtenPost && writtenPost.subject
                                                ? writtenPost.subject
                                                : "")
                                        }
                                        onChange={e => {
                                            setSubject(e.target.value);
                                        }}
                                    />
                                </div>

                                <div className="center-item persian-form">
                                    <TextField
                                        className="max-width"
                                        label="نام نویسنده اصلی برای ترجمه ها"
                                        value={
                                            foreignAuthor ??
                                            (writtenPost &&
                                            writtenPost.foreign_author
                                                ? writtenPost.foreign_author
                                                : "")
                                        }
                                        onChange={e => {
                                            setForeignAuthor(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="center-item right-dir mt-2">
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={
                                                    published ??
                                                    (writtenPost &&
                                                    writtenPost.publish_status &&
                                                    writtenPost.publish_status ==
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
                                <div className="center-item save-btn-div mt-2">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        type="submit"
                                        disabled={
                                            !writtenPost &&
                                            (!title ||
                                                title.length < 3 ||
                                                !description ||
                                                description.length < 3)
                                        }
                                        startIcon={<SaveIcon />}
                                    >
                                        ذخیره
                                    </Button>
                                </div>
                            </Container>
                        </form>
                        <Container maxWidth="sm">
                            <div className="center-item mt-2">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    disabled={
                                        !writtenPost &&
                                        (!title ||
                                            title.length < 3 ||
                                            !description ||
                                            description.length < 3)
                                    }
                                    startIcon={<SaveIcon />}
                                    onClick={() => writePost(true)}
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

export default EditBlog;
