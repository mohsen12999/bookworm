import React from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useParams } from "react-router-dom";
import { push } from "connected-react-router";

import { IAdminState, IWrittenPost } from "../../types/adminType";
import { IPublicState, ISubject } from "../../types/publicTypes";
import { savingPost } from "../../actions/adminAction";

import "./Profile.css";
import { AdminPages } from "../../constants/pages";

interface IEditPostProps {
  writtenPosts?: IWrittenPost[];
  subjects: ISubject[];

  savingPost(data: FormData): Promise<boolean>;
  changePage: Function;
}

const EditPost = (props: IEditPostProps) => {
  const { id } = useParams();

  const [file, setFile] = React.useState<File | undefined>(undefined);
  const [title, setTitle] = React.useState<string | undefined>();
  const [abstract, setAbstract] = React.useState<string | undefined>();
  const [description, setDescription] = React.useState<string | undefined>();
  const [subject, setSubject] = React.useState<string | undefined>();
  const [foreignAuthor, setForeignAuthor] = React.useState<
    string | undefined
  >();
  const [published, setPublished] = React.useState<boolean>(false);

  const [src, setSrc] = React.useState<string | ArrayBuffer | null>();

  const handleInputFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const ele = event.target;
    if (ele.files == null) return;
    const imgFile = ele.files[0];
    // console.log(ele, imgFile);
    setFile(imgFile);

    let reader = new FileReader();
    reader.onload = (e) => {
      const target = e.target;
      if (target != null && e.target?.result) {
        setSrc(e.target?.result);
      }
    };

    reader.readAsDataURL(imgFile);
  };

  const writePost = (exit: boolean) => {
    const data = new FormData();
    data.append("id", writtenPost ? String(writtenPost.id) : "");
    data.append("file", file ?? "");
    data.append("title", title ?? "");
    data.append("abstract", abstract ?? "");
    data.append("foreignAuthor", foreignAuthor ?? "");
    data.append("description", description ?? "");
    data.append("subject", subject ?? "");
    data.append(
      "published",
      String(Number(published !== undefined && published === true))
    );

    props.savingPost(data).then((result) => {
      if (result && exit) {
        props.changePage("/" + AdminPages.MY_POSTS);
      }
    });
  };

  const writtenPost = props.writtenPosts?.find((wp) => wp.id === Number(id));
  if (writtenPost) {
    setTitle(writtenPost.title);
    setAbstract(writtenPost.abstract);
    setDescription(writtenPost.description);
    setForeignAuthor(writtenPost.foreign_author);
    const genre = props.subjects.find((g) => g.id === writtenPost.subject_id);
    if (genre) {
      setSubject(genre.title);
    }
    setPublished(writtenPost.save_status === 10);
  }

  return (
    <React.Fragment>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          writePost(false);
        }}
      >
        <Container maxWidth="sm">
          <div className="center-item">
            <img
              src={
                (src as string) ??
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
              value={title ?? ""}
              onChange={(e) => {
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
              value={abstract ?? ""}
              onChange={(e) => {
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
              value={description ?? ""}
              onChange={(e) => {
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
              value={subject ?? ""}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              // autoComplete={context.public.subjects.map(sub => sub.title).join(" ")}
            />
          </div>

          <div className="center-item persian-form">
            <TextField
              className="max-width"
              label="نام نویسنده اصلی برای ترجمه ها"
              value={
                foreignAuthor ??
                (writtenPost && writtenPost.foreign_author
                  ? writtenPost.foreign_author
                  : "")
              }
              onChange={(e) => {
                setForeignAuthor(e.target.value);
              }}
            />
          </div>
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
              onClick={() => writePost(false)}
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
};

const mapStateToProps = (State: {
  admin: IAdminState;
  public: IPublicState;
}) => ({
  writtenPosts: State.admin.writtenPosts,
  subjects: State.public.subjects,
});
const mapDispatchToProps = {
  savingPost,
  changePage: (url: string) => push(url),
};
export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
