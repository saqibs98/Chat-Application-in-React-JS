import "./messageHeader.css";
import { Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

export default function MessageHeader({ user, closeChatBox }: any) {
  const { name } = user;

  return (
    <div className="headerContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">{name}</span>
        </Link>
      </div>
      <div className="topbarRight" onClick={closeChatBox}>
        <CloseOutlinedIcon></CloseOutlinedIcon>
        <span>&nbsp; Close</span>
      </div>
    </div>
  );
}
