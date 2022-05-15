import { useState } from "react";
import { useAuth } from "../../../context";

export function Login({ setAuthVal }) {
  const testLogin = { username: "manojsarna", password: "Manoj@123" };
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    show: false,
    message: "",
  });
  const { loginAuth } = useAuth();
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

  const loginHandler = () => {
    if (
      loginDetails.username !== "" &&
      loginDetails.password.match(passwordRegex)
    ) {
      setErrorMessage({
        show: false,
        message: "",
      });
      loginAuth(loginDetails);
    } else {
      setErrorMessage({
        show: true,
        message: "Invalid Credentials",
      });
    }
  };

  return (
    <div id="auth-login" className="sm-main-auth-login">
      <div
        className={`sm-notification  sm-not-error ${
          errorMessage.show ? "sm-error-show" : "sm-error-hide"
        }`}
      >
        <span className="sm-alert-icon">
          <i className="fas fa-exclamation-circle"></i>
        </span>
        <span>{errorMessage.message}</span>
      </div>
      <h2 className="fw-800">Login</h2>

      <div className="auth-email-pass">
        <div className="sm-input-container input-user-username">
          <input
            type="text"
            className={`input-basic input-basic-icon ${
              loginDetails.username !== ""
                ? "sm-input-success"
                : "sm-input-error"
            }`}
            placeholder="Enter Username"
            name="username"
            required
            value={loginDetails.username}
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, username: e.target.value })
            }
          />
          <i className="icon-basic fas fa-user"></i>
        </div>
        <div className="sm-input-container input-pass">
          <input
            type="password"
            className={`input-basic input-basic-icon ${
              loginDetails.password !== ""
                ? loginDetails.password.match(passwordRegex)
                  ? "sm-input-success"
                  : "sm-input-error"
                : ""
            }`}
            placeholder="Enter Password"
            name="password"
            required
            value={loginDetails.password}
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, password: e.target.value })
            }
          />
          <i className="icon-basic fas fa-key"></i>
        </div>
      </div>

      <div className="auth-for-rem">
        <button
          className="btn btn-txt test-login"
          onClick={(e) => {
            e.preventDefault();
            setLoginDetails(testLogin);
          }}
        >
          TEST LOGIN
        </button>
        <div className="sm-auth-rem">
          <input type="checkbox" value="" />
          <span className="auth-rem-text">Remember Me</span>
        </div>
      </div>

      <button
        className="auth-btn btn btn-primary btn-bold "
        onClick={() => loginHandler()}
      >
        Login
      </button>

      <button
        id="sm-auth-signup-btn"
        className="auth-btn btn btn-bold btn-outline "
        onClick={() => setAuthVal(false)}
      >
        Signup
      </button>
    </div>
  );
}
