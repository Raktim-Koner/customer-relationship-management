import React from 'react'
import ContactLogo from './ContactLogo'


const ServiceContact = () => {
  return (
    <div className="flex gap-8 ml-16 mt-24">

      {/* Call Now Button */}
      <a href="tel:+919330122470">
        <button className="bg-[#E1F7F8] border rounded-md px-7 py-7 flex items-center hover:shadow-md transition duration-200 text-black font-semibold border-black">
          <ContactLogo />
          <span className="ml-3">Call Now</span>
        </button>
      </a>

    </div>
  )
}

export default ServiceContact