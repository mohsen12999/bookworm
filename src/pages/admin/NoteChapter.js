import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Popper from "@material-ui/core/Popper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ListAltIcon from "@material-ui/icons/ListAlt";

import { useParams, Redirect, Link } from "react-router-dom";
import { Context } from "../../contexts/Context";
import { ChapterPublishStatusDescription } from "../../services/function";

const NoteChapter = () => {
  const { note_id } = useParams();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopperClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const openPopper = Boolean(anchorEl);
  const idPopper = openPopper ? "simple-popper" : undefined;

  return (
    <Context.Consumer>
      {(context) => {
        const Book = context.GetWrittenBook(note_id);
        if (!Book) {
          context.OpenSnackbar("نوشته مورد نظر پیدا نشد");
          return <Redirect to={"/mynote"} />;
        }
        const chapters = context.GetWrittenBookChapters(note_id);

        return (
          <div>
            <Grid container spacing={1} className="note-grid-item">
              <Grid item xs={12} sm={8}>
                <Typography variant="h5" component="h2" className="note-title">
                  لیست فصل های {Book.title}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} className="add-btn-grid-item">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<AddBoxIcon />}
                  component={Link}
                  to={"/chapter/" + note_id}
                >
                  فصل جدید
                </Button>
              </Grid>
            </Grid>
            {!chapters || chapters.length === 0 ? (
              <Typography variant="h6" component="h4" className="empty-msg">
                هیچ فصلی برای این کتاب نوشته نشده!
              </Typography>
            ) : (
              <TableContainer component={Paper} className="note-table">
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">کد</TableCell>
                      <TableCell align="center">عنوان</TableCell>
                      <TableCell align="center">وضعیت فصل</TableCell>
                      <TableCell align="center">عملیات</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {chapters.map((ch) => (
                      <TableRow key={ch.id} hover>
                        <TableCell component="td" scope="row" align="right">
                          {ch.id}
                        </TableCell>
                        <TableCell component="td" scope="row" align="right">
                          {ch.title}
                        </TableCell>
                        <TableCell component="td" scope="row" align="center">
                          {ChapterPublishStatusDescription(ch.publish_status)}
                        </TableCell>
                        <TableCell component="td" scope="row" align="left">
                          <Tooltip title="تغییر فصل">
                            <IconButton
                              color="primary"
                              aria-label="edit note"
                              component={Link}
                              to={"/chapter/" + note_id + "/" + ch.id}
                            >
                              <EditIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="حذف فصل">
                            <IconButton
                              color="primary"
                              aria-label="delete note"
                              onClick={handlePopperClick}
                            >
                              <DeleteOutlineIcon />
                            </IconButton>
                          </Tooltip>

                          <Popper
                            id={idPopper}
                            open={openPopper}
                            anchorEl={anchorEl}
                          >
                            <Card className="popper-card">
                              <CardActionArea>
                                <CardContent>
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                  >
                                    حذف
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                  >
                                    آیا از حذف فصل اطمینان دارید؟
                                  </Typography>
                                </CardContent>
                              </CardActionArea>
                              <CardActions>
                                <Button
                                  size="small"
                                  color="primary"
                                  onClick={() => {
                                    context.DeleteChapter(ch.id).then((res) => {
                                      if (res) {
                                        context.OpenSnackbar(
                                          "این نوشته حذف شد"
                                        );
                                      } else {
                                        context.OpenSnackbar(
                                          "خطا در حذف نوشته"
                                        );
                                      }
                                    });
                                  }}
                                >
                                  اطمینان از حذف
                                </Button>
                                <Button
                                  size="small"
                                  color="primary"
                                  onClick={handlePopperClick}
                                >
                                  رد کردن
                                </Button>
                              </CardActions>
                            </Card>
                          </Popper>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default NoteChapter;
