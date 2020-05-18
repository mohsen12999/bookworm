import axios from "axios";
import { AddToken, GetToken } from "./LocalStorage";

const PROFILE_URL = "/api/profile";

export const FetchUpdateProfile = async data => {
    try {
        const response = await axios.post(PROFILE_URL, data, {
            headers: {
                Authorization: "Bearer " + GetToken(),
                "Content-type":
                    "multipart/form-data; charset=utf-8; boundary=" +
                    Math.random()
                        .toString()
                        .substr(2),
                contentType: false,
                processData: false
            }
        });
        const responseData = response.data;
        AddToken(responseData.token);

        return { ...responseData, success: true };
    } catch (error) {
        console.log("error in FetchUpdateProfile", error);
        return { success: false, error };
    }
};
