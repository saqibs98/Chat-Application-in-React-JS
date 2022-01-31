import Topbar from "../../components/topbar/Topbar";
import Message from "../../components/message/Message";
import OnlineUsers from "../../components/onlineUsers/OnlineUsers";
import MessageHeader from "../../components/message-header/MessageHeader";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { io } from "socket.io-client";
import "./messenger.css";
import axios from "axios";

const Messenger = () => {
  type conversation = {
    conversation: any;
  };
  const { user } = useContext(AuthContext);
  const { id, name } = JSON.parse(user);
  const [newMessage, setNewMessage] = useState("");
  const [chatBox, setChatBox] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([
    { id: 0, socket_id: "", name: "" },
  ]);
  const [socket, setSocket] = useState<any>(null);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [receiverID, setReceiverID] = useState(id);
  const [conversation, setConversation] = useState<any>([]);

  const [chatUser, setChatUSer] = useState({
    id: 0,
    socket_id: "",
    name: "",
  });

  useEffect(() => {
    setSocket(io("ws://localhost:8000"));
    socket?.on("getMessage", (data: any) => {
      //setArrivalMessage(data);
      console.log("Arrival message is : ", JSON.stringify(arrivalMessage));
    });
  }, []);

  // useEffect(() => {}, [arrivalMessage]);

  useEffect(() => {
    socket?.emit("addUser", { id, name });
    socket?.on("getOnlineUsers", (data: any) => {
      setOnlineUsers(data);
    });
  }, [socket]);

  // useEffect(() => {
  //   async function getConversation() {
  //     const res: any = await axios.get("/messages/conversation", {
  //       params: { senderID: id, receiverID: receiverID },
  //     });
  //     setConversation(res.data);
  //   }
  //   getConversation();
  // }, []);

  const openChatBox = () => {
    setChatBox(true);
  };

  const closeChatBox = () => {
    setChatBox(false);
    setChatUSer({
      id: 0,
      socket_id: "",
      name: "",
    });
  };

  const findUserOnClick = (user: any) => {
    setChatUSer(user);
    const { id } = user;
    setReceiverID(id);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (newMessage) {
      socket?.emit("sendMessage", {
        senderId: id,
        receiverId: receiverID,
        text: newMessage,
      });
    }
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
              {onlineUsers.map((d) => (
                <li
                  key={d.socket_id}
                  onClick={() => {
                    openChatBox();
                    findUserOnClick(d);
                  }}
                >
                  {d.name}
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
              {/* {conversation.map((e: any) => {
                <Message message={e.content} own={e.senderID === id} />;
              })}

              <Message message={conversation[0].content} own={true} /> */}
              <Message
                message={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do`}
                own={false}
              />

              <Message
                message={`Lorem ipsum dolor aliquip ex ea commodo consequat.`}
                own={false}
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
