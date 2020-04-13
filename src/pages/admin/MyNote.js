import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

import { AuthContext } from "../../contexts/AuthContext";

import "./MyNote.css";

// TODO: new note btn -> link
// TODO: note list with edit and delete btn -> action

const MyNote = () => (
  <AuthContext.Consumer>
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
            >
              نوشته جدید
            </Button>
          </Grid>
        </Grid>

        {context.writtenBooks.length === 0 ? (
          <Typography variant="h6" component="h4" className="empty-msg">
            شما هنوز نوشته ای ندارید!
          </Typography>
        ) : (
          context.writtenBooks.map((wb) => (
            <TableContainer
              key={wb.id}
              component={Paper}
              className="note-table"
            >
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow hover>
                    <TableCell component="td" scope="row" align="right">
                      {wb.title}
                    </TableCell>
                    <TableCell component="td" scope="row" align="right">
                      <EditIcon />
                      <DeleteOutlineIcon />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          ))
        )}
      </div>
    )}
  </AuthContext.Consumer>
);

export default MyNote;
