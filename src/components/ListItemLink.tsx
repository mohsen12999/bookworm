import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Tooltip from "@material-ui/core/Tooltip";

import "./ListItemLink.css";

interface IListItemLinkProps {
	icon: JSX.Element;
	primary:string;
	to:string;
	enable:boolean;
	exactMatch:boolean;
}

function ListItemLink({icon, primary, to, enable, exactMatch}:IListItemLinkProps) {
	//  const { icon, primary, to, enable, exactMatch } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
	      {/*<Link ref={ref} to={enable ? to : "/login"} {...linkProps} />*/}
	      <Link ref={ref as React.MutableRefObject<HTMLInputElement>} to={enable ? to : "/login"} {...linkProps} />
      )),
    [to, enable]
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
          className={match ? "active-link" : enable ? "link" : "disable-link"}
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText
            primary={primary}
            className="link-text"
            //style={{ textAlign: "right" }}
          />
        </ListItem>
      </Tooltip>
    </li>
  );
}

export default ListItemLink;
