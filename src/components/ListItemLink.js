import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Tooltip from "@material-ui/core/Tooltip";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  link: {
    direction: "rtl"
  },
  linkText: {
    textAlign: "right"
  },
  disableLink: {
    direction: "rtl",
    color: "gray"
  },
  activeLink: {
    direction: "rtl",
    background: "aliceblue"
  }
}));

function ListItemLink(props) {
  const { icon, primary, to, enable, exactMatch } = props;
  const classes = useStyles();

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <Link ref={ref} to={enable ? to : "/login"} {...linkProps} />
      )),
    [to]
  );

  const match = useRouteMatch({ path: to, exact: exactMatch });

  return (
    <li>
      <Tooltip
        title={enable ? primary : "برای دسترسی به این بخش وارد شوید"}
        aria-label={primary}
      >
        <ListItem
          button
          component={renderLink}
          className={
            match
              ? classes.activeLink
              : enable
              ? classes.link
              : classes.disableLink
          }
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText
            primary={primary}
            className={classes.linkText}
            //style={{ textAlign: "right" }}
          />
        </ListItem>
      </Tooltip>
    </li>
  );
}

export default ListItemLink;
