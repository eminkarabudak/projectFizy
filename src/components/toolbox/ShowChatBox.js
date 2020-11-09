import React,{useState,memo}  from 'react'
import ChatBox from "../ChatBox";
import selocanButton from '../image/selocanButton.jpg';

const ShowChatBox = () => {
  const [show, setShow] = useState(false)
  const handleClose = (e) => setShow(false);
  const handleShow = (e) => setShow(true); 
let buttonStyles={
  backgroundImage: `url(${selocanButton})`,
  width: '11%',
  height: '4%',
  borderRadius: "28px",
  boxShadow: '0 1px 2px 1px rgba(201, 200, 200, 0.5)',
  position: "absolute",
  bottom: '67px',
  right:"71px",
  zIndex: "3", 
  backgroundSize: "165px 60px",
  border: "none"
};

  return (
    <div >
      <button style={buttonStyles} onClick={handleShow}></button>
      <ChatBox show={show} handleClose={handleClose} />
   </div>
  )
}

export default memo(ShowChatBox)
