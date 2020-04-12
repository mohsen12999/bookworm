import React, { createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends React.Component {
  state = {
    isAuthenticated: false,
    token: "",
    username: "mohsen",
    boughtBook: [1, 7, 18],
    writtenBooks: [],
    article: [],
    wallet: 5000,
    lastBookId: 7,
    lastChapterId: 103,
  };

  Login = () => {
    this.setState({
      ...this.state,
      isAuthenticated: true,
    });
  };
  Logout = () => {
    this.setState({
      ...this.state,
      isAuthenticated: false,
    });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, Login: this.Login, Logout: this.Logout }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
