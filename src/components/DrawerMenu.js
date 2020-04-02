import React from "react";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

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
  { id: 11, title: "صفحه اصلی", url: "/" },
  { id: 12, title: "لیست کتاب ها", url: "/books" },
  { id: 13, title: "لیست مقالات", url: "/blog" },
  { id: 19, title: "درباره ما", url: "/about" }
];

const admin_menu = [
  { id: 21, title: "کتاب های من", url: "/mybook" },
  { id: 22, title: "نوشته های من", url: "/mynote" }
];

const DrawerMenu = () => {
  const classes = useStyles();

  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primary="منو" className={classes.menuTitle} />
        </ListItem>
      </List>
      <Divider />
      <List>
        {main_menu.map(menu => (
          <ListItem button key={menu.id} className={classes.menuItem}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText
              primary={menu.title}
              className={classes.menuItemText}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {admin_menu.map(menu => (
          <ListItem button key={menu.id} className={classes.menuItem}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText
              primary={menu.title}
              className={classes.menuItemText}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DrawerMenu;
