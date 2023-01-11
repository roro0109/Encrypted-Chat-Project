import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import EntranceScreen from './components/EntranceScreen';
import ChatCard from './components/ChatCard';
import ChatList from './components/ChatList';


const projectID = '5a16c1de-ea4c-4c12-9b6c-172f530bf6a6';

const App = () => {
  if (!localStorage.getItem('username')) return <EntranceScreen />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      renderChatCard={(chat, index) =>   <ChatCard key={`${index}`} chat={chat} />}
      //renderChatList={(chatAppProps) => <ChatList {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}

    />
  );
};


export default App;
