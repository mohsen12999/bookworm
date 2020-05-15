import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";

import { Context } from "../../contexts/Context";

import "./Profile.css";

// TODO: save to db
// TODO: save to auth context

const Profile = () => {
  const [name, setName] = React.useState();
  const [mobile, setMobile] = React.useState();
  const [src, setSrc] = React.useState(undefined);

  const handleInputFileChange = (event) => {
    const ele = event.target;
    const imgFile = ele.files[0];

    let reader = new FileReader();
    reader.onload = (e) => {
      setSrc(e.target.result);
    };

    reader.readAsDataURL(imgFile);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeMobile = (e) => {
    setMobile(e.target.value);
  };

  const handleSaveProfile = () => {
    // ....
  };

  return (
    <Context.Consumer>
      {(context) => {
        if (!name && context.username) {
          setName(context.username);
        }
        if (!mobile && context.mobile) {
          setMobile(context.mobile);
        }
        return (
          <Container maxWidth="sm">
            <div className="center-item">
              <img
                src={src ? src : context.avatar}
                alt={context.username}
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
                defaultValue={context.username}
                onChange={handleChangeName}
              />
            </div>
            <div className="center-item persian-form">
              <TextField
                className="max-width"
                label="موبایل"
                defaultValue={context.mobile}
                onChange={handleChangeMobile}
              />
            </div>
            <div className="center-item save-btn-div">
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon />}
                onClick={handleSaveProfile}
              >
                ذخیره
              </Button>
            </div>
          </Container>
        );
      }}
    </Context.Consumer>
  );
};

export default Profile;
