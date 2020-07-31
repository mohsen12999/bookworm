import { Reducer } from "redux";
import { IAdminState } from "../types/adminType";
import { adminInitialState } from "../constants/adminState";

const AdminReducer: any = (
  state: IAdminState = adminInitialState,
  action: any
) => {
  return state;
};

export default AdminReducer;
