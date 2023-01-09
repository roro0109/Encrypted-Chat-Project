import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';
import EntranceScreen from './components/EntranceScreen';
import ChatCard from './components/ChatCard';

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
      renderChatCard={(chat, index) =>  <ChatCard key={`${index}`} chat={chat} />}
      //renderChatCard={(props, chat) =>   <ChatCard {...props} chat={chat} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}

    />
  );
};


export default App;
