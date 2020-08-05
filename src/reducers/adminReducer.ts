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

    default:
      return state;
  }
};

export default AdminReducer;
