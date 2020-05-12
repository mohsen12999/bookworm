import React, { createContext, useState } from "react";
import { GetData, RemoveToken, SaveToLocalStorage } from "../services/GetData";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [contextValue, setContextValue] = useState(GetData());

  // TODO: Login
  const Login = () => {
    // Login after 500ms
    setTimeout(() => {
      setContextValue({
        ...contextValue,
        isAuthenticated: true,
      });
    }, 500);
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

  return (
    <AuthContext.Provider
      value={{
        ...contextValue,
        Login,
        Logout,
        SetLastBookReading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
