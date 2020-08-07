import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import { push } from "connected-react-router";

import { CheckEmail } from "../../functions/email";
import { IAdminState } from "../../types/adminType";
import { IAppState } from "../../types/appType";
import { tryToLogin } from "../../actions/AuthAction";

import "./Login.css";
import { AdminPages } from "../../constants/pages";

interface ILoginProps {
  loggedIn: boolean;
  loading: boolean;

  tryToLogin(email?: string, password?: string): boolean;
  changePage: Function;
}

const Login = (props: ILoginProps) => {
  const [email, setEmail] = React.useState<string | undefined>();
  const [password, setPassword] = React.useState<string | undefined>();
  const [invalidForm, setInvalidForm] = React.useState<boolean>(true);

  React.useEffect(() => {
    setInvalidForm(!email || !password || !CheckEmail(email));
  }, [email, password]);

  return (
    // props.loggedIn ? (
    //   <Redirect to={"/dashboard"} />
    // ) : (
    <form
      className="login-page"
      onSubmit={(e) => {
        e.preventDefault();
        if (props.loading || invalidForm) {
          return;
        }

        var result = props.tryToLogin(email, password);
        if (result) {
          props.changePage("/" + AdminPages.DASHBOARD);
        }
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
                email != null &&
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
              error={
                password != null &&
                password !== undefined &&
                password.length < 6
              }
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

const mapDispatchToProps = {
  tryToLogin,
  changePage: (url: string) => push(url),
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
