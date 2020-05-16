import React, { createContext, useState } from "react";
import {
    GetData,
    AddToken,
    RemoveToken,
    SavePublicDataToLocalStorage,
    SavePrivateDataToLocalStorage,
    RemovePrivateDataFromLocalStorage
} from "../services/GetData";
import { FetchLogin, FetchRegister } from "../services/Auth";

export const Context = createContext();

const ContextProvider = props => {
    const [adminContext, setAdminContext] = useState({
        isAuthenticated: false
    });
    const [publicContext, setPublicContext] = useState({
        genres: [],
        books: [],
        chapters: [],
        posts: [],
        subjects: [],
        authors: []
    });
    const [settingContext, setSettingContext] = useState({ loading: false });
    // const [tempContext, seTempContext] = useState({});

    React.useEffect(() => {
        if (settingContext && settingContext.loading) return;
        setSettingContext({ loading: true });

        const fillContext = async () => {
            const appData = await GetData();

            setPublicContext(appData.publicData);
            setAdminContext(appData.privateData);
            setSettingContext({ loading: false });
        };

        fillContext();
    }, []);

    const Login = async (email, password) => {
        if (settingContext && settingContext.loading) return;
        setSettingContext({ loading: true });

        const loginResult = await FetchLogin(email, password);

        if (loginResult.success) {
            setAdminContext(loginResult.user);
            const newPublicContext = {
                ...publicContext,
                chapters: loginResult.chapters
            };
            setPublicContext(newPublicContext);

            AddToken(loginResult.token);
            SavePublicDataToLocalStorage(newPublicContext);
            SavePrivateDataToLocalStorage(loginResult.user);
        }

        setSettingContext({ loading: false });
        return loginResult.success;
    };

    const Register = async (name, email, password, passwordAgain) => {
        if (settingContext && settingContext.loading) return;
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
            lastChapterId: Number(chapter_id)
        });
        SavePrivateDataToLocalStorage(adminContext);
    };

    const GetBook = book_id =>
        publicContext.books.find(book => book.id === Number(book_id));

    const GetChapters = book_id =>
        publicContext.chapters.find(
            chapter => chapter.book_id === Number(book_id)
        );

    const GetSingleChapter = (book_id, chapter_id) => {
        // get all chapter base on book id
        const chapter = publicContext.chapters.find(
            chap => chap.id === Number(chapter_id)
        );
        if (
            !chapter ||
            !chapter.book_id ||
            chapter.book_id !== Number(book_id)
        ) {
            return { chapter: undefined };
        }
        const chapterIndex = publicContext.chapters.indexOf(chapter);
        const prev_chapter =
            chapterIndex === 0
                ? undefined
                : publicContext.chapters[chapterIndex - 1];
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
                      book =>
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

    const GetPost = post_id =>
        publicContext.posts.find(post => post.id === Number(post_id));

    const OpenSnackbar = (message, time = 6000) => {
        setSettingContext({
            ...settingContext,
            snackbar: { ...settingContext.snackbar, open: true, message, time }
        });
    };

    const CloseSnackbar = () => {
        setSettingContext({
            ...settingContext,
            snackbar: { ...settingContext.snackbar, open: false }
        });
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
                CloseSnackbar
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
