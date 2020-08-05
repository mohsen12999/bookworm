import { IAppState } from "../types/appType";

export const appInitialState: IAppState = {
  loading: false,
  snackbar: { open: false, message: "", time: 6000 },
};
