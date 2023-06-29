import React, { useState } from "react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const send = (message) => {
    setMessages((prev) => [...prev, message]);
  };
  return (
    <div style={{ position: "relative", height: "500px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList>
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "just now",
                sender: "Joe",
              }}
            />
            {messages.map((msg) => (
              <Message
                model={{
                  message: msg,
                  sentTime: "just now",
                  sender: "Me",
                  direction: "outgoing",
                  position: "single",
                }}
              />
            ))}
          </MessageList>
          <MessageInput onSend={send} placeholder="Type message here" />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default ChatScreen;
