import React, { useState } from "react";
import {PaperAirplaneIcon, ArrowRightIcon, PlayIcon} from '@heroicons/react/solid'
interface Message {
  text: string;
  type: "user" | "bot";
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>("");

  const handleSendMessage = (): void => {
    if (inputText.trim() === "") {
      return;
    }

    // Simulate sending a message to the bot
    const newMessages: Message[] = [
      ...messages,
      { text: inputText, type: "user" },
    ];
    setMessages(newMessages);
    setInputText("");

    // Simulate the bot's response (you can replace this with actual bot logic)
    setTimeout(() => {
      const botResponse: Message = {
        text: "Hi! I am a chatbot. How can I help you?",
        type: "bot",
      };
      setMessages([...newMessages, botResponse]);
    }, 500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <div className="flex flex-col h-[50vh] md:h-screen justify-between bg-black bg-opacity-80 md:border-black md:border-l-8">
        <p className="flex justify-center p-2 font-bold text-base md:text-2xl text-green-50">
          START CONVERSATION WITH OUR CHATBOT
        </p>
        <div className="overflow-y-auto p-4 h-5/6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`my-2 ${
                message.type === "bot" ? "text-left" : "text-right"
              }`}
            >
              <span
                className={`inline-block p-2 rounded-lg ${
                  message.type === "bot"
                    ? "bg-gray-200 text-gray-800"
                    : "bg-green-900 text-white"
                }`}
              >
                {message.text}
              </span>
            </div>
          ))}
        </div>
        <div className="p-2 border-dashed border-2 border-green-200 flex justify-between items-center  rounded-md m-2">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className=" mr-2  rounded shadow-sm bg-transparent text-white  flex-1 outline-none" 
          />
          <PaperAirplaneIcon className="w-10 h-8 rotate-90 cursor-pointer text-green-200" onClick={handleSendMessage}/>
          
        </div>
      </div>
    </div>
  );
};

export default Chat;
