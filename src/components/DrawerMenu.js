import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import ViewStreamIcon from "@material-ui/icons/ViewStream";
import StreetviewIcon from "@material-ui/icons/Streetview";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import NoteIcon from "@material-ui/icons/Note";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

import ListItemLink from "./ListItemLink";
import ReadingBookMenu from "./ReadingBookMenu";
import { Context } from "../contexts/Context";

const main_menu = [
  {
    id: 11,
    title: "صفحه اصلی",
    url: "/",
    exactMatch: true,
    icon: <ViewStreamIcon />,
  },
  {
    id: 12,
    title: "لیست کتاب ها",
    url: "/books",
    exactMatch: false,
    icon: <LibraryBooksIcon />,
  },
  {
    id: 13,
    title: "لیست مقالات",
    url: "/blogs",
    exactMatch: false,
    icon: <CollectionsBookmarkIcon />,
  },
  {
    id: 19,
    title: "درباره ما",
    url: "/about",
    exactMatch: false,
    icon: <StreetviewIcon />,
  },
];

const admin_menu = [
  {
    id: 21,
    title: "داشبورد",
    url: "/dashboard",
    exactMatch: false,
    icon: <DashboardIcon />,
  },
  {
    id: 22,
    title: "پروفایل",
    url: "/profile",
    exactMatch: false,
    icon: <MenuBookIcon />,
  },
  {
    id: 23,
    title: "کتاب های من",
    url: "/mybook",
    exactMatch: false,
    icon: <MenuBookIcon />,
  },
  {
    id: 24,
    title: "نوشته های من",
    url: "/mynote",
    exactMatch: false,
    icon: <NoteIcon />,
  },
  {
    id: 25,
    title: "مقاله های من",
    url: "/myblog",
    exactMatch: false,
    icon: <SpeakerNotesIcon />,
  },
  {
    id: 26,
    title: "کیف پول",
    url: "/wallet",
    exactMatch: false,
    icon: <CreditCardIcon />,
  },
];

// TODO: last book

const DrawerMenu = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <div>
          <List>
            <ListItem>
              <ListItemText primary="منو" className="menu-title" />
            </ListItem>
          </List>
          <Divider />
          <List>
            {main_menu.map((menu) => (
              <ListItemLink
                key={menu.id}
                icon={menu.icon}
                primary={menu.title}
                to={menu.url}
                enable={true}
                exactMatch={menu.exactMatch}
              />
            ))}
          </List>
          <Divider />
          <List>
            {admin_menu.map((menu) => (
              <ListItemLink
                key={menu.id}
                icon={menu.icon}
                primary={menu.title}
                to={menu.url}
                enable={context.admin.isAuthenticated}
                exactMatch={menu.exactMatch}
              />
            ))}
          </List>

          <ReadingBookMenu />
          <Divider />

          {context.admin.isAuthenticated ? (
            <List>
              <ListItemLink
                icon={<InboxIcon />}
                primary="خروج"
                to="/logout"
                enable={true}
                exactMatch={false}
              />
            </List>
          ) : (
            <List>
              <ListItemLink
                icon={<PersonIcon />}
                primary="ورود"
                to="/login"
                enable={true}
                exactMatch={false}
              />
              <ListItemLink
                icon={<PersonAddIcon />}
                primary="عضویت"
                to="/register"
                enable={true}
                exactMatch={false}
              />
            </List>
          )}
        </div>
      )}
    </Context.Consumer>
  );
};

export default DrawerMenu;
