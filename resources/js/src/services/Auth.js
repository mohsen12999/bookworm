import axios from "axios";

const LOGIN_URL = "/api/login";
const REG_URL = "/api/register";

export const FetchLogin = async (email, password) => {
  try {
    const response = await axios.post(LOGIN_URL, { email, password });
    const data = response.data;

    return { ...data, success: true };
  } catch (error) {
    if (
      process &&
      process.env &&
      process.env.NODE_ENV &&
      process.env.NODE_ENV === "development"
    ) {
      const fakeData = await fakeLogin();
      return fakeData;
    }

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
      password_confirmation,
    });
    const data = response.data;

    return { ...data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fakeLogin = async () => {
  console.log("fakeLogin");
  await sleep(1000);

  return {
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
    chapters: ["dfdf"],
    token: "sample token",
    success: true,
  };
};
