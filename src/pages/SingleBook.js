import React from "react";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Tooltip from "@material-ui/core/Tooltip";

import { useParams } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import { books } from "../services/data";

import "./SingleBook.css";

const useStyles = makeStyles(theme => ({
  bidSlider: {
    background: "lightgray",
    display: "flex"
    //display: "display",
    // [theme.breakpoints.up("sm")]: {
    //   display: "flex"
    // }
  },
  image: {
    width: "50%",
    margin: "1rem",
    [theme.breakpoints.up("sm")]: {
      width: "50%"
    }
  },
  imageSpan: {
    flexGrow: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    direction: "rtl",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "50%"
    }
  }
}));

// TODO: Book Name
// TODO: Book Author
// TODO: Book Abstract

const SingleBook = () => {
  const classes = useStyles();
  let { id } = useParams();
  const book = books.find(b => b.id === Number(id));

  return (
    <React.Fragment>
      <div className="big-book-banner">
        <div>
          <img src={book.img} className="book-img" alt={book.title} />
        </div>
        <div>
          <div className="book-text">
            <Typography variant="h4">{book.title}</Typography>
            <Typography paragraph>نوشته {book.author}</Typography>
            <Button
              className="buy-book-btn"
              variant="contained"
              color="primary"
              endIcon={<ShoppingCartIcon />}
            >
              خرید کتاب
            </Button>
          </div>
        </div>
      </div>

      <div className="book-abstract">
        <Typography variant="h5" component="h4">
          خلاصه کتاب
        </Typography>
        <Typography paragraph>چکیده یا خلاصه کتاب</Typography>
      </div>

      <div className="book-chapters">
        <Typography variant="h5" component="h4" className="chapter-header">
          فصل های کتاب
        </Typography>

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              <TableRow hover>
                <Tooltip
                  title="برای خواندن این فصل باید کتاب را بخرید"
                  aria-label="خواندن"
                >
                  <TableCell component="th" scope="row" align="right">
                    فصل اول: مقدمه
                  </TableCell>
                </Tooltip>
              </TableRow>
              <TableRow hover>
                <Tooltip
                  title="برای خواندن این فصل باید کتاب را بخرید"
                  aria-label="خواندن"
                >
                  <TableCell component="th" scope="row" align="right">
                    فصل دوم: افتتاحیه
                  </TableCell>
                </Tooltip>
              </TableRow>
              <TableRow hover>
                <Tooltip
                  title="برای خواندن این فصل باید کتاب را بخرید"
                  aria-label="خواندن"
                >
                  <TableCell component="th" scope="row" align="right">
                    فصل سوم: اتفاق
                  </TableCell>
                </Tooltip>
              </TableRow>
              <TableRow hover>
                <Tooltip
                  title="برای خواندن این فصل باید کتاب را بخرید"
                  aria-label="خواندن"
                >
                  <TableCell component="th" scope="row" align="right">
                    فصل چهارم: مرگ
                  </TableCell>
                </Tooltip>
              </TableRow>
              <TableRow hover>
                <Tooltip
                  title="برای خواندن این فصل باید کتاب را بخرید"
                  aria-label="خواندن"
                >
                  <TableCell component="th" scope="row" align="right">
                    فصل پنجم: رستگاری
                  </TableCell>
                </Tooltip>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </React.Fragment>
  );
};

export default SingleBook;
