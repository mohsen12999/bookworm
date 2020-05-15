import axios from "axios";

const LOGIN_URL = "/api/login";
const REG_URL = "/api/register";

export const FetchLogin = async (email, password) => {
    try {
        const response = await axios.post(LOGIN_URL, { email, password });
        const data = response.data;

        return { ...data, success: true };
    } catch (error) {
        return { success: false, error };
    }
};

export const FetchRegister = async (
    name,
    email,
    password,
    password_confirmation
) => {
    try {
        const response = await axios.post(REG_URL, {
            name,
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
