import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

import { Redirect } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

import "./Login.css";
import { CheckEmail } from "../../services/function";

const Register = () => {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [passwordAgain, setPasswordAgain] = React.useState();
  const [invalidForm, setInvalidForm] = React.useState(true);

  React.useEffect(() => {
    setInvalidForm(
      !name ||
        name.length < 4 ||
        !email ||
        !password ||
        password.length < 6 ||
        !CheckEmail(email) ||
        password !== passwordAgain
    );
  }, [name, email, password, passwordAgain]);

  return (
    <AuthContext.Consumer>
      {(context) =>
        context.isAuthenticated ? (
          <Redirect to={"/dashboard"} />
        ) : (
          <form
            className="login-page"
            onSubmit={(e) => {
              e.preventDefault();
              context.Register(name, email, password, passwordAgain);
            }}
          >
            <Paper className="login-paper">
              <Typography component="h3" variant="h5" className="login-title">
                فرم عضویت در سایت
              </Typography>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <AccountCircle />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="نام فارسی"
                    className="rightText"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    helperText="حداقل 4 حرفی"
                    error={name && name.length < 4}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <AlternateEmailIcon />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="ایمیل"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    helperText="ایمیل معتبر"
                    error={email && email.length < 4 && !CheckEmail(email)}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <VisibilityOff />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="رمز عبور"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    helperText="رمز عبور حداقل 6 حرفی"
                    error={password && password.length < 6}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <VisibilityOff />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="تکرار رمز عبور"
                    type="password"
                    value={passwordAgain}
                    onChange={(e) => setPasswordAgain(e.target.value)}
                    required
                    helperText="با رمز عبور یکی نیست"
                    error={password && password !== passwordAgain}
                  />
                </Grid>
              </Grid>
              <div className="login-btn">
                <Button
                  variant="outlined"
                  color="primary"
                  type="submit"
                  disabled={invalidForm}
                >
                  ارسال اطلاعات
                </Button>
              </div>
            </Paper>
          </form>
        )
      }
    </AuthContext.Consumer>
  );
};

export default Register;
