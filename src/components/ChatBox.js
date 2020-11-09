import React, { useState } from 'react'
import esc from './image/escape.jpg';
import styles from "./css/stylesChatBox.module.css";
import sendBoxIcon from './image/sendBoxIcon.jpg';
import paperclipIcon from './image/paperclip.jpg';
import userIcon from './image/userIcon.jpg';
import turkcellIcon from './image/turkcellIcon.jpg';

const ChatBox = ({ show, handleClose}) => {
  const showHideClassName = show ? " display-block" : styles.x;
  const ChatMessage = ({ message, user }) => {
    return (
      <div >
        <div>
          <div className={styles.userStyle}>{user}</div>
        </div>
        <div> <p className={styles.chatTittle}>{message}
        </p></div>
      </div>
    );
  }

  const ChatMessageHistory = ({ messages }) => {
    let createMessage = (message, index) => {
      let liStyles = (index === 0) ? styles.chatBubble1 : styles.chatBubble2 
      return (
        <div  className={styles.chatBoxRectangle}>
          <div className={styles.timestampStyle}>{message.timestamp}</div>
          <li className={liStyles}>
            <ChatMessage key={messages.id} message={message.message} user={message.user} />
          </li>
        </div>
      )
    };
    
    return <div >
      <ul className={styles.ulStyles} >{messages.map(createMessage)}</ul>
    </div>;
  };


  let d = new Date();
  let n = d.toLocaleTimeString();
  let MESSAGES = [
    {
      id: "1",
      user: "Turkcell Asistan",
      message: 'Merhaba! Ben Turkcell’in akıllı yardım asistanıyım.Size yardımcı olabileceğim konuyu yazabilir, ya da aşağıdaki önerilerden seçebilirsiniz.',
      timestamp: `${n}`, icon: `${turkcellIcon}`
    },
    { id: "2", user: "Siz", message: 'Arayan numaraları göremiyorum.', timestamp: `${n}`, icon: `${userIcon}` }
  ];

  const ChatWindow = () => {
    const [messages, setMessages] = useState(MESSAGES)
    const [inputText, setInputText] = useState('')
    const [userText] = useState("Siz")
    const [userIcons] = useState(userIcon)
  
    const handleSubmit = (e) => {
      e.preventDefault();
      let nextMessages = [...messages, { message: inputText, timestamp: n, user: userText, icon: userIcons }]
      let nextInputText = '';
      setMessages(nextMessages)
      setInputText(nextInputText)
    }
    
    const onChange = (e) => {
      setInputText(e.target.value)
    }
    return (
      <div className={styles.windowStyles}>
        <div className={styles.chatBox}><ChatMessageHistory messages={messages} /></div>

        <form className={styles.sendBox} onSubmit={handleSubmit}>
          <div className={styles.sendLine}></div>
          <input className={styles.burayaMesajnzYaz} type="text" placeholder="Buraya mesajınızı yazın" onChange={onChange} value={inputText} />
          <div >
            <img src={paperclipIcon} alt="paperclipIcon" className={styles.paperclipIcon} />
          </div>
          <button className={styles.sendButton}>
            <div >
              <img src={sendBoxIcon} alt="sendBoxIcon" className={styles.sendButtonIcon} />
            </div>
          </button>
        </form>
      </div>
    );
  }


  return (
    <div className={showHideClassName}>
      <div className={styles.Rectangle}>
        <div className={styles.bgColor}>
          <div onClick={handleClose} className={styles.escapeGrid}>
            <img src={esc} alt='esc' className={styles.escapeOval}  />
          </div>
          <div className={styles.Bold}>Dijital Asistan</div>
          <div className={styles.MesaiSaatleri080}>Size nasıl yardımcı olabileceğimizi yazabilir misin?</div>
        </div>
        <ChatWindow />
      </div>
    </div>

  )
}

export default ChatBox



