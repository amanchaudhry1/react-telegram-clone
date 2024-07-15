import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatWindow = ({ chatId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`)
      .then(response => setMessages(response.data))
      .catch(error => console.error('Error fetching messages:', error));
  }, [chatId]);

  return (
    <div>
      {messages.map(message => (
        <div key={message.id}>
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
