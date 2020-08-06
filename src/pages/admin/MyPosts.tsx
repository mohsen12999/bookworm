import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
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

import { IAdminState, IWrittenPost } from "../../types/adminType";
import { PostWriteStatusDescription } from "../../functions/writeStatus";
import { tryDeletingMyPost } from "../../actions/adminAction";

import "./MyBooks.css";
import { IPublicState, ISubject } from "../../types/publicTypes";
import { AdminPages } from "../../constants/pages";

interface IMyPostsProps {
  writtenPosts?: IWrittenPost[];
  tryDeletingMyPost(id: number): void;
  subjects: ISubject[];
}

const MyPosts = (props: IMyPostsProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handlePopperClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const openPopper = Boolean(anchorEl);
  const idPopper = openPopper ? "simple-popper" : undefined;

  const subjectsDictionary = props.subjects.reduce(
    (dictionary: { [id: number]: string }, subject) => {
      dictionary[subject.id] = subject.title;
      return dictionary;
    },
    {}
  );

  return (
    <div>
      <Grid container spacing={1} className="note-grid-item">
        <Grid item xs={12} sm={8}>
          <Typography variant="h5" component="h2" className="note-title">
            لیست مقاله ها
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} className="add-btn-grid-item">
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<AddBoxIcon />}
            component={Link}
            to={"/" + AdminPages.EDIT_POST}
          >
            مقاله جدید
          </Button>
        </Grid>
      </Grid>

      {props.writtenPosts === undefined || props.writtenPosts?.length === 0 ? (
        <Typography variant="h6" component="h4" className="empty-msg">
          شما هنوز مقاله ای ندارید!
        </Typography>
      ) : (
        <TableContainer component={Paper} className="note-table">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">کد</TableCell>
                <TableCell align="center">عنوان</TableCell>
                <TableCell align="center">موضوع</TableCell>
                <TableCell align="center">وضعیت نوشته</TableCell>
                <TableCell align="center">عملیات</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.writtenPosts?.map((wp) => (
                <TableRow key={wp.id} hover>
                  <TableCell component="td" scope="row" align="right">
                    {wp.id}
                  </TableCell>
                  <TableCell component="td" scope="row" align="center">
                    {wp.title}
                  </TableCell>
                  <TableCell component="td" scope="row" align="center">
                    {subjectsDictionary[wp.subject_id]}
                  </TableCell>
                  <TableCell component="td" scope="row" align="center">
                    {PostWriteStatusDescription(wp.save_status)}
                  </TableCell>
                  <TableCell component="td" scope="row" align="left">
                    <Tooltip title="تغییر مقاله">
                      <IconButton
                        color="primary"
                        aria-label="edit note"
                        component={Link}
                        to={"/blog/" + wp.id}
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="حذف مقاله">
                      <IconButton
                        color="primary"
                        aria-label="delete note"
                        onClick={handlePopperClick}
                      >
                        <DeleteOutlineIcon />
                      </IconButton>
                    </Tooltip>

                    <Popper id={idPopper} open={openPopper} anchorEl={anchorEl}>
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
                              آیا از حذف مقاله اطمینان دارید؟
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button
                            size="small"
                            color="primary"
                            onClick={(e) => {
                              e.stopPropagation();
                              props.tryDeletingMyPost(wp.id);
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
};

const mapStateToProps = (State: {
  admin: IAdminState;
  public: IPublicState;
}) => ({
  writtenPosts: State.admin.writtenPosts,
  subjects: State.public.subjects,
});
const mapDispatchToProps = { tryDeletingMyPost };
export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
