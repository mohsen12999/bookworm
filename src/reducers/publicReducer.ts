import { IPublicState } from "../types/publicTypes";
import { publicInitialState } from "../constants/publicState";

const PublicReducer: any = (
  state: IPublicState = publicInitialState,
  action: any
) => {
  return state;
};

export default PublicReducer;
