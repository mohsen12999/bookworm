import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import { Redirect } from "react-router";
import { push } from "connected-react-router";

import { CheckEmail } from "../../functions/email";
import { IAdminState } from "../../types/adminType";
import { tryToRegister } from "../../actions/AuthAction";

import "./Login.css";
import { AuthPages, AdminPages } from "../../constants/pages";

interface IRegisterProps {
  loggedIn: boolean;

  tryToRegister(
    name?: string,
    email?: string,
    password?: string,
    password_confirmation?: string
  ): Boolean;

  changePage: Function;
}

const Register = (props: IRegisterProps) => {
  const [name, setName] = React.useState<string | undefined>();
  const [email, setEmail] = React.useState<string | undefined>();
  const [password, setPassword] = React.useState<string | undefined>();
  const [passwordAgain, setPasswordAgain] = React.useState<
    string | undefined
  >();
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

  return props.loggedIn ? (
    <Redirect to={"/" + AdminPages.DASHBOARD} />
  ) : (
    <form
      className="login-page"
      onSubmit={(e) => {
        e.preventDefault();
        const result = props.tryToRegister(
          name,
          email,
          password,
          passwordAgain
        );

        if (result) {
          props.changePage("/" + AuthPages.LOGIN);
        }
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
              label="نام فارسی"
              className="rightText"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              helperText="حداقل 4 حرفی"
              error={name != null && name !== undefined && name.length < 4}
            />
          </Grid>
        </Grid>
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
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <VisibilityOff />
          </Grid>
          <Grid item>
            <TextField
              label="تکرار رمز عبور"
              type="password"
              value={passwordAgain}
              onChange={(e) => setPasswordAgain(e.target.value)}
              required
              helperText="با رمز عبور یکی نیست"
              error={
                passwordAgain != null &&
                passwordAgain !== undefined &&
                password !== passwordAgain
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
            ارسال اطلاعات
          </Button>
        </div>
      </Paper>
    </form>
  );
};

const mapStateToProps = (State: { admin: IAdminState }) => ({
  loggedIn: State.admin.loggedIn,
});

const mapDispatchToProps = {
  tryToRegister,
  changePage: (url: string) => push(url),
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
