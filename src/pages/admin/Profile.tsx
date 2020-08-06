import React from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";

import "./Profile.css";
import { IAdminState } from "../../types/adminType";

interface IProfileProps {
  name?: string;
  email?: string;
  mobile?: string;
  avatar?: string;
}

const Profile = (props: IProfileProps) => {
  const [file, setFile] = React.useState<File | undefined>(undefined);

  const [name, setName] = React.useState(props.name);
  const [email, setEmail] = React.useState(props.email);
  const [mobile, setMobile] = React.useState(props.mobile);

  const [src, setSrc] = React.useState<string | ArrayBuffer | null>();

  const handleInputFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const ele = event.target;
    if (ele.files == null) return;
    const imgFile = ele.files[0];
    // console.log(ele, imgFile);
    setFile(imgFile);

    let reader = new FileReader();
    reader.onload = (e) => {
      const target = e.target;
      if (target != null && e.target?.result) {
        setSrc(e.target?.result);
      }
    };

    reader.readAsDataURL(imgFile);
  };

  return (
    <Container maxWidth="sm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData();
          data.append("file", file ?? "");
          data.append("name", name ?? "");
          data.append("email", email ?? "");
          data.append("mobile", mobile ?? "");

          // console.log(file, name, email, mobile, data);
          context.UpdateProfile(data).then((res) => {
            if (res) {
              context.OpenSnackbar("پروفایل با موفقیت بروزرسانی شد.");
            } else {
              context.OpenSnackbar("اشکال در بروزرسانی پروفایل");
            }
          });
        }}
      >
        <div className="center-item">
          <img
            src={src ?? props.avatar ?? "/images/user/default-profile.jpg"}
            // src={src ? src : context.avatar? context.avatar:"/images/user/default-profile.jpg"}
            alt={props.name}
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
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="center-item persian-form">
          <TextField
            className="max-width email"
            label="ایمیل شما"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="center-item persian-form">
          <TextField
            className="max-width"
            label="شماره موبایل"
            type="tel"
            value={mobile}
            onChange={(e) => {
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
};

const mapStateToProps = (State: { admin: IAdminState }) => ({
  name: State.admin.name,
  email: State.admin.email,
  mobile: State.admin.mobile,
  avatar: State.admin.avatar,
});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
