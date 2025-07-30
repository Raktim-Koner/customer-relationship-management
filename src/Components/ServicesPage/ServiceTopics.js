import React from 'react'
import ServiceTopicsLogo from './ServiceTopicsLogo'
import { Link } from 'react-router-dom'; 
// Importing the ServiceTopicsLogo component
const ServiceTopics = () => {
  return (
    <div>
      <Link to="/services/documents" >
        <button className="ml-16 mt-24 mr-15 bg-[#E1F7F8] border rounded-md px-7 py-7 flex items-center    space-x-2 hover:shadow-md transition duration-200 text-black font-semibold square border-black   ">
          <ServiceTopicsLogo />
          Popular Topics</button>
      </Link>
    </div>
  )
}

export default ServiceTopics