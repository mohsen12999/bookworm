import axios from "axios";
import { AddToken, GetToken } from "./LocalStorage";

const PROFILE_URL = "/api/profile";

//export const FetchUpdateProfile = async (file, name, email, mobile) => {
export const FetchUpdateProfile = async (data) => {
  console.log(data);
  try {
    const response = await axios.post(
      PROFILE_URL,
      {
        data,
        // file,
        // name,
        // email,
        // mobile
      },
      {
        headers: {
          Authorization: "Bearer " + GetToken(),
        },
      }
    );
    const responseData = response.data;
    AddToken(responseData.token);

    return { ...responseData, success: true };
  } catch (error) {
    console.log("error in FetchUpdateProfile", error);
    return { success: false, error };
  }
};
