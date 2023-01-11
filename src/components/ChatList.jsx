import React from 'react';
import NewChatForm from './NewChatForm';
import ChatCard from './ChatCard';

function getDateTime(date, offset) {
    if (!date) return ''
    
    date = date.replace(' ', 'T')
    offset = offset ? offset : 0

    const year = date.substr(0,4)
    const month = date.substr(5,2)
    const day = date.substr(8,2)
    const hour = date.substr(11,2)
    const minute = date.substr(14,2)
    const second = date.substr(17,2)
    
    var d = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`)
    d.setHours(d.getHours() + offset)
    return d
}

const readLastMessage = (username, chat) => {
  return chat.people.some(
    (chatPerson) =>
      chatPerson.person.username === username &&
      chatPerson.last_read === chat.last_message.id
  );
};
const renderLoading = () => {
  return [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => {
    return <ChatCard key={`chat_${i}`} isLoading={true} />;
  });
};

const getDescription = (chat) => {
  if (!chat.last_message.id) {
    return 'Say hello!';
  }
  if (chat.last_message.text === null) {
    return `${chat.last_message.attachments.length} attachments`;
  }
  return chat.last_message.text;
};

export const ChatList = (props) => {
  const { activeChatId = -1 } = props;

  const renderChats = (chats) => {
    return chats.map((chat, index) => {
      const otherPerson =
        chat &&
        chat.people.find((person) => person.person.username !== props.username);
      const title = !chat
        ? ''
        : chat.is_direct_chat && otherPerson
        ? otherPerson.person.username
        : chat.title;
      const timeStamp = getDateTime(chat.created, props.timezoneOffset)
        .toString()
        .substr(4, 6);
      const hasNotification = props.username
        ? !readLastMessage(props.username, chat)
        : false;

      return (
        <ChatCard
          key={`chat_${index}`}
          chat={chat}
          title={title}
          description={getDescription(chat)}
          timeStamp={timeStamp}
          isActive={activeChatId === chat.id}
          hasNotification={hasNotification}
          onClick={() =>
            props.onChatCardClick && props.onChatCardClick(chat.id)
          }
          avatarUsername={chat.last_message.sender?.username}
          avatarUrl={
            chat.last_message.sender
              ? chat.last_message.sender.avatar
              : 'https://chat-engine-assets.s3.amazonaws.com/empty-chat-thumb.png'
          }
          renderChatCard={props.renderChatCard}
        />
      );
    });
  };

  if (props.renderChatList) {
    return <>{props.renderChatList(props)}</>;
  }

  return (
    <div
      className="ce-chat-list"
      style={{
        // State
        ...(props.isLoading ? { overflowY: 'hidden' } : {}),
        // Props
        ...props.style,
      }}
    >
      <NewChatForm
        onFormSubmit={props.onChatFormSubmit}
        renderChatForm={props.renderChatForm}
      />

      {props.isLoading ? renderLoading() : renderChats(props.chats)}

     
    </div>
  );
};

export default ChatList;