import axios from "axios";
import {
  books,
  articles,
  genres,
  authors,
  subjects,
  chapters,
} from "./fakeData";

const GET_PUBLIC_DATA_URL = "/api/get_data";
const GET_PRIVATE_DATA_URL = "/api/private_data";

const TOKEN = "token";

export const GetData = async () => {
  fakeFillLocalStorage();

  const publicData = await getPublicData();
  const privateData = await getPrivateData();
  if (privateData) {
    publicData["user"] = privateData["user"];
    publicData["chapter"] = privateData["chapter"];
  } else {
    publicData["user"] = { isAuthenticated: false };
  }

  return publicData;
};

const getPublicData = async () => {
  try {
    const response = await axios.get(GET_PUBLIC_DATA_URL);
    const appData = response.data;
    SaveToLocalStorage(appData);

    return appData;
  } catch (error) {
    console.log("error:  getPublicData - ", error);

    return localStorage.getItem("appData")
      ? JSON.parse(localStorage.getItem("appData"))
      : {
          user: { isAuthenticated: false },
          genres: [],
          books: [],
          chapters: [],
          posts: [],
          subjects: [],
          authors: [],
        };
  }
};

const getPrivateData = async () => {
  const token = localStorage.getItem(TOKEN);
  if (!token) {
    return undefined;
  }
  try {
    const response = await axios.post(
      GET_PRIVATE_DATA_URL,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("error:  getPrivateData -  ", error);
    return undefined;
  }
};

export const AddToken = (token) => {
  localStorage.setItem(TOKEN, token);
};

export const RemoveToken = () => {
  localStorage.removeItem(TOKEN);
};

export const SaveToLocalStorage = (appData) => {
  localStorage.setItem("appData", JSON.stringify(appData));
};

const fakeFillLocalStorage = () => {
  const appData = {
    user: {
      isAuthenticated: true,
      name: "محسن",
      email: "mohsen@gmail.com",
      mobile: "09113923310",
      avatar: "/images/user/default-profile.jpg",
      wallet: 5000,
      boughtBooks: [1, 7, 18],
      writtenBooks: [],
      writtenPosts: [],
      lastBookId: 7,
      lastChapterId: 103,
    },
    genres: genres,
    books: books,
    chapters: chapters,
    subjects: subjects,
    posts: articles,
    authors: authors,
    // snackbar: {
    //   open: true,
    //   time: 120000,
    //   //severity: "success",
    //   message: "موفق بود و بس",
    // },
  };

  localStorage.getItem("appData") ?? SaveToLocalStorage(appData);
};
