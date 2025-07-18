import React from 'react'
import Sidebar from './Sidebar'
import InnerContainer from './InnerContainer'
import { Outlet } from 'react-router-dom'

const MainContainer = () => {
  return (
    <div className='flex mt-1'>
        <Sidebar/>
        <InnerContainer/>
      
    </div>
  )
}

export default MainContainer
