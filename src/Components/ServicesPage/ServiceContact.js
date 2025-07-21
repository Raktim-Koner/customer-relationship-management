import React from 'react'
import ContactLogo from './ContactLogo';
const ServiceContact = () => {
  return (
    <div> 
      <button className=" ml-16 mt-24 mr-15 bg-[#E1F7F8] border rounded-md px-7 py-7 flex items-center  hover:shadow-md transition duration-200 text-black font-semibold square border-black  ">
        <ContactLogo />
        Contact Us </button>
    </div>
  )
}

export default ServiceContact