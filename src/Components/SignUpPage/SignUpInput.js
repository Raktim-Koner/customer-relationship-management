import React from 'react'

const SignUpInput = ({ type, placeholder, icon, extraIcon }) => (
  <div className="mt-5">
    <div className="flex items-center bg-gray-200 rounded-md px-4 py-3 border border-transparent focus-within:border-black">
      <span className="material-icons text-grey-400 mr-2">{icon}</span>
      <input type={type} placeholder={placeholder} className="bg-transparent w-full outline-none" />
      {extraIcon && <span className="material-icons text-gray-600 ml-2 cursor-pointer">{extraIcon}</span>}
    </div>
  </div>
);

export default SignUpInput