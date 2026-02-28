import React from 'react'
import Sidebar from './Sidebar'
import InnerContainer from './InnerContainer'
const MainContainer = () => {
  return (
    <div className='flex mt-1'>
        <Sidebar/>
        <InnerContainer/>
      
    </div>
  )
}

export default MainContainer
