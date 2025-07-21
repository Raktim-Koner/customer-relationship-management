import React from 'react'
import DocumentLogo from './DocumentLogo'; // Importing the DocumentLogo component
// Corrected path to the image
const ServiceHelp = () => {
  return (
    <div >
       
      <button className=" ml-10 mt-24 mr-15 bg-[#E1F7F8] border rounded-md px-6 py-5 flex items-center  hover:shadow-md transition duration-200 text-black font-semibold square border-black  ">
      <DocumentLogo />
        Help Documentation
      </button>
      
    </div>
  )
}

export default ServiceHelp
