import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import NoteIcon from "@material-ui/icons/Note";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import { Link } from "react-router-dom";

import "./Dashboard.css";
import { IAdminState, IWrittenBook, IWrittenPost } from "../../types/adminType";
import { AdminPages, PublicPages } from "../../constants/pages";

interface IDashboardProps {
  boughtBooks: number[];
  writtenBooks?: IWrittenBook[];
  writtenPosts?: IWrittenPost[];
  wallet?: number;
}

const Dashboard = (props: IDashboardProps) => (
  <div className="dashboard">
    <Grid container spacing={3} className="dashboard-grid">
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              کتاب های خریده شدۀ شما:
            </Typography>
            <Typography variant="h5" component="h2">
              {props.boughtBooks.length === 0
                ? "شما کتابی ندارید."
                : "شما " + props.boughtBooks.length + " کتاب دارید."}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              className="card-btn"
              variant="outlined"
              color="primary"
              startIcon={<MenuBookIcon className="button-icon" />}
              component={Link}
              to={"/" + AdminPages.MY_Library}
            >
              کتاب های شما
            </Button>

            <Button
              className="card-btn"
              variant="outlined"
              color="primary"
              startIcon={<ShoppingCartIcon className="button-icon" />}
              component={Link}
              to={"/" + PublicPages.BOOKS}
            >
              خرید کتاب
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              کتاب های نوشته شده توسط شما:
            </Typography>
            <Typography variant="h5" component="h2">
              {props.writtenBooks === undefined ||
              props.writtenBooks.length === 0
                ? "شما کتابی ننوشته اید."
                : "شما " + props.writtenBooks.length + " کتاب نوشته اید."}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              className="card-btn"
              variant="outlined"
              color="primary"
              startIcon={<NoteIcon className="button-icon" />}
              component={Link}
              to={"/" + AdminPages.MY_BOOKS}
            >
              لیست نوشته ها
            </Button>

            <Button
              className="card-btn"
              variant="outlined"
              color="primary"
              startIcon={<NoteAddIcon className="button-icon" />}
              component={Link}
              to={"/" + AdminPages.EDIT_BOOK}
            >
              نوشته جدید
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              مقاله های نوشته شده توسط شما:
            </Typography>
            <Typography variant="h5" component="h2">
              {props.writtenPosts === undefined ||
              props.writtenPosts.length === 0
                ? "شما مقاله ای ننوشته اید."
                : "شما " + props.writtenPosts.length + " مقاله نوشته اید."}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              className="card-btn"
              variant="outlined"
              color="primary"
              startIcon={<SpeakerNotesIcon className="button-icon" />}
              component={Link}
              to={"/" + AdminPages.MY_POSTS}
            >
              لیست مقاله ها
            </Button>

            <Button
              className="card-btn"
              variant="outlined"
              color="primary"
              startIcon={<NoteAddIcon className="button-icon" />}
              component={Link}
              to={"/" + AdminPages.EDIT_POST}
            >
              مقاله جدید
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              کیف پول شما:
            </Typography>
            <Typography variant="h5" component="h2" className="persian-number">
              {props.wallet ?? 0} تومان
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              className="card-btn"
              variant="outlined"
              color="primary"
              startIcon={<CreditCardIcon className="button-icon" />}
              component={Link}
              to={"/" + AdminPages.WALLET}
            >
              عملکرد مالی شما
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  </div>
);

const mapStateToProps = (State: { admin: IAdminState }) => ({
  boughtBooks: State.admin.boughtBooks,
  writtenBooks: State.admin.writtenBooks,
  writtenPosts: State.admin.writtenPosts,
  wallet: State.admin.wallet,
});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
