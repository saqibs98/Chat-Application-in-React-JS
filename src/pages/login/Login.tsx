import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const username: any = useRef();

  const handleClick = (e: any) => {
    e.preventDefault();
    // loginCall(
    //   { username: username.current.value },
    //   dispatch
    // );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Chat Application</h3>
          <span className="loginDesc">Developed by Saqib Hasanie</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              type="text"
              required
              className="loginInput"
              ref={username}
            />
            <button className="loginButton" type="submit">
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
