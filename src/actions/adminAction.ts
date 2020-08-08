import { Dispatch } from "redux";
import { AdminActionType, AppActionType } from "../constants/actionTypes";
import {
  FetchUpdateProfile,
  FetchDeleteNote,
  FetchDeletePost,
  FetchDeleteChapter,
  FetchWriteBook,
  FetchWritePost,
  FetchWriteChapter,
} from "../services/AdminServices";

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

export const updatingProfile = (data: FormData) => async (
  dispatch: Dispatch
) => {
  // loading
  dispatch({
    type: AppActionType.START_LOADING,
  });

  // try to fetch
  const output = await FetchUpdateProfile(data);

  // result
  const result: boolean = output.success;
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
      payload: { data: output.data },
    });
  } else {
    dispatch({
      type: AdminActionType.FAILED_UPDATE_PROFILE,
      payload: { error: output.error },
    });
  }
};

export const tryDeletingMyBook = (id: number) => async (dispatch: Dispatch) => {
  // loading
  dispatch({
    type: AppActionType.START_LOADING,
  });

  // send deleting request
  const output = await FetchDeleteNote(id);

  // result
  const result: boolean = output.success;
  dispatch({
    type: AppActionType.STOP_LOADING_AND_MESSAGE,
    payload: {
      msg: result ? "این نوشته حذف شد" : "خطا در حذف نوشته",
    },
  });

  if (result) {
    dispatch({
      type: AdminActionType.SUCCESS_DELETING_BOOK,
      payload: { data: output.data },
    });
  } else {
    dispatch({
      type: AdminActionType.FAILED_DELETING_BOOK,
      payload: { error: output.error },
    });
  }
};

export const tryDeletingMyPost = (id: number) => async (dispatch: Dispatch) => {
  // loading
  dispatch({
    type: AppActionType.START_LOADING,
  });

  // send deleting request
  const output = await FetchDeletePost(id);

  // result
  const result: boolean = output.success;
  dispatch({
    type: AppActionType.STOP_LOADING_AND_MESSAGE,
    payload: {
      msg: result ? "این مقاله حذف شد" : "خطا در حذف مقاله",
    },
  });

  if (result) {
    dispatch({
      type: AdminActionType.SUCCESS_DELETING_POST,
      payload: { data: output.data },
    });
  } else {
    dispatch({
      type: AdminActionType.FAILED_DELETING_POST,
      payload: { error: output.error },
    });
  }
};

export const tryDeletingMyChapter = (id: number) => async (
  dispatch: Dispatch
) => {
  // loading
  dispatch({
    type: AppActionType.START_LOADING,
  });

  // send deleting request
  const output = await FetchDeleteChapter(id);

  // result
  const result: boolean = output.success;
  dispatch({
    type: AppActionType.STOP_LOADING_AND_MESSAGE,
    payload: {
      msg: result ? "این فصل حذف شد" : "خطا در حذف فصل",
    },
  });

  if (result) {
    dispatch({
      type: AdminActionType.SUCCESS_DELETING_CHAPTER,
      payload: { data: output.data },
    });
  } else {
    dispatch({
      type: AdminActionType.FAILED_DELETING_CHAPTER,
      payload: { error: output.error },
    });
  }
};

export const savingBook = (data: FormData) => async (dispatch: Dispatch) => {
  // loading
  dispatch({
    type: AppActionType.START_LOADING,
  });

  // TODO: send deleting request
  const output = await FetchWriteBook(data);

  // result
  const result: boolean = output.success;
  dispatch({
    type: AppActionType.STOP_LOADING_AND_MESSAGE,
    payload: {
      msg: result ? "نوشته با موفقیت ذخیره شد." : "اشکال در ذخیره نوشته",
    },
  });

  if (result) {
    dispatch({
      type: AdminActionType.SUCCESS_SAVING_BOOK,
      payload: { data: output.data },
    });
  } else {
    dispatch({
      type: AdminActionType.FAILED_SAVING_BOOK,
      payload: { error: output.error },
    });
  }

  return result;
};

export const savingPost = (data: FormData) => async (dispatch: Dispatch) => {
  // loading
  dispatch({
    type: AppActionType.START_LOADING,
  });

  // TODO: send deleting request
  const output = await FetchWritePost(data);

  // result
  const result: boolean = output.success;
  dispatch({
    type: AppActionType.STOP_LOADING_AND_MESSAGE,
    payload: {
      msg: result ? "مقاله با موفقیت ذخیره شد." : "اشکال در ذخیره مقاله",
    },
  });

  if (result) {
    dispatch({
      type: AdminActionType.SUCCESS_SAVING_POST,
      payload: { data: output.data },
    });
  } else {
    dispatch({
      type: AdminActionType.FAILED_SAVING_POST,
      payload: { error: output.error },
    });
  }

  return result;
};

export const savingChapter = (data: FormData) => async (dispatch: Dispatch) => {
  // loading
  dispatch({
    type: AppActionType.START_LOADING,
  });

  // send deleting request
  const output = await FetchWriteChapter(data);

  // result
  const result: boolean = output.success;
  dispatch({
    type: AppActionType.STOP_LOADING_AND_MESSAGE,
    payload: {
      msg: result ? "فصل با موفقیت ذخیره شد." : "اشکال در ذخیره فصل",
    },
  });

  if (result) {
    dispatch({
      type: AdminActionType.SUCCESS_SAVING_CHAPTER,
      payload: { data: output.data },
    });
  } else {
    dispatch({
      type: AdminActionType.FAILED_SAVING_CHAPTER,
      payload: { error: output.error },
    });
  }

  return result;
};
