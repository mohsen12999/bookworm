import { LocalStorageKind } from "../constants/localStorage";
import { IPublicState } from "../types/publicTypes";
import { IAdminState } from "../types/adminType";

export const GetToken = () => localStorage.getItem(LocalStorageKind.TOKEN);

export const AddToken = (token: string) => {
  if (token) localStorage.setItem(LocalStorageKind.TOKEN, token);
};

export const RemoveToken = () => {
  localStorage.removeItem(LocalStorageKind.TOKEN);
};

export const SavePublicDataToLocalStorage = (appData: IPublicState) => {
  localStorage.setItem(LocalStorageKind.PUBLIC_DATA, JSON.stringify(appData));
};

export const SavePrivateDataToLocalStorage = (appData: IAdminState) => {
  localStorage.setItem(LocalStorageKind.PRIVATE_DATA, JSON.stringify(appData));
};

export const RemovePrivateDataFromLocalStorage = () => {
  localStorage.removeItem(LocalStorageKind.PRIVATE_DATA);
};

export const GetPublicDataFromFromLocalStorage = () =>
  localStorage.getItem(LocalStorageKind.PUBLIC_DATA);

export const GetPrivateDataFromFromLocalStorage = () =>
  localStorage.getItem(LocalStorageKind.PRIVATE_DATA);
