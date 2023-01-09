import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';
import { decrypt } from './EncryptorDecryptor';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import React, { useContext } from 'react';
import { ChatEngineContext } from 'react-chat-engine';
//const { htmlToText } = require('html-to-text')


const ChatCard = (props) => {
    const chat = props.chat;
    const index = props.index;
    const { conn, activeChat, setActiveChat } = useContext(ChatEngineContext)

    /*let lastMessage = htmlToText(chat.last_message.text, {})
    if (!lastMessage) {
        lastMessage = chat.last_message.attachments.length > 0 ?
        `${chat.last_message.attachments.length} image${chat.last_message.attachments.length > 1 ? 's' : ''}` :
        'Say hello!'
    }*/

    if (!chat) return <div />;

    return (
        <div className="chat-card-container" onClick={() => setActiveChat(chat.id)}>
            <div className="title-text">{chat?.title}</div>
            <div className="chat-subtitle">
            </div>
        </div>
    );
};

export default ChatCard;
