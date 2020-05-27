import React, { createContext, useState } from "react";
import { GetData } from "../services/GetData";
import {
  RemoveToken,
  SavePublicDataToLocalStorage,
  SavePrivateDataToLocalStorage,
  RemovePrivateDataFromLocalStorage,
} from "../services/LocalStorage";

import { FetchLogin, FetchRegister } from "../services/Auth";
import {
  FetchUpdateProfile,
  FetchDeleteNote,
  FetchDeletePost,
  FetchWritePost,
} from "../services/Admin";

export const Context = createContext();

const ContextProvider = (props) => {
  const [adminContext, setAdminContext] = useState({
    isAuthenticated: false,
  });
  const [publicContext, setPublicContext] = useState({
    genres: [],
    books: [],
    chapters: [],
    posts: [],
    subjects: [],
    authors: [],
  });
  const [settingContext, setSettingContext] = useState({ loading: false });
  // const [tempContext, seTempContext] = useState({});

  React.useEffect(() => {
    if (settingContext && settingContext.loading) return false;
    setSettingContext({ loading: true });

    const fillContext = async () => {
      const appData = await GetData();

      setPublicContext(appData.publicData);
      setAdminContext(appData.privateData);
      setSettingContext({ loading: false });
    };

    fillContext();
    // eslint-disable-next-line
  }, []);

  const Login = async (email, password) => {
    if (settingContext && settingContext.loading) return false;
    setSettingContext({ loading: true });

    const loginResult = await FetchLogin(email, password);

    if (loginResult.success) {
      setAdminContext(loginResult.user);
      const newPublicContext = {
        ...publicContext,
        chapters: loginResult.chapters,
      };
      setPublicContext(newPublicContext);

      SavePublicDataToLocalStorage(newPublicContext);
      SavePrivateDataToLocalStorage(loginResult.user);
    }

    setSettingContext({ loading: false });
    return loginResult.success;
  };

  const Register = async (name, email, password, passwordAgain) => {
    if (settingContext && settingContext.loading) return false;
    setSettingContext({ loading: true });

    const registerResult = await FetchRegister(
      name,
      email,
      password,
      passwordAgain
    );

    setSettingContext({ loading: false });
    return registerResult.success;
  };

  const Logout = () => {
    setAdminContext({ isAuthenticated: false });
    RemoveToken();
    RemovePrivateDataFromLocalStorage();
  };

  const SetLastBookReading = (book_id, chapter_id) => {
    setAdminContext({
      ...adminContext,
      lastBookId: Number(book_id),
      lastChapterId: Number(chapter_id),
    });
    SavePrivateDataToLocalStorage(adminContext);
  };

  const GetBook = (book_id) =>
    publicContext.books.find((book) => book.id === Number(book_id));

  const GetChapters = (book_id) =>
    publicContext.chapters.find(
      (chapter) => chapter.book_id === Number(book_id)
    );

  const GetSingleChapter = (book_id, chapter_id) => {
    // get all chapter base on book id
    const chapter = publicContext.chapters.find(
      (chap) => chap.id === Number(chapter_id)
    );
    if (!chapter || !chapter.book_id || chapter.book_id !== Number(book_id)) {
      return { chapter: undefined };
    }
    const chapterIndex = publicContext.chapters.indexOf(chapter);
    const prev_chapter =
      chapterIndex === 0 ? undefined : publicContext.chapters[chapterIndex - 1];
    const next_chapter =
      chapterIndex === publicContext.chapters.length - 1
        ? undefined
        : publicContext.chapters[chapterIndex + 1];
    return { chapter, prev_chapter, next_chapter };
  };

  const GetFilteredBook = (sort, filter) => {
    if (
      !publicContext ||
      !publicContext.books ||
      publicContext.books.length === 0
    )
      return [];
    const filteredBook =
      filter === ""
        ? [...publicContext.books]
        : [...publicContext.books].filter(
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
    publicContext.posts.find((post) => post.id === Number(post_id));

  const OpenSnackbar = (message, time = 6000) => {
    setSettingContext({
      ...settingContext,
      snackbar: { ...settingContext.snackbar, open: true, message, time },
    });
  };

  const CloseSnackbar = () => {
    setSettingContext({
      ...settingContext,
      snackbar: { ...settingContext.snackbar, open: false },
    });
  };

  const UpdateProfile = async (data) => {
    if (settingContext && settingContext.loading) return false;
    setSettingContext({ loading: true });

    const result = await FetchUpdateProfile(data);
    if (result.success) {
      const newPrivateDate = { ...adminContext, ...result.user };
      setAdminContext(newPrivateDate);
      SavePrivateDataToLocalStorage(newPrivateDate);
    }

    setSettingContext({ loading: false });
    return result.success;
  };

  const DeleteNote = async (id) => {
    if (settingContext && settingContext.loading) return false;
    setSettingContext({ loading: true });

    const result = await FetchDeleteNote(id);
    if (result.success) {
      const remainWrittenBooks = adminContext.writtenBooks.filter(
        (book) => book.id !== id
      );

      setAdminContext({
        ...adminContext,
        writtenBooks: remainWrittenBooks,
      });
    }

    setSettingContext({ loading: false });
    return result.success;
  };

  const DeletePost = async (id) => {
    if (settingContext && settingContext.loading) return false;
    setSettingContext({ loading: true });

    const result = await FetchDeletePost(id);
    if (result.success) {
      const remainWrittenPosts = adminContext.writtenPosts.filter(
        (post) => post.id !== id
      );

      setAdminContext({
        ...adminContext,
        writtenPosts: remainWrittenPosts,
      });
    }

    setSettingContext({ loading: false });
    return result.success;
  };

  const GetWrittenBook = (book_id) =>
    book_id
      ? adminContext.writtenBooks.find((book) => book.id === Number(book_id))
      : undefined;

  const GetWrittenChapter = (chapter_id) =>
    chapter_id
      ? adminContext.writtenChapters.find(
          (chapter) => chapter.id === Number(chapter_id)
        )
      : undefined;

  const GetWrittenBookChapters = (book_id) =>
    book_id
      ? adminContext.writtenChapters.filter(
          (chapter) => chapter.book_id === Number(book_id)
        )
      : undefined;

  const GetWrittenPost = (post_id) =>
    post_id
      ? adminContext.writtenPosts.find((post) => post.id === Number(post_id))
      : undefined;

  const WritePost = async (data) => {
    if (settingContext && settingContext.loading) return false;
    setSettingContext({ loading: true });

    const result = await FetchWritePost(data);

    if (result.success) {
      const writtenPosts = adminContext.writtenPosts;
      const index = writtenPosts.findIndex((wp) => wp.id === result.post.id);
      if (index >= 0) {
        // for edit page
        writtenPosts.splice(index, 1);
      }
      writtenPosts.push(result.post);
      setAdminContext({ ...adminContext, writtenPosts: writtenPosts });
    }

    setSettingContext({ loading: false });

    return {
      success: result.success,
      id: result.success ? result.post.id : 0,
    };
  };

  const MakeSubjectDictionary = () => {
    const subjects = publicContext.subjects;
    const subjectsDictionary = subjects.reduce((dictionary, subject) => {
      dictionary[subject.id] = subject.title;
      return dictionary;
    }, {});
    return subjectsDictionary;
  };

  const MakeGenreDictionary = () => {
    const genres = publicContext.genres;
    const genresDictionary = genres.reduce((dictionary, genre) => {
      dictionary[genre.id] = genre.title;
      return dictionary;
    }, {});
    return genresDictionary;
  };

  return (
    <Context.Provider
      value={{
        public: publicContext,
        admin: adminContext,
        setting: settingContext,
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
        UpdateProfile,
        DeleteNote,
        DeletePost,
        GetWrittenPost,
        GetWrittenBook,
        GetWrittenChapter,
        GetWrittenBookChapters,
        WritePost,
        MakeSubjectDictionary,
        MakeGenreDictionary,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
