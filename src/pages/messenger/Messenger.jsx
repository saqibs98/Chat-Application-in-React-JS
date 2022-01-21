import Topbar from "../../components/topbar/Topbar";
import Message from "../../components/message/Message";
import OnlineUsers from "../../components/onlineUsers/OnlineUsers";
import MessageHeader from "../../components/message-header/MessageHeader";
import { useState } from "react";
import "./messenger.css";

const Messenger = ({ messageText, own }) => {
  const [newMessage, setNewMessage] = useState("");
  const [chatBox, setChatBox] = useState(false);
  const [allUsers, setUsers] = useState([
    { user_id: 1, is_active: true, nickname: "Saqib Hasanie" },
    { user_id: 2, is_active: false, nickname: "Aaqib Hasanie" },
    { user_id: 3, is_active: false, nickname: "Anas Hasanie" },
  ]);
  const [chatUser, setChatUSer] = useState({
    user_id: 0,
    is_active: false,
    nickname: "",
  });

  const openChatBox = () => {
    setChatBox(true);
  };

  const closeChatBox = () => {
    setChatBox(false);
    setChatUSer({ user_id: 0, is_active: false, nickname: "" });
  };

  const findUserOnClick = (user) => {
    const user1 = allUsers.filter((obj) => obj.user_id === user.user_id);
    setChatUSer(user1[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newMessage);
  };

  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <h2 className="heading">Online Users</h2>
            <br></br>
            <ul>
              {allUsers.map((d) => (
                <li
                  key={d.user_id}
                  onClick={() => {
                    openChatBox();
                    findUserOnClick(d);
                  }}
                >
                  {d.nickname}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="chatBox">
          {chatBox && (
            <MessageHeader closeChatBox={closeChatBox} user={chatUser} />
          )}
          {chatBox ? (
            <div className="chatBoxWrapper">
              <Message
                message={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.`}
                own={true}
              />
              <Message
                message={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do`}
                own={false}
              />

              <Message
                message={`Lorem ipsum dolor aliquip ex ea commodo consequat.`}
                own={true}
              />
              <div className="chatBoxBottom">
                <textarea
                  className="chatMessageInput"
                  placeholder="write something..."
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
                ></textarea>
                <button className="chatSubmitButton" onClick={handleSubmit}>
                  Send
                </button>
              </div>
            </div>
          ) : (
            <>
              <h4>Click on any user to initiate chat.</h4>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Messenger;
