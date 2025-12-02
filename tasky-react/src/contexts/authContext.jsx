import { useState, createContext } from "react";
import { login, signup } from "../api/tasky-api";

export const AuthContext = createContext(null); //eslint-disable-line

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(!!existingToken);
  const [authToken, setAuthToken] = useState(existingToken); //eslint-disable-line
  const [userName, setUserName] = useState("");

  const setToken = (token, username) => {
    localStorage.setItem("token", token);
    setAuthToken(token);
    setIsAuthenticated(true);
    setUserName(username);
  }

  const authenticate = async (username, password) => {
    const result = await login(username, password);
    if (result.token) {
      const rawToken = result.token.replace(/^BEARER\s+/i, '');
      setToken(rawToken, username);
    }
  };

  const register = async (username, password) => {
    const result = await signup(username, password);
    return result.success;
  };

  const signout = () => {
    localStorage.removeItem("token");
    setAuthToken(null); //eslint-disable-line
    setUserName("");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        userName,
        authToken, 
      }}
    >
      {props.children} {/* eslint-disable-line */}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
