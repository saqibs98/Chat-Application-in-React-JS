import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const { name } = JSON.parse(user);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">WebChat</span>
        </Link>
      </div>

      <div className="topbarRight">
        <Person />
        Hi, {name} -
        <Link to="/logout" className="link" style={{ textDecoration: "none" }}>
          <span>&nbsp; Logout</span>
        </Link>
      </div>
    </div>
  );
}
