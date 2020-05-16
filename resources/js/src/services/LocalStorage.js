const TOKEN = "token";
const PUBLIC_DATA = "publicData";
const PRIVATE_DATA = "privateData";

export const GetToken = () => localStorage.getItem(TOKEN);

export const AddToken = token => {
    if (token) localStorage.setItem(TOKEN, token);
};

export const RemoveToken = () => {
    localStorage.removeItem(TOKEN);
};

export const SavePublicDataToLocalStorage = appData => {
    localStorage.setItem(PUBLIC_DATA, JSON.stringify(appData));
};

export const SavePrivateDataToLocalStorage = appData => {
    localStorage.setItem(PRIVATE_DATA, JSON.stringify(appData));
};

export const RemovePrivateDataFromLocalStorage = () => {
    localStorage.removeItem(PRIVATE_DATA);
};

export const GetPublicDataFromFromLocalStorage = () =>
    localStorage.getItem(PUBLIC_DATA);

export const GetPrivateDataFromFromLocalStorage = () =>
    localStorage.getItem(PRIVATE_DATA);
