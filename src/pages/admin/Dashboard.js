import React from "react";

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

import { AuthContext } from "../../contexts/AuthContext";

import "./Dashboard.css";

const Dashboard = () => (
  <AuthContext.Consumer>
    {(context) => (
      <div className="dashboard">
        <Grid container spacing={3} className="dashboard-grid">
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  کتاب های خریده شدۀ شما:
                </Typography>
                <Typography variant="h5" component="h2">
                  {context.boughtBook.length === 0
                    ? "شما کتابی ندارید."
                    : "شما " + context.boughtBook.length + " کتاب دارید."}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  className="card-btn"
                  variant="outlined"
                  color="primary"
                  startIcon={<MenuBookIcon className="button-icon" />}
                  component={Link}
                  to={"/mybook"}
                >
                  کتاب های شما
                </Button>

                <Button
                  className="card-btn"
                  variant="outlined"
                  color="primary"
                  startIcon={<ShoppingCartIcon className="button-icon" />}
                  component={Link}
                  to={"/books"}
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
                  {context.writtenBooks.length === 0
                    ? "شما کتابی ننوشته اید."
                    : "شما " + context.writtenBooks.length + " کتاب نوشته اید."}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  className="card-btn"
                  variant="outlined"
                  color="primary"
                  startIcon={<NoteIcon className="button-icon" />}
                  component={Link}
                  to={"/mynote"}
                >
                  لیست نوشته ها
                </Button>

                <Button
                  className="card-btn"
                  variant="outlined"
                  color="primary"
                  startIcon={<NoteAddIcon className="button-icon" />}
                  component={Link}
                  to={"/newnote"}
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
                  {context.article.length === 0
                    ? "شما مقاله ای ننوشته اید."
                    : "شما " + context.article.length + " مقاله نوشته اید."}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  className="card-btn"
                  variant="outlined"
                  color="primary"
                  startIcon={<SpeakerNotesIcon className="button-icon" />}
                  component={Link}
                  to={"/myblog"}
                >
                  لیست مقاله ها
                </Button>

                <Button
                  className="card-btn"
                  variant="outlined"
                  color="primary"
                  startIcon={<NoteAddIcon className="button-icon" />}
                  component={Link}
                  to={"/newblog"}
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
                <Typography
                  variant="h5"
                  component="h2"
                  className="persian-number"
                >
                  {context.wallet} تومان
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  className="card-btn"
                  variant="outlined"
                  color="primary"
                  startIcon={<CreditCardIcon className="button-icon" />}
                  component={Link}
                  to={"/wallet"}
                >
                  عملکرد مالی شما
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    )}
  </AuthContext.Consumer>
);

export default Dashboard;
