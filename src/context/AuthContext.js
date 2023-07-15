import { createContext, useState, useContext } from "react";
import { LoginService } from "../Api/allApiCalls";
import { SignUpService } from "../Api/allApiCalls";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
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

      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginItems",
          JSON.stringify({ token: encodedToken, user: foundUser })
        );
        setLoginStatus({ token: encodedToken, user: foundUser });
        toast.success(`Welcome back, ${foundUser.firstName}!`);
        navigate(location?.state?.from?.pathname, "/", { replace: true });
      } else if (status === 404) {
        toast.error(
          "The username you entered is not Registered, Please Signup before Login"
        );
      }
    } catch (e) {
      console.log(e);
      toast.error("Please enter correct login details");
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
