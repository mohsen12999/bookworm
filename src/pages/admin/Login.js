import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";

import "./Login.css";

const Login = () => (
  <div className="login-page">
    <Paper className="login-paper">
      <Typography component="h3" variant="h5" className="login-title">
        فرم به سایت
      </Typography>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <AccountCircle />
        </Grid>
        <Grid item>
          <TextField id="input-with-icon-grid" label="username" />
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <VisibilityOff />
        </Grid>
        <Grid item>
          <TextField
            id="input-with-icon-grid"
            label="password"
            type="password"
          />
        </Grid>
      </Grid>
      <div className="login-btn">
        <Button variant="contained" variant="outlined" color="primary">
          ورود به سایت
        </Button>
      </div>
    </Paper>
  </div>
);
export default Login;
