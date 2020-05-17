import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";

import { Context } from "../../contexts/Context";

import "./Profile.css";

// TODO: change user password

const Profile = () => {
    const [file, setFile] = React.useState(null);
    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [mobile, setMobile] = React.useState();
    const [src, setSrc] = React.useState(undefined);

    const handleInputFileChange = event => {
        const ele = event.target;
        const imgFile = ele.files[0];
        console.log(ele, imgFile);
        setFile(imgFile);

        let reader = new FileReader();
        reader.onload = e => {
            setSrc(e.target.result);
        };

        reader.readAsDataURL(imgFile);
    };

    return (
        <Context.Consumer>
            {context => {
                // if (!name && context.admin.name) {
                //     setName(context.admin.name);
                // }
                // if (!email && context.admin.email) {
                //     setEmail(context.admin.email);
                // }
                // if (!mobile && context.admin.mobile) {
                //     setMobile(context.admin.mobile);
                // }
                return (
                    <Container maxWidth="sm">
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                const data = new FormData();
                                data.append("file", file);
                                data.append("name", name);
                                data.append("email", email);
                                data.append("mobile", mobile);

                                console.log(file, name, email, mobile, data);

                                //context.UpdateProfile(file, name, email, mobile)
                                context.UpdateProfile(data).then(res => {
                                    if (res) {
                                        context.OpenSnackbar(
                                            "پروفایل با موفقیت بروزرسانی شد."
                                        );
                                    } else {
                                        context.OpenSnackbar(
                                            "اشکال در بروزرسانی پروفایل"
                                        );
                                    }
                                });
                            }}
                        >
                            <div className="center-item">
                                <img
                                    src={
                                        src ??
                                        context.admin.avatar ??
                                        "/images/user/default-profile.jpg"
                                    }
                                    // src={src ? src : context.avatar? context.avatar:"/images/user/default-profile.jpg"}
                                    alt={context.admin.name}
                                    className="avatar-img"
                                />
                            </div>
                            <div className="center-item">
                                <input
                                    accept="image/*"
                                    className="hidden-input"
                                    id="icon-button-file"
                                    type="file"
                                    onChange={handleInputFileChange}
                                />
                                <label htmlFor="icon-button-file">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        component="span"
                                        startIcon={<PhotoCamera />}
                                    >
                                        بارگزاری تصویر
                                    </Button>
                                </label>
                            </div>
                            <div className="center-item persian-form">
                                <TextField
                                    className="max-width username"
                                    label="نام شما"
                                    value={name ?? context.admin.name}
                                    onChange={e => {
                                        setName(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="center-item persian-form">
                                <TextField
                                    className="max-width username"
                                    label="ایمیل شما"
                                    type="email"
                                    value={email ?? context.admin.email}
                                    onChange={e => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="center-item persian-form">
                                <TextField
                                    className="max-width"
                                    label="شماره موبایل"
                                    type="tel"
                                    value={mobile ?? context.admin.mobile}
                                    onChange={e => {
                                        setMobile(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="center-item save-btn-div">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    type="submit"
                                    startIcon={<SaveIcon />}
                                >
                                    به‌روزرسانی
                                </Button>
                            </div>
                        </form>
                    </Container>
                );
            }}
        </Context.Consumer>
    );
};

export default Profile;
