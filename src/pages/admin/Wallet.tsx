import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import Button from "@material-ui/core/Button";

import { FixDate } from "../../functions/date";
import { FixPrice } from "../../functions/price";
import { IAdminState, IInvoice } from "../../types/adminType";

interface IWalletProps {
  invoices?: IInvoice[];
}

const Wallet = (props: IWalletProps) => (
  <React.Fragment>
    <Typography variant="h5" component="h2" style={{ direction: "rtl" }}>
      لیست تراکنش ها
    </Typography>

    {props.invoices === undefined || props.invoices.length === 0 ? (
      <div>
        <Typography
          variant="h6"
          component="h4"
          style={{
            direction: "rtl",
            textAlign: "center",
            marginTop: "4rem",
          }}
        >
          شما تا کنون تراکنشی نداشته اید.
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          // component={Link}
          // to={"/books"}
          disabled
        >
          شارژ کیف پول
        </Button>
      </div>
    ) : (
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
            {props.invoices.map((invoice) => (
              <TableRow hover>
                <TableCell component="td" scope="row" align="center">
                  {invoice.id}
                </TableCell>
                <TableCell component="td" scope="row" align="center">
                  {invoice.title}
                </TableCell>
                <TableCell component="td" scope="row" align="center">
                  {FixPrice(invoice.price)}
                </TableCell>
                <TableCell component="td" scope="row" align="center">
                  {FixDate(invoice.created_at)}
                </TableCell>
                <TableCell component="td" scope="row" align="center">
                  {invoice.bank_code}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  </React.Fragment>
);

const mapStateToProps = (State: { admin: IAdminState }) => ({
  invoices: State.admin.invoices,
});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
