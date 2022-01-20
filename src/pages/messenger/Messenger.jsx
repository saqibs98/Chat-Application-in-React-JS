import Topbar from "../../components/topbar/Topbar";
import Message from "../../components/message/Message";
import { useState } from "react";
import "./messenger.css";

const Messenger = ({ messageText, own }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newMessage);
  };

  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatOnline">
          <div className="chatOnlineWrapper">Online Users</div>
        </div>

        <div className="chatBox">
          {/* <Topbar /> */}
          <div className="chatBoxWrapper">
            <Message
              message={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.`}
              own={true}
            />
            <Message
              message={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.`}
              own={false}
            />

            <Message
              message={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.`}
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
        </div>
      </div>
    </>
  );
};

export default Messenger;
