import React from 'react'
import ServiceTopicsLogo from './ServiceTopicsLogo'
const ServiceTopics = () => {
  return (
    <div>
        <button className="ml-16 mt-24 mr-15 bg-[#E1F7F8] border rounded-md px-7 py-7 flex items-center space-x-2 hover:shadow-md transition duration-200 text-black font-semibold square border-black   ">
          <ServiceTopicsLogo />
          Popular Topics</button>
    </div>
  )
}

export default ServiceTopics