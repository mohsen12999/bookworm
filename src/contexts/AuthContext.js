import React, { createContext, useState } from "react";
import {
  GetData,
  AddToken,
  RemoveToken,
  SaveToLocalStorage,
} from "../services/GetData";
import { FetchLogin, FetchRegister } from "../services/Auth";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [contextValue, setContextValue] = useState();

  React.useEffect(() => {
    if (contextValue && contextValue.loading) return;
    setContextValue({ ...contextValue, loading: true });

    const fillContext = async () => {
      const appData = await GetData();
      setContextValue({ ...appData, loading: false });
    };

    fillContext();
  }, []);

  const Login = async (email, password) => {
    if (contextValue && contextValue.loading) return;
    setContextValue({ ...contextValue, loading: true });

    const loginResult = await FetchLogin(email, password);

    if (loginResult.success) {
      const new_value = {
        ...contextValue,
        user: loginResult.user,
        chapters: loginResult.chapters,
        loading: false,
      };
      setContextValue(new_value);
      AddToken(loginResult.token);
      SaveToLocalStorage(new_value);
    }

    setContextValue({ ...contextValue, loading: false });
    return loginResult.success;
  };

  const Register = async (name, email, password, passwordAgain) => {
    if (contextValue && contextValue.loading) return;
    setContextValue({ ...contextValue, loading: true });

    const registerResult = await FetchRegister(
      name,
      email,
      password,
      passwordAgain
    );

    setContextValue({ ...contextValue, loading: false });
    return registerResult.success;
  };

  const Logout = () => {
    const new_value = {
      ...contextValue,
      user: { isAuthenticated: false },
    };

    RemoveToken();
    SaveToLocalStorage(new_value);

    setContextValue(new_value);
  };

  const SetLastBookReading = (book_id, chapter_id) => {
    const new_value = {
      ...contextValue,
      user: {
        ...contextValue.user,
        lastBookId: Number(book_id),
        lastChapterId: Number(chapter_id),
      },
    };

    SaveToLocalStorage(new_value);

    setContextValue(new_value);
  };

  const GetBook = (book_id) =>
    contextValue.books.find((book) => book.id === Number(book_id));

  const GetChapters = (book_id) =>
    contextValue.chapters.find(
      (chapter) => chapter.book_id === Number(book_id)
    );

  const GetSingleChapter = (book_id, chapter_id) => {
    // get all chapter base on book id
    const chapter = contextValue.chapters.find(
      (chap) => chap.id === Number(chapter_id)
    );
    if (!chapter || !chapter.book_id || chapter.book_id !== Number(book_id)) {
      return { chapter: undefined };
    }
    const chapterIndex = contextValue.chapters.indexOf(chapter);
    const prev_chapter =
      chapterIndex === 0 ? undefined : contextValue.chapters[chapterIndex - 1];
    const next_chapter =
      chapterIndex === contextValue.chapters.length - 1
        ? undefined
        : contextValue.chapters[chapterIndex + 1];
    return { chapter, prev_chapter, next_chapter };
  };

  const GetFilteredBook = (sort, filter) => {
    if (!contextValue) return [];
    const filteredBook =
      filter === ""
        ? [...contextValue.books]
        : [...contextValue.books].filter(
            (book) =>
              book.title.indexOf(filter) >= 0 ||
              book.author.indexOf(filter) >= 0
          );
    const sortedBook =
      sort === "new"
        ? [...filteredBook].sort((a, b) => a.id < b.id)
        : sort === "exp"
        ? [...filteredBook].sort((a, b) => a.price < b.price)
        : [...filteredBook].sort((a, b) => a.price > b.price);
    return sortedBook;
  };

  const GetPost = (post_id) =>
    contextValue.posts.find((post) => post.id === Number(post_id));

  const OpenSnackbar = (message, time = 6000) => {
    setContextValue({
      ...contextValue,
      snackbar: { ...contextValue.snackbar, open: true, message, time },
    });
  };

  const CloseSnackbar = () => {
    setContextValue({
      ...contextValue,
      snackbar: { ...contextValue.snackbar, open: false },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...contextValue,
        Register,
        Login,
        Logout,
        SetLastBookReading,
        GetBook,
        GetChapters,
        GetSingleChapter,
        GetFilteredBook,
        GetPost,
        OpenSnackbar,
        CloseSnackbar,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
