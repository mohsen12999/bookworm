import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import Button from "@material-ui/core/Button";

import { Context } from "../../contexts/Context";
import { FixPrice, FixDate } from "../../services/function";

const Wallet = () => (
    <Context.Consumer>
        {context => (
            <React.Fragment>
                <Grid container spacing={1} className="note-grid-item">
                    <Grid item xs={12} sm={8}>
                        <Typography
                            variant="h5"
                            component="h2"
                            style={{ direction: "rtl" }}
                        >
                            لیست تراکنش ها
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} className="add-btn-grid-item">
                        <Button
                            variant="outlined"
                            color="primary"
                            // component={Link}
                            // to={"/books"}
                            disabled
                        >
                            شارژ کیف پول
                        </Button>
                    </Grid>
                </Grid>
                {context.admin.factors.length === 0 ? (
                    <div>
                        <Typography
                            variant="h6"
                            component="h4"
                            style={{
                                direction: "rtl",
                                textAlign: "center",
                                marginTop: "4rem"
                            }}
                        >
                            شما تا کنون تراکنشی نداشته اید.
                        </Typography>
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
                                    <TableCell align="center">
                                        کد پیگیری
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {context.admin.factors.map(factor => (
                                    <TableRow hover>
                                        <TableCell
                                            component="td"
                                            scope="row"
                                            align="center"
                                        >
                                            {factor.id}
                                        </TableCell>
                                        <TableCell
                                            component="td"
                                            scope="row"
                                            align="center"
                                        >
                                            {factor.title}
                                        </TableCell>
                                        <TableCell
                                            component="td"
                                            scope="row"
                                            align="center"
                                        >
                                            {FixPrice(factor.price)}
                                        </TableCell>
                                        <TableCell
                                            component="td"
                                            scope="row"
                                            align="center"
                                        >
                                            {FixDate(factor.created_at)}
                                        </TableCell>
                                        <TableCell
                                            component="td"
                                            scope="row"
                                            align="center"
                                        >
                                            {factor.bank_code}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </React.Fragment>
        )}
    </Context.Consumer>
);

export default Wallet;
