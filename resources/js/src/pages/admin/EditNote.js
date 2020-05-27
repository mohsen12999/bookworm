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

const EditNote = () => {
  const { note_id } = useParams();

  const [id, setId] = React.useState(undefined);
  const [file, setFile] = React.useState(null);
  const [title, setTitle] = React.useState();
  const [abstract, setAbstract] = React.useState();
  const [price, setPrice] = React.useState();
  const [genre, setGenre] = React.useState();
  const [foreignAuthor, setForeignAuthor] = React.useState();
  const [published, setPublished] = React.useState(undefined);

  const [src, setSrc] = React.useState(undefined);

  const [exit2List, setExit2List] = React.useState(false);

  const handleInputFileChange = (event) => {
    const ele = event.target;
    const imgFile = ele.files[0];
    // console.log(ele, imgFile);
    setFile(imgFile);

    let reader = new FileReader();
    reader.onload = (e) => {
      setSrc(e.target.result);
    };

    reader.readAsDataURL(imgFile);
  };

  return exit2List ? (
    <Redirect to={"/mynote"} />
  ) : (
    <Context.Consumer>
      {(context) => {
        const writtenBook = context.GetWrittenBook(note_id);
        if (writtenBook) {
          setId(writtenBook.id);
        }

        const writeNote = (exit) => {
          if (!writtenBook && (!title || title.length < 3)) {
            context.OpenSnackbar("عنوان نوشته اجباری هستند");
            return;
          }

          const data = new FormData();
          data.append("id", id);
          data.append("file", file);
          data.append("title", title);
          data.append("abstract", abstract);
          data.append("price", price);
          data.append("foreignAuthor", foreignAuthor);
          data.append("genre", genre);
          data.append("published", published);

          context.WriteBook(data).then((res) => {
            if (res.success) {
              context.OpenSnackbar("نوشته با موفقیت ذخیره شد.");
              setId(res.id);
            } else {
              context.OpenSnackbar("اشکال در ذخیره نوشته");
            }
            if (exit) {
              setExit2List(true);
            }
          });
        };

        return (
          <React.Fragment>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                writeNote(false);
              }}
            >
              <Container maxWidth="sm">
                <div className="center-item">
                  <img
                    src={
                      src ??
                      (writtenBook && writtenBook.img
                        ? writtenBook.img
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
                    label="عنوان نوشته"
                    value={
                      title ??
                      (writtenBook && writtenBook.title
                        ? writtenBook.title
                        : "")
                    }
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
                    placeholder="خلاصه نوشته"
                    value={
                      abstract ??
                      (writtenBook && writtenBook.abstract
                        ? writtenBook.abstract
                        : "")
                    }
                    onChange={(e) => {
                      setAbstract(e.target.value);
                    }}
                  />
                </div>

                <div className="center-item persian-form">
                  <TextField
                    className="max-width"
                    label="قیمت پیشنهادی (هزارتومان)"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={
                      price ??
                      (writtenBook && writtenBook.price
                        ? writtenBook.price
                        : "")
                    }
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </div>

                <div className="center-item persian-form">
                  <TextField
                    className="max-width"
                    label="موضوع"
                    value={
                      genre ??
                      (writtenBook && writtenBook.genre
                        ? writtenBook.genre
                        : "")
                    }
                    onChange={(e) => {
                      setGenre(e.target.value);
                    }}
                  />
                </div>

                <div className="center-item persian-form">
                  <TextField
                    className="max-width"
                    label="نام نویسنده اصلی برای ترجمه ها"
                    value={
                      foreignAuthor ??
                      (writtenBook && writtenBook.foreign_author
                        ? writtenBook.foreign_author
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
                        checked={
                          published ??
                          (writtenBook &&
                          writtenBook.publish_status &&
                          writtenBook.publish_status === 10
                            ? true
                            : false)
                        }
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
                    disabled={!writtenBook && (!title || title.length < 3)}
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
                  disabled={!writtenBook && (!title || title.length < 3)}
                  startIcon={<SaveIcon />}
                  onClick={() => writeNote(true)}
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

export default EditNote;
