import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';

const ChatCard = (chat, index) => {
  const { chats, activeChat, userName, messages, ChatCard } = props;

  const chat = chats && chats[activeChat];

  if (!chat) return <div />;

  return (
    <div className="chat-card">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
    </div>
  );
};

export default ChatCard;

