import React, { createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends React.Component {
  state = {
    username: "",
    avatar: "",
    isAuthenticated: false,
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
