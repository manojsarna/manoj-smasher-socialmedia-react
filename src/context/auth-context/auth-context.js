import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const smasherToken = localStorage.getItem("smasherToken");
  const [user, setUser] = useState();
  const [encodedToken, setEncodedToken] = useState();

  useEffect(() => {
    if (smasherToken) {
      (async function () {
        setEncodedToken(smasherToken);
        try {
          const response = await axios.post("/api/auth/verify", {
            encodedToken: smasherToken,
          });
          if (response.status === 200) {
            setUser(response.data.user);
          }
        } catch (error) {
          console.error(error.response.data.errors);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loginAuth = async (loginDetails) => {
    try {
      const response = await axios.post("/api/auth/login", {
        username: loginDetails.username,
        password: loginDetails.password,
      });

      if (response.status === 200) {
        localStorage.setItem("smasherToken", response.data.encodedToken);

        setUser(response.data.foundUser);
        setEncodedToken(response.data.encodedToken);
        toast.success("Login Successful");
      }
    } catch (error) {
      toast.error(error.response.data.errors[0]);
    }
  };

  const logoutAuth = () => {
    localStorage.removeItem("smasherToken");
    setUser(null);
    setEncodedToken(null);
  };

  const signUpAuth = async (signUpDetails) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        firstName: signUpDetails.firstName,
        lastName: signUpDetails.lastName,
        username: signUpDetails.username,
        email: signUpDetails.email,
        password: signUpDetails.password,
      });
      if (response.status === 201) {
        localStorage.setItem("smasherToken", response.data.encodedToken);
        setUser(response.data.createdUser);
        setEncodedToken(response.data.encodedToken);
        toast.success("SignUp Successful");
      }
    } catch (error) {
      toast.error(error.response.data.errors[0]);
    }
  };
  return (
    <AuthContext.Provider
      value={{ user, encodedToken, loginAuth, logoutAuth, signUpAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, useAuth };
