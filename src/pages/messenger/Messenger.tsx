import Topbar from "../../components/topbar/Topbar";
import Message from "../../components/message/Message";
import OnlineUsers from "../../components/onlineUsers/OnlineUsers";
import MessageHeader from "../../components/message-header/MessageHeader";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { io } from "socket.io-client";
import "./messenger.css";
import axios from "axios";

const Messenger = ({ messageText, own }: any) => {
  type conversation = {
    conversation: any;
  };
  const { user } = useContext(AuthContext);
  const { id: user_id } = JSON.parse(user);
  const [newMessage, setNewMessage] = useState("");
  const [chatBox, setChatBox] = useState(false);
  const [socket, setSocket] = useState<any>(null);

  const [receiverID, setReceiverID] = useState(user_id);
  const [conversation, setConversation] = useState<any>([]);

  const [allUsers, setUsers] = useState([
    { id: 1, is_active: true, nickname: "Saqib Hasanie" },
    { id: 2, is_active: false, nickname: "Aaqib Hasanie" },
    { id: 3, is_active: false, nickname: "Anas Hasanie" },
  ]);

  const [chatUser, setChatUSer] = useState({
    id: 0,
    is_active: false,
    nickname: "",
  });

  useEffect(() => {
    setSocket(io("ws://localhost:8000"));
  }, []);

  useEffect(() => {
    socket?.on("welcome", function message(m: any) {
      console.log(m);
    });
  }, [socket]);

  useEffect(() => {
    async function getConversation() {
      const res: any = await axios.get("/messages/conversation", {
        params: { senderID: user_id, receiverID: 3 },
      });
      // const newResArry = res.data.map((v: any) =>
      //   Object.assign(v, { isSent: true })
      // );
      setConversation(res.data);
      console.log("res", res.data);
      conversation.map((e: any) => {
        console.log(`AJSNJDASNDAS ${e}`);
      });
    }
    getConversation();
  }, []);

  const openChatBox = () => {
    setChatBox(true);
  };

  const closeChatBox = () => {
    setChatBox(false);
    setChatUSer({ id: 0, is_active: false, nickname: "" });
  };

  const findUserOnClick = (user: any) => {
    const user1 = allUsers.filter((obj) => obj.id === user.id);
    setChatUSer(user1[0]);
    const { id } = chatUser;
    setReceiverID(id);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
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
                  key={d.id}
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
              {conversation.map((e: any) => {
                <Message message={e.content} own={e.senderID === user_id} />;
              })}

              {/* <Message message={conversation[0].content} own={true} />
              <Message
                message={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do`}
                own={false}
              />

              <Message
                message={`Lorem ipsum dolor aliquip ex ea commodo consequat.`}
                own={false}
              /> */}
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
