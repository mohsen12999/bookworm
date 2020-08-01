import React from "react";
import { connect } from "react-redux";

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

import { HomePages, AuthPages, AdminPages } from "../constants/pages";
import {IAdminState} from "../types/adminType";

interface IMenuItem {
  id: number;
  title: string;
  url: string;
  exactMatch: boolean;
  icon: JSX.Element;
}

const main_menu: IMenuItem[] = [
  {
    id: 11,
    title: "صفحه اصلی",
    url: "/"+HomePages.INDEX,
    exactMatch: true,
    icon: <ViewStreamIcon />,
  },
  {
    id: 12,
    title: "لیست کتاب ها",
    url: "/"+HomePages.BOOKS,
    exactMatch: false,
    icon: <LibraryBooksIcon />,
  },
  {
    id: 13,
    title: "لیست مقالات",
    url: "/"+HomePages.POSTS,
    exactMatch: false,
    icon: <CollectionsBookmarkIcon />,
  },
  {
    id: 19,
    title: "درباره ما",
    url: "/"+HomePages.ABOUT,
    exactMatch: false,
    icon: <StreetviewIcon />,
  },
];

const admin_menu = [
  {
    id: 21,
    title: "داشبورد",
    url: "/"+AdminPages.DASHBOARD,
    exactMatch: false,
    icon: <DashboardIcon />,
  },
  {
    id: 22,
    title: "پروفایل",
    url: "/"+AdminPages.PROFILE,
    exactMatch: false,
    icon: <MenuBookIcon />,
  },
  {
    id: 23,
    title: "کتاب های من",
    url: "/"+AdminPages.MY_Library,
    exactMatch: false,
    icon: <MenuBookIcon />,
  },
  {
    id: 24,
    title: "نوشته های من",
    url: "/"+AdminPages.MY_BOOKS,
    exactMatch: false,
    icon: <NoteIcon />,
  },
  {
    id: 25,
    title: "مقاله های من",
    url: "/"+AdminPages.MY_POSTS,
    exactMatch: false,
    icon: <SpeakerNotesIcon />,
  },
  {
    id: 26,
    title: "کیف پول",
    url: "/"+AdminPages.WALLET,
    exactMatch: false,
    icon: <CreditCardIcon />,
  },
];

// TODO: last book

interface IDrawerMenuProps {
  loggedIn: boolean;
}

const DrawerMenu = (props:IDrawerMenuProps) => (
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
          enable={props.loggedIn}
          exactMatch={menu.exactMatch}
        />
      ))}
    </List>

    <ReadingBookMenu />
    <Divider />

    {props.loggedIn ? (
      <List>
        <ListItemLink
          icon={<InboxIcon />}
          primary="خروج"
	  to={"/"+AuthPages.LOGOUT}
          enable={true}
          exactMatch={false}
        />
      </List>
    ) : (
      <List>
        <ListItemLink
          icon={<PersonIcon />}
          primary="ورود"
          to={"/"+AuthPages.LOGIN}
          enable={true}
          exactMatch={false}
        />
        <ListItemLink
          icon={<PersonAddIcon />}
          primary="عضویت"
          to={"/"+AuthPages.REGISTER}
          enable={true}
          exactMatch={false}
        />
      </List>
    )}
  </div>
);

const mapStateToProps = (State: { admin: IAdminState }) => ({
  loggedIn: State.admin.loggedIn,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenu);