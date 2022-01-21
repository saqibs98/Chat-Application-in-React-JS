import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const Logout = () => {
  //let navigate = useNavigate();

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
