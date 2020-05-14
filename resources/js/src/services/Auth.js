import axios from "axios";

const LOGIN_URL = "/api/login";
const REG_URL = "/api/register";

export const FetchLogin = async (user, password) => {
    try {
        const response = await axios.post(LOGIN_URL);
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
    password_confirmation
) => {
    try {
        const response = await axios.post(REG_URL, {
            user,
            email,
            password,
            password_confirmation
        });
        const data = response.data;

        return { ...data, success: true };
    } catch (error) {
        return { success: false, error };
    }
};
