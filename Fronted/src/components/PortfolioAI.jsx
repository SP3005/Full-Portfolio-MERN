import { useState } from "react";
import { getAIReply } from "../ai/aiLogic";
import ai from "./coding.png"
import "./PortfolioAI.css";

export default function PortfolioAI() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hi 👋 Ask me anything about Sujal!" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const aiMsg = { sender: "ai", text: getAIReply(input) };

    setMessages([...messages, userMsg, aiMsg]);
    setInput("");
  };

  return (
    <>
      <button className="ai-button" onClick={() => setOpen(!open)}>
        <img src={ai} />
      </button>

      {open && (
        <div className="ai-chat">
          <div className="ai-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="ai-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
            />
            <button onClick={sendMessage} className="send-btn">Send</button>
          </div>
        </div>
      )}
    </>
  );
}
