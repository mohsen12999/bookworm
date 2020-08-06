import axios from "axios";
import { AdminUrl } from "../constants/apiUrl";
import { AddToken, GetToken } from "./localStorage";

export const FetchUpdateProfile = async (data: string) => {
  try {
    const response = await axios.post(AdminUrl.PROFILE_URL, data, {
      headers: {
        Authorization: "Bearer " + GetToken(),
        "Content-type":
          "multipart/form-data; charset=utf-8; boundary=" +
          Math.random().toString().substr(2),
        contentType: false,
        processData: false,
      },
    });
    const responseData = response.data;
    AddToken(responseData.token);

    return { ...responseData, success: true };
  } catch (error) {
    console.log("error in FetchUpdateProfile", error);
    return { success: false, error };
  }
};

export const FetchDeleteNote = async (noteId: number) => {
  try {
    const response = await axios.delete(AdminUrl.NOTE_URL + "/" + noteId, {
      headers: {
        Authorization: "Bearer " + GetToken(),
      },
    });

    const responseData = response.data;
    AddToken(responseData.token);

    return { ...responseData, success: true };
  } catch (error) {
    console.log("error in FetchDeleteNote", error);
    return { success: false, error };
  }
};

export const FetchDeletePost = async (postId: number) => {
  try {
    const response = await axios.delete(AdminUrl.BLOG_URL + "/" + postId, {
      headers: {
        Authorization: "Bearer " + GetToken(),
      },
    });

    const responseData = response.data;
    AddToken(responseData.token);

    return { ...responseData, success: true };
  } catch (error) {
    console.log("error in FetchDeleteNote", error);
    return { success: false, error };
  }
};

export const FetchDeleteChapter = async (postId: number) => {
  try {
    const response = await axios.delete(AdminUrl.CHAPTER_URL + "/" + postId, {
      headers: {
        Authorization: "Bearer " + GetToken(),
      },
    });

    const responseData = response.data;
    AddToken(responseData.token);

    return { ...responseData, success: true };
  } catch (error) {
    console.log("error in FetchDeleteNote", error);
    return { success: false, error };
  }
};

export const FetchWritePost = async (data: string) => {
  try {
    const response = await axios.post(AdminUrl.BLOG_URL, data, {
      headers: {
        Authorization: "Bearer " + GetToken(),
        "Content-type":
          "multipart/form-data; charset=utf-8; boundary=" +
          Math.random().toString().substr(2),
        contentType: false,
        processData: false,
      },
    });
    const responseData = response.data;
    AddToken(responseData.token);

    return { ...responseData, success: true };
  } catch (error) {
    console.log("error in FetchUpdateProfile", error);
    return { success: false, error };
  }
};

export const FetchWriteBook = async (data: string) => {
  try {
    const response = await axios.post(AdminUrl.NOTE_URL, data, {
      headers: {
        Authorization: "Bearer " + GetToken(),
        "Content-type":
          "multipart/form-data; charset=utf-8; boundary=" +
          Math.random().toString().substr(2),
        contentType: false,
        processData: false,
      },
    });
    const responseData = response.data;
    AddToken(responseData.token);

    return { ...responseData, success: true };
  } catch (error) {
    console.log("error in FetchUpdateProfile", error);
    return { success: false, error };
  }
};

export const FetchWriteChapter = async (data: string) => {
  try {
    const response = await axios.post(AdminUrl.CHAPTER_URL, data, {
      headers: {
        Authorization: "Bearer " + GetToken(),
        "Content-type":
          "multipart/form-data; charset=utf-8; boundary=" +
          Math.random().toString().substr(2),
        contentType: false,
        processData: false,
      },
    });
    const responseData = response.data;
    AddToken(responseData.token);

    return { ...responseData, success: true };
  } catch (error) {
    console.log("error in FetchUpdateProfile", error);
    return { success: false, error };
  }
};
