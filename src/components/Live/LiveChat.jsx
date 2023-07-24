import { useState } from "react";

export default function LiveChat() {
  const [chatText, setChatText] = useState("");

  return (
    <div className="p-2 flex flex-col items-center gap-4 flex-grow ">
      <div className="w-4/5 p-2 flex flex-col">
        <input
          className="w-full p-2 bg-transparent border-b-[1px] border-blackSecondary focus:outline-0"
          type="text"
          placeholder="Chat with others"
          value={chatText}
          onChange={(e) => setChatText(e.target.value)}
        />

        <div className="mt-2 flex items-center gap-2 self-end">
          <button
            className="p-2 text-sm bg-blackSecondary hover:bg-blackMain rounded-full"
            onClick={() => setChatText("")}
          >
            Cancel
          </button>

          <button className="p-2 text-sm bg-redMain hover:bg-redMain/80 rounded-full">
            Submit
          </button>
        </div>
      </div>

      <div className="h-screen w-4/5 py-2 px-4 bg-blackSecondary relative">
        <h1 className="p-2 shadow-lg">Live Chat</h1>

        <div className="p-2"></div>

        <div className="h-12 w-full bg-gradient-to-t from-blackMain to-transparent absolute bottom-0 left-0"></div>
      </div>
    </div>
  );
}
