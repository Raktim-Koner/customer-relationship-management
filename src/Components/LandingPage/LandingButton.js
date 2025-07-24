import React from 'react'
import { Link } from 'react-router-dom';
const LandingButton = () => {
    
  return (
    <div className=''> 
        <Link to="/dashboard">
          <button 
           style={{ backgroundColor: "#022B66" }}
           className="text-white px-9 py-4 ml-[4rem] font-semibold rounded-full shadow-md hover:opacity-90 transition" >
           GET STARTED →
         </button>
        </Link>
    </div>
  )
}

export default LandingButton;
 