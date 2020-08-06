import axios from "axios";
import { AuthUrl } from "../constants/apiUrl";
import { AddToken } from "./localStorage";

export const FetchLogin = async (email: string, password: string) => {
  try {
    const response = await axios.post(AuthUrl.LOGIN_URL, { email, password });
    const data = response.data;
    AddToken(data.token);

    return { ...data, success: true };
  } catch (error) {
    // return await fakeLogin();
    return { success: false, error };
  }
};

export const FetchRegister = async (
  name: string,
  email: string,
  password: string,
  password_confirmation: string
) => {
  try {
    const response = await axios.post(AuthUrl.REG_URL, {
      name,
      email,
      password,
      password_confirmation,
    });
    const data = response.data;

    return { ...data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
