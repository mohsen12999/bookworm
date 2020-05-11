import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";

const Wallet = () => (
  <div>
    <Typography variant="h5" component="h2" style={{ direction: "rtl" }}>
      لیست تراکنش ها
    </Typography>

    {/* <Typography
      variant="h6"
      component="h4"
      style={{ direction: "rtl", textAlign: "center", marginTop: "4rem" }}
    >
      شما تا کنون تراکنشی ندارید
    </Typography> */}

    <TableContainer component={Paper} className="note-table">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">کد</TableCell>
            <TableCell align="center">عنوان</TableCell>
            <TableCell align="center">قیمت</TableCell>
            <TableCell align="center">تاریخ</TableCell>
            <TableCell align="center">کد پیگیری</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow hover>
            <TableCell component="td" scope="row" align="center">
              43
            </TableCell>
            <TableCell component="td" scope="row" align="center">
              خرید کتاب
            </TableCell>
            <TableCell component="td" scope="row" align="center">
              50,000
            </TableCell>
            <TableCell component="td" scope="row" align="center">
              1398/02/02 23:58
            </TableCell>
            <TableCell component="td" scope="row" align="center">
              132134564331
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </div>
);

export default Wallet;
