import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatList = ({ onSelectChat }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    axios.get('https://devapi.beyondchats.com/api/get_all_chats?page=1')
      .then(response => setChats(response.data))
      .catch(error => console.error('Error fetching chat data:', error));
  }, []);

  return (
    <div>
      {chats.map(chat => (
        <div key={chat.id} onClick={() => onSelectChat(chat.id)}>
          {chat.name}
        </div>
      ))}
    </div>
  );
};

export default ChatList;
