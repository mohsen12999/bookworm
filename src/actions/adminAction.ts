import { Dispatch } from "redux";
import { AdminActionType, AppActionType } from "../constants/actionTypes";

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

export const updatingProfile = (data: FormData) => (dispatch: Dispatch) => {
  // loading
  dispatch({
    type: AppActionType.START_LOADING,
  });

  // TODO: Sending

  // result
  const result: boolean = Math.random() > 0.5;
  dispatch({
    type: AppActionType.STOP_LOADING_AND_MESSAGE,
    payload: {
      msg: result
        ? "پروفایل با موفقیت بروزرسانی شد."
        : "اشکال در بروزرسانی پروفایل",
    },
  });

  if (result) {
    dispatch({
      type: AdminActionType.SUCCESS_UPDATE_PROFILE,
      payload: { data: "" },
    });
  } else {
    dispatch({
      type: AdminActionType.FAILED_UPDATE_PROFILE,
      payload: { error: "" },
    });
  }
};
