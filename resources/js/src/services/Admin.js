import axios from "axios";
import { AddToken, GetToken } from "./LocalStorage";

const PROFILE_URL = "/api/profile";
const NOTE_URL = "/api/note";

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

export const FetchDeleteNote = async noteId => {
    try {
        const response = await axios.delete(NOTE_URL + "/" + noteId, {
            headers: {
                Authorization: "Bearer " + GetToken()
            }
        });

        const responseData = response.data;
        AddToken(responseData.token);

        return { ...responseData, success: true };
    } catch (error) {
        console.log("error in FetchDeleteNote", error);
        return { success: false, error };
    }
};
