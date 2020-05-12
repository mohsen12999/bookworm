import React, { createContext, useState } from "react";
import { GetData, RemoveToken, SaveToLocalStorage } from "../services/GetData";

export const AuthContext = createContext();

const AuthContextProvider = props => {
    const [contextValue, setContextValue] = useState();

    React.useEffect(() => {
        const fillContext = async () => {
            const appData = await GetData();
            setContextValue(appData);
        };

        fillContext();
    }, []);

    // TODO: Login
    const Login = () => {
        // Login after 500ms
        setTimeout(() => {
            setContextValue({
                ...contextValue,
                isAuthenticated: true
            });
        }, 500);
    };

    const Logout = () => {
        const new_value = {
            ...contextValue,
            user: { isAuthenticated: false }
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
                lastChapterId: Number(chapter_id)
            }
        };

        SaveToLocalStorage(new_value);

        setContextValue(new_value);
    };

    const GetBook = book_id =>
        contextValue.books.find(book => book.id === Number(book_id));

    const GetChapters = book_id =>
        contextValue.chapters.find(
            chapter => chapter.book_id === Number(book_id)
        );

    const GetSingleChapter = (book_id, chapter_id) => {
        // get all chapter base on book id
        const chapter = contextValue.chapters.find(
            chap => chap.id === Number(chapter_id)
        );
        if (
            !chapter ||
            !chapter.book_id ||
            chapter.book_id !== Number(book_id)
        ) {
            return { chapter: undefined };
        }
        const chapterIndex = contextValue.chapters.indexOf(chapter);
        const prev_chapter =
            chapterIndex === 0
                ? undefined
                : contextValue.chapters[chapterIndex - 1];
        const next_chapter =
            chapterIndex === contextValue.chapters.length - 1
                ? undefined
                : contextValue.chapters[chapterIndex + 1];
        return { chapter, prev_chapter, next_chapter };
    };

    const GetPost = post_id =>
        contextValue.posts.find(post => post.id === Number(post_id));

    return (
        <AuthContext.Provider
            value={{
                ...contextValue,
                Login,
                Logout,
                SetLastBookReading,
                GetBook,
                GetChapters,
                GetSingleChapter,
                GetPost
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
