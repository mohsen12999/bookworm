import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { PublicPages } from "../../constants/pages";

const NotFound = () => (
  <div className="not-found">
    <h2>متاسفانه صفحه مورد نظر پیدا نشد.</h2>
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to={"/" + PublicPages.INDEX}
    >
      بازگشت به صفحه اول
    </Button>
  </div>
);

export default NotFound;
