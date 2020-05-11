import axios from "axios";
import { books, articles, genres, authors, subjects, chapters } from "./data";

const GET_DATA_URL = "/api/get_data"; // TODO: renew Token

const TOKEN = "token";

export const GetData = async () => {
  const token = localStorage.getItem(TOKEN) ?? "";

  fakeFillLocalStorage();

  try {
    const response = await axios.post(GET_DATA_URL, { token: token });
    const appData = await response.json();
    SaveToLocalStorage(appData);
    return appData;
  } catch (error) {
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
      username: "محسن",
      mobile: "09113923310",
      boughtBooks: [1, 7, 18],
      writtenBooks: [],
      posts: [],
      wallet: 5000,
      lastBookId: 7,
      lastChapterId: 103,
      avatar: "/img/user/default-profile.jpg",
    },
    genres: genres,
    books: books,
    chapters: chapters,
    subjects: subjects,
    posts: articles,
    authors: authors,
  };

  localStorage.getItem("appData") ?? SaveToLocalStorage(appData);
};

/*
{
    isAuthenticated: true,
    token: "",
    username: "محسن",
    mobile: "09113923310",
    boughtBooks: [1, 7, 18],
    writtenBooks: [],
    posts: [],
    wallet: 5000,
    lastBookId: 7,
    lastChapterId: 103,
    avatar: "/img/user/default-profile.jpg",
  }
*/
