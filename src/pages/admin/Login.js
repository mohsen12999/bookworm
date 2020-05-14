import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

import { Redirect } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

import "./Login.css";

const Login = () => (
    <AuthContext.Consumer>
        {context =>
            context.isAuthenticated ? (
                <Redirect to={"/dashboard"} />
            ) : (
                <div className="login-page">
                    <Paper className="login-paper">
                        <Typography
                            component="h3"
                            variant="h5"
                            className="login-title"
                        >
                            فرم ورود به سایت
                        </Typography>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <AlternateEmailIcon />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="input-with-icon-grid"
                                    label="email"
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
                                    label="password"
                                    type="password"
                                />
                            </Grid>
                        </Grid>
                        <div className="login-btn">
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={event => {
                                    event.preventDefault();
                                    context.Login();
                                }}
                            >
                                ورود به سایت
                            </Button>
                        </div>
                    </Paper>
                </div>
            )
        }
    </AuthContext.Consumer>
);

export default Login;
