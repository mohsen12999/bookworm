import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { HomePages } from "../../constants/pages";

import "./NotFound.css";

const NotFound = () => (
  <div className="not-found">
    <h2>متاسفانه صفحه مورد نظر پیدا نشد.</h2>
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to={"/" + HomePages.INDEX}
    >
      بازگشت به صفحه اول
    </Button>
  </div>
);

export default NotFound;
