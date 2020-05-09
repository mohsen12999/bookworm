import React, { createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends React.Component {
  state = {
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
    avatar: "/img/user/default-profile.jpg",
  };

  Login = () => {
    // Login after 500ms
    setTimeout(() => {
      this.setState({
        ...this.state,
        isAuthenticated: true,
      });
    }, 500);
  };
  Logout = () => {
    // Logout after 500ms
    setTimeout(() => {
      this.setState({
        ...this.state,
        isAuthenticated: false,
      });
    }, 500);
  };

  SetLastBookReading = (book_id, chapter_id) => {
    this.setState({
      ...this.state,
      lastBookId: Number(book_id),
      lastChapterId: Number(chapter_id),
    });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          Login: this.Login,
          Logout: this.Logout,
          SetLastBookReading: this.SetLastBookReading,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
