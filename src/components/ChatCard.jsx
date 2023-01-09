// import MyMessage from './MyMessage';
// import TheirMessage from './TheirMessage';
// import MessageForm from './MessageForm';
// import { decrypt } from './EncryptorDecryptor';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import React, { useContext } from 'react';
// import { ChatEngineContext } from 'react-chat-engine';

// const { htmlToText } = require('html-to-text')


// const ChatCard = props => {

//     const chat = props.chat;
//     const index = props.index;
//     const { conn, activeChat, setActiveChat } = useContext(ChatEngineContext)

//     const extraStyle = activeChat === chat.id ? styles.activeChat : {}

//     let lastMessage = htmlToText(chat.last_message.text, {})
//     if (!lastMessage) {
//         lastMessage = chat.last_message.attachments.length > 0 ?
//         `${chat.last_message.attachments.length} image${chat.last_message.attachments.length > 1 ? 's' : ''}` :
//         'Say hello!'
//     }

//     function didReadLastMessage(chat) {
//         let didReadLastMessage = true
//         chat.people.map(chat_person => {
//             if(conn.userName === chat_person.person.username) {
//                 didReadLastMessage = chat.last_message.id === chat_person.last_read
//             }
//         })
//         return didReadLastMessage
//     }

//     function daySinceSent(date) {
//         if (!date) return ''
//         return getDateTime(date, conn.offset).toString().substr(4, 6)
//     }

//     if (!chat) return <div />;

//     return (
//         <div 
//         style={{ ...styles.chatContainer, ...extraStyle }}
//         className={`ce-chat-card ${activeChat === chat.id && 'ce-active-chat-card'}`}
//         onClick={() => setActiveChat(chat.id)}
//         >
//             <div 
//                 style={ styles.titleText }
//                 className='ce-chat-title-text'>
//                 {chat?.title}

//             </div>
//             <div style={{ width: '100%' }} className='ce-chat-subtitle'>
//                     <div style={styles.messageText} className='ce-chat-subtitle-text ce-chat-subtitle-message'>
//                         { lastMessage }
//                     </div>

//                     <div 
//                         className='ce-chat-subtitle-text ce-chat-subtitle-date'
//                         style={{ ...styles.messageText, ...{ textAlign: 'right', width: '25%' } }}
//                     >
//                         { 'daySinceSent(chat.last_message.created)' }
//                     </div>
//                 </div>

//             <div className="chat-subtitle">
//             </div>
//         </div>
//     );
// };


// const styles={
//     chatContainer: { 
//         padding: '16px', 
//         paddingBottom: '12px',
//         cursor: 'pointer'
//     },
//     titleText: { 
//         fontWeight: '500',
//         paddingBottom: '4px', 
//         whiteSpace: 'nowrap', 
//         overflow: 'hidden' 
//     },
//     messageText: {
//         width: '75%',
//         color: 'rgba(153, 153, 153, 1)', 
//         fontSize: '14px', 
//         whiteSpace: 'nowrap', 
//         overflow: 'hidden',
//         display: 'inline-block'
//     },
//     activeChat: {
//         backgroundColor: '#d9d9d9',
//         border: '0px solid white',
//         borderRadius: '12px'
//     },
// }

// export default ChatCard;

import React, { useContext } from 'react'

import { ChatEngineContext } from 'react-chat-engine'

import _ from 'lodash'

// const { htmlToText } = require('html-to-text')

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

const ChatCard = props => {
    const { chat } = props
    const { conn, activeChat, setActiveChat } = useContext(ChatEngineContext)

    //if (_.isEmpty(chat) || props.loading) return <Loading />
    if (!conn || conn === null) return <div/>

    const extraStyle = activeChat === chat.id ? styles.activeChat : {}
    const title = chat?.title
    
    //let lastMessage = htmlToText(chat.last_message.text, {})
    let lastMessage = "Hi"
    // if (!lastMessage) {
    //     lastMessage = chat.last_message.attachments.length > 0 ?
    //     `${chat.last_message.attachments.length} image${chat.last_message.attachments.length > 1 ? 's' : ''}` :
    //     'Say hello!'
    // }

    function didReadLastMessage(chat) {
        let didReadLastMessage = true
        chat.people?.map(chat_person => {
            if(conn.userName === chat_person.person.username) {
                didReadLastMessage = chat.last_message.id === chat_person.last_read
            }
        })
        return didReadLastMessage
    }

    function daySinceSent(date) {
        if (!date) return ''
        return getDateTime(date, conn.offset).toString().substr(4, 6)
    }

    return (
        <div triggers={['onClick', 'onMouseEnter']} x={3} timing={60} width={'-webkit-fill-available'}>
            <div 
                onClick={() => setActiveChat(chat.id)}
                style={{ ...styles.chatContainer, ...extraStyle }}
                className={`ce-chat-card ${activeChat === chat.id && 'ce-active-chat-card'}`}
            >
                <div 
                    style={ styles.titleText }
                    className='ce-chat-title-text'
                    id={`ce-chat-card-title-${title}`}
                >
                    <div 
                        style={{ 
                            width: !didReadLastMessage(chat) && 'calc(100% - 18px)', 
                            overflowX: 'hidden', 
                            display: 'inline-block' 
                        }}
                    >
                        { title }
                    </div>
                    
                    {
                        !didReadLastMessage(chat) &&
                        <div 
                            className='ce-chat-unread-dot'
                            style={{ 
                                marginTop: '5px',
                                width: '12px',
                                height: '12px',
                                borderRadius: '6px',
                                backgroundColor: '#1890ff',
                                float: 'right', 
                                display: 'inline-block'
                            }} 
                        />
                    }
                </div>

                <div style={{ width: '100%' }} className='ce-chat-subtitle'>
                    <div style={styles.messageText} className='ce-chat-subtitle-text ce-chat-subtitle-message'>
                        { lastMessage }
                    </div>

                    <div 
                        className='ce-chat-subtitle-text ce-chat-subtitle-date'
                        style={{ ...styles.messageText, ...{ textAlign: 'right', width: '25%' } }}
                    >
                        { daySinceSent(chat?.last_message?.created) }
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles={
    chatContainer: { 
        padding: '16px', 
        paddingBottom: '12px',
        cursor: 'pointer'
    },
    titleText: { 
        fontWeight: '500',
        paddingBottom: '4px', 
        whiteSpace: 'nowrap', 
        overflow: 'hidden' 
    },
    messageText: {
        width: '75%',
        color: 'rgba(153, 153, 153, 1)', 
        fontSize: '14px', 
        whiteSpace: 'nowrap', 
        overflow: 'hidden',
        display: 'inline-block'
    },
    activeChat: {
        backgroundColor: '#d9d9d9',
        border: '0px solid white',
        borderRadius: '12px'
    },
}

export default ChatCard;