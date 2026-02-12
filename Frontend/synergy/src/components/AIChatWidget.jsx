import React, { useState, useRef, useEffect } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import axios from "axios";
import "../scss/ai-chat.scss";

const AIChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Hi! I’m Synergy AI Assistant. Tell me what equipment or rental you need — I’ll recommend the best options.",
    },
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/ai/chat", {
        messages: newMessages,
      });

      setMessages((prev) => [...prev, res.data]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "⚠️ Sorry, something went wrong. Please try again or contact our team.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      <div className={`ai-chat-launcher ${open ? "open" : ""}`}>
        <Button onClick={() => setOpen(!open)}>🤖</Button>
      </div>

      {open && (
        <div className="ai-chat-window">
          <div className="ai-chat-header">
            <strong>Synergy AI Assistant</strong>
            <span onClick={() => setOpen(false)}>✖</span>
          </div>

          <div className="ai-chat-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`ai-msg ${msg.role === "user" ? "user" : "bot"}`}
              >
                {msg.content}
              </div>
            ))}
            {loading && <Spinner size="sm" className="ms-2" />}
            <div ref={messagesEndRef} />
          </div>

          <div className="ai-chat-input">
            <Form.Control
              placeholder="Ask about equipment, rentals, specs..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <Button onClick={sendMessage}>Send</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatWidget;
