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
import { useParams, Redirect } from "react-router-dom";

import { AdminPages } from "../../constants/pages";
import { IAdminState, IWrittenBook } from "../../types/adminType";
import { IPublicState, IGenre } from "../../types/publicTypes";
import { savingBook } from "../../actions/adminAction";

import "./Profile.css";

interface IEditBookProps {
  writtenBooks?: IWrittenBook[];
  savingBook(data: FormData): boolean;
  genres: IGenre[];
}

const EditBook = (props: IEditBookProps) => {
  const { id } = useParams();

  const [file, setFile] = React.useState<File | undefined>(undefined);
  const [title, setTitle] = React.useState<string | undefined>();
  const [abstract, setAbstract] = React.useState<string | undefined>();
  const [price, setPrice] = React.useState<number | undefined>();
  const [genre, setGenre] = React.useState<string | undefined>();
  const [foreignAuthor, setForeignAuthor] = React.useState<
    string | undefined
  >();
  const [published, setPublished] = React.useState<boolean | undefined>(
    undefined
  );

  const [src, setSrc] = React.useState<string | ArrayBuffer | null>();
  const [exit2List, setExit2List] = React.useState<boolean>(false);

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

  const writeNote = (exit: boolean) => {
    // if (!writtenBook && (!title || title.length < 3)) {
    //   context.OpenSnackbar("عنوان نوشته اجباری هستند");
    //   return;
    // }
    const data = new FormData();
    data.append("id", writtenBook ? String(writtenBook.id) : "");
    data.append("file", file ?? "");
    data.append("title", title ?? "");
    data.append("abstract", abstract ?? "");
    data.append("price", String(price));
    data.append("foreignAuthor", foreignAuthor ?? "");
    data.append("genre", genre ?? "");

    data.append(
      "published",
      String(Number(published !== undefined && published === true))
    );

    const result = props.savingBook(data);
    setExit2List(result && exit);
  };

  const writtenBook = props.writtenBooks?.find((wb) => wb.id === Number(id));
  if (writtenBook) {
    setTitle(writtenBook.title);
    setAbstract(writtenBook.abstract);
    setPrice(writtenBook.price);
    setForeignAuthor(writtenBook.foreign_author);
    const genre = props.genres.find((g) => g.id === writtenBook.genre_id);
    if (genre) {
      setGenre(genre.title);
    }
    setPublished(writtenBook.save_status === 10);
  }

  return exit2List ? (
    <Redirect to={"/" + AdminPages.MY_BOOKS} />
  ) : (
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
                (src as string) ??
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
              placeholder="خلاصه نوشته"
              value={abstract ?? ""}
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
              value={price ?? ""}
              onChange={(e) => {
                setPrice(Number(e.target.value));
              }}
            />
          </div>

          <div className="center-item persian-form">
            <TextField
              className="max-width"
              label="موضوع"
              value={genre ?? ""}
              onChange={(e) => {
                setGenre(e.target.value);
              }}
            />
          </div>

          <div className="center-item persian-form">
            <TextField
              className="max-width"
              label="نام نویسنده اصلی برای ترجمه ها"
              value={foreignAuthor ?? ""}
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
};

const mapStateToProps = (State: {
  admin: IAdminState;
  public: IPublicState;
}) => ({
  writtenBooks: State.admin.writtenBooks,
  genres: State.public.genres,
});

const mapDispatchToProps = {
  savingBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBook);
