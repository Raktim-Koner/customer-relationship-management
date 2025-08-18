import React from 'react'
import { Link } from 'react-router-dom';


const SignUpLeftModel = () => {
  return (
<div className="pt-32 w-[25rem] rounded-l-2xl h-[30rem] bg-gradient-to-b from-purple-200 to-blue-400 text-white p-8">
    <h2 className="text-5xl font-medium mb-10 text-black">Welcome Back</h2>
    <p className="text-base text-black mb-10 text-center">If you are already registered</p>
    <Link to='/signin'>
      <button className="bg-white text-gray-700 px-8 py-2 rounded-xl shadow-md hover:bg-gray-100 transition block mx-auto ">SIGN-IN</button>
    </Link>
  </div>
  )
}

export default SignUpLeftModel