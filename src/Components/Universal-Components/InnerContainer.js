import React from 'react'
import { Outlet } from 'react-router-dom';

const InnerContainer = () => {
  return (
    <div className='h-[40.6rem] w-[78rem] mx-[1rem] my-[1rem] rounded-lg border border-black' //total width 80=78 + left1 + right1
     style={{ backgroundColor: '#E1F7F8' }}
     >
      <Outlet/>
    </div>
  )
}

export default InnerContainer;