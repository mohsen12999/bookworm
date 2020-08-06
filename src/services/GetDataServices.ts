import axios from "axios";
import { GetDateUrl } from "../constants/apiUrl";
import {
  GetToken,
  SavePublicDataToLocalStorage,
  AddToken,
} from "./localStorage";

export const GetData = async () => {
  const publicData = await getPublicData();
  const privateData = await getPrivateData();

  if (privateData) {
    //publicData["user"] = privateData["user"];
    publicData["chapters"] = privateData["chapters"];
    return { publicData: publicData, privateData: privateData["user"] };
  }
  return { publicData: publicData, privateData: { isAuthenticated: false } };
};

const getPublicData = async () => {
  try {
    const response = await axios.get(GetDateUrl.GET_PUBLIC_DATA_URL);
    const appData = response.data;
    SavePublicDataToLocalStorage(appData);

    return appData;
  } catch (error) {
    console.log("error:  getPublicData - ", error);
    return null;
  }
};

const getPrivateData = async () => {
  const token = GetToken();
  if (!token) {
    return undefined;
  }
  try {
    const response = await axios.post(
      GetDateUrl.GET_PRIVATE_DATA_URL,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const data = response.data;
    AddToken(data.token);

    return data;
  } catch (error) {
    console.log("error:  getPrivateData -  ", error);
    return undefined;
  }
};
