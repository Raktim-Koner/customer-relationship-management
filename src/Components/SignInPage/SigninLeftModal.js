import React from 'react';
import SignInInput from './SignInInput';
import SignInButton from './SignInButton';

const SignInLeftModal = () => (
  <div className="p-8 bg-white w-[25rem] h-[30rem] rounded-l-2xl" >
    <h2 className="text-4xl font-bold text-gray-800 mb-2">
      <span className="text-blue-500 text-6xl font-semibold ml-24">S</span>ign <span className="text-blue-500 text-6xl font-semibold">I</span>n
    </h2>
    <p className="text-sm text-gray-600 mb-14 h-7 ml-24">Use email and password</p>

    <SignInInput type="email" placeholder="Email" />
    <SignInInput type="password" placeholder="Password" />
    <SignInButton  />

    <div className="text-right mr-[6.5rem] mt-4 text-sm text-black cursor-pointer">Forgot Password?</div>

    

    <div className="flex justify-center mt-12 space-x-6">
      <button className="flex items-center space-x-2">
        <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" className="w-8 h-8" />
        <span className="text-black">Google</span>
      </button>
      <button className="flex items-center space-x-2">
        <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" className="w-9 h-9" />
        <span className="text-black">Facebook</span>
      </button>
    </div>
  </div>
);

export default SignInLeftModal;
