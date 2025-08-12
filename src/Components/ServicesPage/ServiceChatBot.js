import React from 'react'
import ChatBotLogo from './ChatBotLogo'
import { Link } from 'react-router-dom';
const ServiceChatBot = () => {
  return (
    <div>
      <Link to="/services/chat">
        <button className="ml-16 mt-24 mr-15 bg-[#E1F7F8] border rounded-md px-7 py-7 flex items-center space-x-2 hover:shadow-md transition duration-200 text-black font-semibold square border-black    ">

        <ChatBotLogo />
        Chat With Us</button>
      </Link>
      
       
    </div>
  )
}

export default ServiceChatBot