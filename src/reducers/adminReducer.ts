import { IAdminState } from "../types/adminType";
import { adminInitialState } from "../constants/adminState";
import { IAdminAction, AdminActionType } from "../constants/actionTypes";

const AdminReducer: any = (
  state: IAdminState = adminInitialState,
  action: IAdminAction
) => {
  switch (action.type) {
    case AdminActionType.SET_LAST_BOOK_READING:
      return {
        ...state,
        lastBookId: action.payload?.book_id,
        lastChapterId: action.payload?.chapter_id,
      };

    case AdminActionType.SUCCESS_LOGIN:
      return state;
    case AdminActionType.FAILED_LOGIN:
      return state;

    case AdminActionType.SUCCESS_REGISTER:
      return state;
    case AdminActionType.FAILED_REGISTER:
      return state;

    case AdminActionType.SUCCESS_UPDATE_PROFILE:
      return state;
    case AdminActionType.FAILED_UPDATE_PROFILE:
      return state;

    case AdminActionType.SUCCESS_SAVING_BOOK:
      return state;
    case AdminActionType.FAILED_SAVING_BOOK:
      return state;

    case AdminActionType.SUCCESS_SAVING_POST:
      return state;
    case AdminActionType.FAILED_SAVING_POST:
      return state;

    case AdminActionType.SUCCESS_SAVING_CHAPTER:
      return state;
    case AdminActionType.FAILED_SAVING_CHAPTER:
      return state;

    case AdminActionType.SUCCESS_DELETING_BOOK:
      return state;
    case AdminActionType.FAILED_DELETING_BOOK:
      return state;

    case AdminActionType.SUCCESS_DELETING_POST:
      return state;
    case AdminActionType.FAILED_DELETING_POST:
      return state;

    case AdminActionType.SUCCESS_DELETING_CHAPTER:
      return state;
    case AdminActionType.FAILED_DELETING_CHAPTER:
      return state;

    default:
      return state;
  }
};

export default AdminReducer;
