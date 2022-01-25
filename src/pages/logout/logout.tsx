import Button from "@material-ui/core/Button";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Logout = () => {
  //const { isFetching, dispatch } = useContext(AuthContext);
  //dispatch({ type: "LOGIN_END" });
  sessionStorage.clear();
  //setState({});
  return (
    <div className="">
      <span>You are successfully logged out of the application.</span>
      <br />
      <br />
      <br />
      <Link to="/" style={{ textDecoration: "none" }}>
        Sign In
      </Link>
    </div>
  );
};

export default Logout;
