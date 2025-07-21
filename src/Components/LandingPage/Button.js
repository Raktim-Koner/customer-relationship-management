import React from 'react'
import { useNavigate } from 'react-router-dom'
const Button = () => {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/dashboard');
    }
   
  return (
    <div > 
        <button 
           style={{ backgroundColor: "#022B66" }}
           className="text-white px-8 py-4 ml-[55rem] rounded-full shadow-md hover:opacity-90 transition" onClick={handleClick}>
           GET STARTED →
      </button>
    </div>
  )
}

export default Button;
 