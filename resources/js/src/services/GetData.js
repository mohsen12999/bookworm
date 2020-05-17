import axios from "axios";
import {
  books,
  articles,
  genres,
  authors,
  subjects,
  chapters,
} from "./fakeData";
import {
  AddToken,
  GetToken,
  SavePublicDataToLocalStorage,
  SavePrivateDataToLocalStorage,
  GetPublicDataFromFromLocalStorage,
  GetPrivateDataFromFromLocalStorage,
} from "./LocalStorage";

const GET_PUBLIC_DATA_URL = "/api/get_data";
const GET_PRIVATE_DATA_URL = "/api/private_data";

export const GetData = async () => {
  //fakeFillLocalStorage();

  const publicData = await getPublicData();
  const privateData = await getPrivateData();
  if (privateData) {
    //publicData["user"] = privateData["user"];
    publicData["chapters"] = privateData["chapters"];
    return { publicData: publicData, privateData: privateData["user"] };
  }
  return { publicData: publicData, privateData: { isAuthenticated: false } };
};

const getPublicData = async () => {
  try {
    const response = await axios.get(GET_PUBLIC_DATA_URL);
    const appData = response.data;
    SavePublicDataToLocalStorage(appData);

    return appData;
  } catch (error) {
    console.log("error:  getPublicData - ", error);

    return localStorage.getItem("appData")
      ? JSON.parse(localStorage.getItem("appData"))
      : {
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
  const token = GetToken();
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
    const data = response.data;
    AddToken(data.token);

    return data;
  } catch (error) {
    console.log("error:  getPrivateData -  ", error);
    return undefined;
  }
};

const fakeFillLocalStorage = () => {
  if (
    !process ||
    !process.env ||
    !process.env.NODE_ENV ||
    process.env.NODE_ENV !== "development"
  ) {
    return { success: false };
  }

  const appData = {
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

  const adminData = {
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
  };

  GetPublicDataFromFromLocalStorage() ?? SavePublicDataToLocalStorage(appData);
  GetPrivateDataFromFromLocalStorage() ??
    SavePrivateDataToLocalStorage(adminData);
};
