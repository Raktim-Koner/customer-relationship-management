import React from 'react'
import ServiceHead from '../Components/ServicesPage/ServiceHead'
import ServiceSearchBar from '../Components/ServicesPage/ServiceSearchBar'
import ServiceHelp from '../Components/ServicesPage/ServiceHelp'
import ServiceChatBot from '../Components/ServicesPage/ServiceChatBot'
import ServiceContact from '../Components/ServicesPage/ServiceContact'
import ServiceTopics from '../Components/ServicesPage/ServiceTopics'
import ServiceRequest from '../Components/ServicesPage/ServiceRequest'
import ServiceDownload from '../Components/ServicesPage/ServiceDownload'
import ServicePolicy from '../Components/ServicesPage/ServicePolicy'
import ServiceLogo from '../Components/ServicesPage/ServiceLogo'
const Service = () => {
  return (
    <div>
        
        <div className="flex ml-9 mt-14 "> 
          <ServiceHead />
          <ServiceLogo />
          
          
        </div>

        <ServiceSearchBar />
      <div className='flex '> 
        <ServiceHelp />
        <ServiceTopics />
        <ServiceChatBot />
        <ServiceContact />
        
      </div>
      <div className='flex mt-36 ml-10'>
        <ServiceRequest/>
        <ServiceDownload/>
        <ServicePolicy/>
        



      </div>
    </div>
  )
}

export default Service