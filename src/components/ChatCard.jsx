import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';
import { decrypt } from './EncryptorDecryptor';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const ChatCard = (props) => {
    const chat = props.chat;
    const index = props.index;


    if (!chat) return <div />;

    return (
        <div className="chat-card-container">
            <div className="title-text">{chat?.title}</div>
            <div className="chat-subtitle">
                {chat.people.map((person) => ` ${person.person.username}`)}
            </div>
        </div>
    );
};

export default ChatCard;