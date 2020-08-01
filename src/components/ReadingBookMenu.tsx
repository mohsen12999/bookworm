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

import {IBook,IChapter} from "../types/publicTypes.ts"
import { IAdminState } from "../types/adminType";
import { IPublicState } from "../types/publicTypes.ts"

// import { Context } from "../contexts/Context";
//import { getBook, getBookChapters } from "../services/data";

import "./ReadingBookMenu.css";

interface ISubMenuListItemLinkProps{
	title:string; book_id:number; chapter_id:number; enable:boolean;
}

const SubMenuListItemLink = ({ title, book_id, chapter_id, enable }:ISubMenuListItemLinkProps) => {
	//  const { title, book_id, chapter_id, enable } = props;
  const dest = chapter_id
    ? "/read/" + book_id + "/" + chapter_id
    : "/book/" + book_id;
  const match = useRouteMatch({ path: dest, exact: false });

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <Link ref={ref} to={dest} {...linkProps} />
      )),
    [dest]
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

interface IReadingBookProps{
	loggedIn:boolean;
	lastBookId?:number;
	lastChapterId?: number;
	books: IBooks[];
	chapters: IChapter[];
}


const ReadingBookMenu = ({loggedIn,lastBookId,lastChapterId}:IReadingBookProps) => {
  const [openList, setOpenList] = React.useState(true);
  const handleClickOpenList = () => {
    setOpenList(!openList);
  };

  if(!loggedIn || !lastBookId || !lastChapterId){
	return  <React.Fragment></React.Fragment>;
  }


  const lastBook = books.find((bk)=> bk.id==lastBookId);
  const lastBookChapters = chapters.filter((ch)=>ch.book_id==lastBookId) 

        if (!book || !chapters) {
          return <React.Fragment></React.Fragment>;
        }

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
              <ListItemText className="menu-item-text" primary={lastBook.title} />
              {openList ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openList} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <SubMenuListItemLink title="فهرست" book_id={lastBook.id} />
                {
                  lastBookChapters.map((chapter) => (
                    <SubMenuListItemLink
                      key={chapter.id}
                      title={chapter.title}
                      book_id={lastBook.id}
                      chapter_id={chapter.id}
                      enable={
                        lastChapterId === chapter.id
                      }
                    />
                  ))}
              </List>
            </Collapse>
          </React.Fragment>
        );
                    }
const mapStateToProps = (State: { admin: IAdminState, public: IPublicState }) => ({
  loggedIn: State.admin.loggedIn,
         lastBookId?:State.admin.lastBookId;
	 lastChapterId?: State.admin.lastChapterId;

           books: State.public.books;
           chapters: State.public.chapters;
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ReadingBookMenu);
