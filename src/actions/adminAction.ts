import { Dispatch } from "redux";
import { AdminActionType } from "../constants/actionTypes";

export const SetLastBookReading = (
  book_id: number | string,
  chapter_id: number | string
) => (dispatch: Dispatch) => {
  dispatch({
    type: AdminActionType.SET_LAST_BOOK_READING,
    payload: {
      book_id: Number(book_id),
      chapter_id: Number(chapter_id),
    },
  });
};
