import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import EntranceScreen from './components/EntranceScreen';
//import ChatCard from './components/ChatCard';


const projectID = 'a835b881-cb1e-45cf-8585-8fb5502bc8b1';

const App = () => {
  if (!localStorage.getItem('username')) return <EntranceScreen />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      //renderChatCard={(chat, index) =>   <ChatCard key={`${index}`} chat={chat} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}

    />
  );
};


export default App;
