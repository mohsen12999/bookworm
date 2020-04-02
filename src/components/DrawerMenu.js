import React from "react";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

import ListItemLink from "./ListItemLink";
import { AuthContext } from "../contexts/AuthContext";

const useStyles = makeStyles(theme => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  menuItem: {
    direction: "rtl"
  },
  menuItemText: {
    textAlign: "right"
  },
  menuTitle: {
    textAlign: "center",
    fontSize: "1.25rem"
  }
}));

const main_menu = [
  { id: 11, title: "صفحه اصلی", url: "/", exactMatch: true },
  { id: 12, title: "لیست کتاب ها", url: "/books", exactMatch: false },
  { id: 13, title: "لیست مقالات", url: "/blog", exactMatch: false },
  { id: 19, title: "درباره ما", url: "/about", exactMatch: false }
];

const admin_menu = [
  { id: 21, title: "کتاب های من", url: "/mybook", exactMatch: false },
  { id: 22, title: "نوشته های من", url: "/mynote", exactMatch: false }
];

// TODO: add avatar to menu when login

const DrawerMenu = () => {
  const classes = useStyles();

  return (
    <AuthContext.Consumer>
      {context => (
        <div>
          <List>
            <ListItem>
              <ListItemText primary="منو" className={classes.menuTitle} />
            </ListItem>
          </List>
          <Divider />
          <List>
            {main_menu.map(menu => (
              <ListItemLink
                key={menu.id}
                icon={<InboxIcon />}
                primary={menu.title}
                to={menu.url}
                enable={true}
                exactMatch={menu.exactMatch}
              />
            ))}
          </List>
          <Divider />
          <List>
            {admin_menu.map(menu => (
              <ListItemLink
                key={menu.id}
                icon={<InboxIcon />}
                primary={menu.title}
                to={menu.url}
                enable={context.isAuthenticated}
                exactMatch={menu.exactMatch}
              />
            ))}
          </List>
          <Divider />
          {context.isAuthenticated ? (
            <ListItemLink
              icon={<InboxIcon />}
              primary="خروج"
              to="/logout"
              enable={true}
              exactMatch={false}
            />
          ) : (
            <ListItemLink
              icon={<InboxIcon />}
              primary="ورود"
              to="/login"
              enable={true}
              exactMatch={false}
            />
          )}
        </div>
      )}
    </AuthContext.Consumer>
  );
};

export default DrawerMenu;
