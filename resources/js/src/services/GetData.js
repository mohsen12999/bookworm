import axios from "axios";
import { books, articles, genres, authors, subjects, chapters } from "./data";

const GET_PUBLIC_DATA_URL = "/api/get_data";
const GET_PRIVATE_DATA_URL = "/api/private_data";

const TOKEN = "token";

export const GetData = async () => {
    fakeFillLocalStorage();

    const publicData = await getPublicData();
    publicData["user"] = await getPrivateData();
};

const getPublicData = async () => {
    try {
        const response = await axios.get(GET_PUBLIC_DATA_URL);
        const appData = await response.json();
        SaveToLocalStorage(appData);

        console.log("appData", appData);

        return appData;
    } catch (error) {
        console.log("error:   ", error);

        return localStorage.getItem("appData")
            ? JSON.parse(localStorage.getItem("appData"))
            : {
                  user: { isAuthenticated: false },
                  genres: [],
                  books: [],
                  chapters: [],
                  posts: [],
                  subjects: [],
                  authors: []
              };
    }
};

const getPrivateData = async () => {
    const token = localStorage.getItem(TOKEN);
    if (!token) {
        return { isAuthenticated: false };
    }
    try {
        const response = await axios.post(
            GET_PRIVATE_DATA_URL,
            {},
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
        );
        publicData["user"] = await response.json();
    } catch (error) {
        return { isAuthenticated: false };
    }
};

export const RemoveToken = () => {
    localStorage.removeItem(TOKEN);
};

export const SaveToLocalStorage = appData => {
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
            lastChapterId: 103
        },
        genres: genres,
        books: books,
        chapters: chapters,
        subjects: subjects,
        posts: articles,
        authors: authors
    };

    localStorage.getItem("appData") ?? SaveToLocalStorage(appData);
};
