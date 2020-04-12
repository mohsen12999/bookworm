import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import BookIcon from "@material-ui/icons/Book";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Tooltip from "@material-ui/core/Tooltip";
import { Link, useRouteMatch } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";
import { getBook, getBookChapters } from "../services/data";

import "./ReadingBookMenu.css";

const SubMenuListItemLink = (props) => {
  const { title, book_id, chapter_id, enable } = props;
  const dest = chapter_id
    ? "/read/" + book_id + "/" + chapter_id
    : "/book/" + book_id;
  const match = useRouteMatch({ path: dest, exact: false });

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <Link ref={ref} to={dest} {...linkProps} />
      )),
    [book_id, chapter_id]
  );
  return (
    <Tooltip title={"خواندن " + title} aria-label={"خواندن " + title}>
      <ListItem
        component={renderLink}
        className={"menu-item sub-menu" + (match ? " active-link" : "")}
        button
      >
        <ListItemIcon className="menu-item-icon">
          {enable ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </ListItemIcon>
        <ListItemText className="menu-item-text" primary={title} />
      </ListItem>
    </Tooltip>
  );
};

const ReadingBookMenu = (props) => {
  const [openList, setOpenList] = React.useState(true);
  const handleClickOpenList = () => {
    setOpenList(!openList);
  };

  return (
    <AuthContext.Consumer>
      {(context) => {
        if (
          !context.isAuthenticated ||
          context.lastBookId === undefined ||
          context.lastBookId == null
        ) {
          return <React.Fragment></React.Fragment>;
        }

        const book = getBook(context.lastBookId);
        const chapters = getBookChapters(context.lastBookId);
        return (
          <React.Fragment>
            <Divider />

            <ListItem
              className="menu-item"
              button
              onClick={handleClickOpenList}
            >
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <ListItemText className="menu-item-text" primary={book.title} />
              {openList ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openList} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <SubMenuListItemLink title="فهرست" book_id={book.id} />
                {chapters.map((chapter) => (
                  <SubMenuListItemLink
                    key={chapter.id}
                    title={chapter.title}
                    book_id={book.id}
                    chapter_id={chapter.id}
                    enable={Number(context.lastChapterId) === chapter.id}
                  />
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default ReadingBookMenu;
