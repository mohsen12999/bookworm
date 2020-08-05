import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import { Redirect } from "react-router-dom";

import { CheckEmail } from "../../functions/email";

import "./Login.css";
import { IAdminState } from "../../types/adminType";
import { IAppState } from "../../types/appType";

interface ILoginProps {
  loggedIn: boolean;
  loading: boolean;
}

const Login = (props: ILoginProps) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [invalidForm, setInvalidForm] = React.useState(true);

  React.useEffect(() => {
    setInvalidForm(!email || !password || !CheckEmail(email));
  }, [email, password]);

  return props.loggedIn ? (
    <Redirect to={"/dashboard"} />
  ) : (
    <form
      className="login-page"
      onSubmit={(e) => {
        e.preventDefault();
        if (props.loading) {
          return;
        }

        context.Login(email, password).then((res) => {
          if (res) {
            //setRedirect(true);
            context.OpenSnackbar("خوش آمدید");
          } else {
            context.OpenSnackbar("اشکال در ورود");
          }
        });
      }}
    >
      <Paper className="login-paper">
        <Typography component="h3" variant="h5" className="login-title">
          فرم ورود به سایت
        </Typography>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AlternateEmailIcon />
          </Grid>
          <Grid item>
            <TextField
              label="ایمیل"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              helperText="ایمیل معتبر"
              error={
                email &&
                email !== undefined &&
                email.length < 4 &&
                !CheckEmail(email)
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <VisibilityOff />
          </Grid>
          <Grid item>
            <TextField
              label="رمز عبور"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              helperText="رمز عبور حداقل 6 حرفی"
              error={password && password !== undefined && password.length < 6}
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
            ورود به سایت
          </Button>
        </div>
      </Paper>
    </form>
  );
};

const mapStateToProps = (State: { admin: IAdminState; app: IAppState }) => ({
  loggedIn: State.admin.loggedIn,
  loading: State.app.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
