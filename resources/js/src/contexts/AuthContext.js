import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = props => {
    const [contextValue, setContextValue] = useState({
        isAuthenticated: true,
        token: "",
        username: "محسن",
        mobile: "09113923310",
        boughtBooks: [1, 7, 18],
        writtenBooks: [],
        article: [],
        wallet: 5000,
        lastBookId: 7,
        lastChapterId: 103,
        avatar: "/img/user/default-profile.jpg"
    });

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
        // Logout after 500ms
        setTimeout(() => {
            setContextValue({
                ...contextValue,
                isAuthenticated: false
            });
        }, 500);
    };

    const SetLastBookReading = (book_id, chapter_id) => {
        setContextValue({
            ...contextValue,
            lastBookId: Number(book_id),
            lastChapterId: Number(chapter_id)
        });
    };

    return (
        <AuthContext.Provider
            value={{
                ...contextValue,
                Login,
                Logout,
                SetLastBookReading
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
