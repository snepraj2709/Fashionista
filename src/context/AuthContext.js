import { createContext, useState } from "react";
import { LoginService } from "../api/allApiCalls";
import { SignUpService } from "../api/allApiCalls";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("loginItems"));
  const [loginStatus, setLoginStatus] = useState({
    token: localStorageToken?.token,
    user: localStorageToken?.user,
  });

  const loginHandler = async (email, password) => {
    try {
      const {
        data: { foundUser, encodedToken },
        status,
      } = await LoginService({ email, password });
      if (status === 200) {
        localStorage.setItem(
          "loginItems",
          JSON.stringify({ token: encodedToken, user: foundUser })
        );
        setLoginStatus({ token: encodedToken, user: foundUser });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("loginItems");
    setLoginStatus({ token: null, user: null });
  };

  const signupHandler = async (email, password, name) => {
    try {
      const {
        data: { createdUser, encodedToken },
        status,
      } = await SignUpService({ email, password, name });
      if (status === 200) {
        // saving the encodedToken in the localStorage
        localStorage.setItem(
          "loginItems",
          JSON.stringify({ token: encodedToken, user: createdUser })
        );
      }
      setLoginStatus({ token: encodedToken, user: foundUser });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loginStatus,
        loginHandler,
        logoutHandler,
        signupHandler,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
