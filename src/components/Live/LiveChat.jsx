import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import { addToChat } from "../../app/slices/chatSlice";
import { CHAT_DATA } from "../../constant";
import Chat from "./Chat";

export default function LiveChat() {
  const dispatch = useDispatch();
  const [chatText, setChatText] = useState("");
  const chatData = useSelector((store) => store.chat.chatData);

  useEffect(() => {
    const chat = setInterval(() => {
      getChatMessages();
    }, 800);

    return () => {
      clearInterval(chat);
    };
  }, []);

  const getChatMessages = () => {
    const index = Math.floor(Math.random() * 14);
    let message = CHAT_DATA[index];
    message = { ...message, id: uuid() };

    dispatch(addToChat(message));
  };

  const addComment = () => {
    const id = uuid();
    const message = chatText;
    dispatch(addToChat({ id: id, author: "Piyush Sharma", comment: message }));
    setChatText("");
  };

  return (
    <div className="w-[30%] flex flex-col items-center gap-4">
      <div className="w-full p-2 flex flex-col">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addComment();
          }}
        >
          <input
            className="w-full p-2 bg-transparent border-b-[1px] border-blackSecondary focus:outline-0"
            type="text"
            placeholder="Join the conversation..."
            value={chatText}
            onChange={(e) => setChatText(e.target.value)}
          />
        </form>

        <div className="mt-2 flex items-center gap-2 self-end">
          <button
            className="p-2 text-sm bg-blackSecondary hover:bg-blackMain rounded-full"
            onClick={() => setChatText("")}
          >
            Cancel
          </button>

          <button
            className="p-2 text-sm bg-redMain hover:bg-redMain/80 rounded-full"
            onClick={() => addComment()}
          >
            Submit
          </button>
        </div>
      </div>

      <div className="h-screen w-full p-2 flex flex-col items-center bg-blackSecondary rounded-lg">
        <h1 className="w-full p-2 shadow-lg">Live Chat</h1>

        <div className="w-full overflow-y-scroll flex-grow">
          {chatData.map((message) => {
            return <Chat key={message?.id} info={message} />;
          })}
        </div>
      </div>
    </div>
  );
}
