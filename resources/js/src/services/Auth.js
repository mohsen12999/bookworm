import axios from "axios";

const LOGIN_URL = "/api/login";
const REG_URL = "/api/register";

export const FetchLogin = async (user, password) => {
  try {
    const response = await axios.get(LOGIN_URL);
    const data = response.data;

    return { ...data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

export const FetchRegister = async (
  user,
  email,
  password,
  confirm_password
) => {
  try {
    const response = await axios.get(REG_URL);
    const data = response.data;

    return { ...data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};
