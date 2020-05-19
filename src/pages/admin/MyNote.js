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

import { Link } from "react-router-dom";

import { Context } from "../../contexts/Context";

import "./MyNote.css";

// TODO: note list with edit and delete btn -> action

const MyNote = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopperClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const openPopper = Boolean(anchorEl);
  const idPopper = openPopper ? "simple-popper" : undefined;

  return (
    <Context.Consumer>
      {(context) => (
        <div>
          <Grid container spacing={1} className="note-grid-item">
            <Grid item xs={12} sm={8}>
              <Typography variant="h5" component="h2" className="note-title">
                لیست نوشته ها
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} className="add-btn-grid-item">
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<AddBoxIcon />}
                component={Link}
                to={"/note"}
              >
                نوشته جدید
              </Button>
            </Grid>
          </Grid>

          {(context) =>
            context.admin.writtenBooks === 0 ? (
              <Typography variant="h6" component="h4" className="empty-msg">
                شما هنوز نوشته ای ندارید!
              </Typography>
            ) : (
              <TableContainer component={Paper} className="note-table">
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">کد</TableCell>
                      <TableCell align="center">عنوان</TableCell>
                      <TableCell align="center">قیمت</TableCell>
                      <TableCell align="center">تاریخ</TableCell>
                      <TableCell align="center">وضعیت نوشته</TableCell>
                      <TableCell align="center">عملیات</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {context.admin.writtenBooks.map((wp) => (
                      <TableRow hover>
                        <TableCell component="td" scope="row" align="right">
                          {wp.id}
                        </TableCell>
                        <TableCell component="td" scope="row" align="right">
                          {wp.title}
                        </TableCell>
                        <TableCell component="td" scope="row" align="center">
                          {new Date(wp.created_at).toLocaleString("fa-IR")}
                        </TableCell>
                        <TableCell component="td" scope="row" align="center">
                          ذخیره شده
                        </TableCell>
                        <TableCell component="td" scope="row" align="left">
                          <Tooltip title="تغییر نوشته">
                            <IconButton
                              color="primary"
                              aria-label="edit note"
                              component={Link}
                              to={"/note/" + wp.id}
                            >
                              <EditIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="حذف نوشته">
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
                                    آیا از حذف نوشته اطمینان دارید؟
                                  </Typography>
                                </CardContent>
                              </CardActionArea>
                              <CardActions>
                                <Button
                                  size="small"
                                  color="primary"
                                  onClick={(e) => {
                                    console.log("delete");
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
            )
          }
        </div>
      )}
    </Context.Consumer>
  );
};

export default MyNote;
