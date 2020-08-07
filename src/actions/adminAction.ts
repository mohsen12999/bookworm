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

export const tryDeletingMyBook = (id: number) => (dispatch: Dispatch) => {
  // loading
  dispatch({
    type: AppActionType.START_LOADING,
  });

  // TODO: send deleting request

  // result
  const result: boolean = Math.random() > 0.5;
  dispatch({
    type: AppActionType.STOP_LOADING_AND_MESSAGE,
    payload: {
      msg: result ? "این نوشته حذف شد" : "خطا در حذف نوشته",
    },
  });

  if (result) {
    dispatch({
      type: AdminActionType.SUCCESS_DELETING_BOOK,
      payload: { data: "" },
    });
  } else {
    dispatch({
      type: AdminActionType.FAILED_DELETING_BOOK,
      payload: { error: "" },
    });
  }
};

export const tryDeletingMyPost = (id: number) => (dispatch: Dispatch) => {
  // loading
  dispatch({
    type: AppActionType.START_LOADING,
  });

  // TODO: send deleting request

  // result
  const result: boolean = Math.random() > 0.5;
  dispatch({
    type: AppActionType.STOP_LOADING_AND_MESSAGE,
    payload: {
      msg: result ? "این مقاله حذف شد" : "خطا در حذف مقاله",
    },
  });

  if (result) {
    dispatch({
      type: AdminActionType.SUCCESS_DELETING_POST,
      payload: { data: "" },
    });
  } else {
    dispatch({
      type: AdminActionType.FAILED_DELETING_POST,
      payload: { error: "" },
    });
  }
};

export const tryDeletingMyChapter = (id: number) => (dispatch: Dispatch) => {
  // loading
  dispatch({
    type: AppActionType.START_LOADING,
  });

  // TODO: send deleting request

  // result
  const result: boolean = Math.random() > 0.5;
  dispatch({
    type: AppActionType.STOP_LOADING_AND_MESSAGE,
    payload: {
      msg: result ? "این فصل حذف شد" : "خطا در حذف فصل",
    },
  });

  if (result) {
    dispatch({
      type: AdminActionType.SUCCESS_DELETING_CHAPTER,
      payload: { data: "" },
    });
  } else {
    dispatch({
      type: AdminActionType.FAILED_DELETING_CHAPTER,
      payload: { error: "" },
    });
  }
};

export const savingBook = (data: FormData) => (dispatch: Dispatch) => {
  // loading
  dispatch({
    type: AppActionType.START_LOADING,
  });

  // TODO: send deleting request

  // result
  const result: boolean = Math.random() > 0.5;
  dispatch({
    type: AppActionType.STOP_LOADING_AND_MESSAGE,
    payload: {
      msg: result ? "نوشته با موفقیت ذخیره شد." : "اشکال در ذخیره نوشته",
    },
  });

  if (result) {
    dispatch({
      type: AdminActionType.SUCCESS_SAVING_BOOK,
      payload: { data: "" },
    });
  } else {
    dispatch({
      type: AdminActionType.FAILED_SAVING_BOOK,
      payload: { error: "" },
    });
  }

  return result;
};

export const savingPost = (data: FormData) => (dispatch: Dispatch) => {
  // loading
  dispatch({
    type: AppActionType.START_LOADING,
  });

  // TODO: send deleting request

  // result
  const result: boolean = Math.random() > 0.5;
  dispatch({
    type: AppActionType.STOP_LOADING_AND_MESSAGE,
    payload: {
      msg: result ? "مقاله با موفقیت ذخیره شد." : "اشکال در ذخیره مقاله",
    },
  });

  if (result) {
    dispatch({
      type: AdminActionType.SUCCESS_SAVING_POST,
      payload: { data: "" },
    });
  } else {
    dispatch({
      type: AdminActionType.FAILED_SAVING_POST,
      payload: { error: "" },
    });
  }

  return result;
};

export const savingChapter = (data: FormData) => (dispatch: Dispatch) => {
  // loading
  dispatch({
    type: AppActionType.START_LOADING,
  });

  // TODO: send deleting request

  // result
  const result: boolean = Math.random() > 0.5;
  dispatch({
    type: AppActionType.STOP_LOADING_AND_MESSAGE,
    payload: {
      msg: result ? "فصل با موفقیت ذخیره شد." : "اشکال در ذخیره فصل",
    },
  });

  if (result) {
    dispatch({
      type: AdminActionType.SUCCESS_SAVING_CHAPTER,
      payload: { data: "" },
    });
  } else {
    dispatch({
      type: AdminActionType.FAILED_SAVING_CHAPTER,
      payload: { error: "" },
    });
  }

  return result;
};
