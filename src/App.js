import React, { useState } from 'react';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';

const App = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);

  return (
    <div>
      <ChatList onSelectChat={setSelectedChatId} />
      {selectedChatId && <ChatWindow chatId={selectedChatId} />}
    </div>
  );
};

export default App;
