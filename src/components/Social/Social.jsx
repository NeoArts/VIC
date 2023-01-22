import React from 'react'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { FaCoffee } from 'react-icons/fa'
import "./Social.css"

function Social(props) {
  return (
    <div className='social-data'>
      <p>MAKE CONTACT</p>
      <FaCoffee size={124}/>
      <div className={'social-container ' + (props.direction === "horizontal" ? "horizontal" : "vertical")}>
        <a rel='noreferrer' target={"_blank"} href="https://www.instagram.com/lavimarey/">
          <BsInstagram size={48} style={{margin: "0px 10px"}}/>
        </a>
        <a rel='noreferrer' target={"_blank"} href="https://mail.google.com/mail/?view=cm&fs=1&to=lavimarey@gmail.com">
          <AiOutlineMail size={48} style={{margin: "0px 10px"}}/>
        </a>
        <a rel='noreferrer' target={"_blank"} href="https://wa.me/573196396684">
          <BsWhatsapp size={48} style={{margin: "0px 10px"}}/>
        </a>
      </div>
    </div>
  )
}

export default Social