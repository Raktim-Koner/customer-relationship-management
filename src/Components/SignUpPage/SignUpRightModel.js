import React from 'react';
import SignUpInput from './SignUpInput';
import SignUpButton from './SignUpButton';

const SignUpRightModel = () => (
  <div className="p-8 bg-white w-[25rem] h-[30rem] rounded-l-2xl">
    <h2 className="text-4xl font-bold text-gray-800 mb-2 text-center px-5 py-2 space-x-4">
      <span className="text-blue-500 text-6xl font-semibold">C</span>reate{''}
      <span className="text-blue-500 text-6xl font-semibold">A</span>ccount
    </h2>
    
    <SignUpInput type="text" placeholder="Name" />
    <SignUpInput type="email" placeholder="Email" />
    <SignUpInput type="password" placeholder="Password" />
    <SignUpButton />

    <div className="flex justify-center mt-7 space-x-6">
      <button className="flex items-center space-x-2">
        <img
          src="https://img.icons8.com/color/48/000000/google-logo.png"
          alt="Google"
          className="w-8 h-8"
        />
        <span className="text-black">Google</span>
      </button>
      <button className="flex items-center space-x-2">
        <img
          src="https://img.icons8.com/color/48/000000/facebook-new.png"
          alt="Facebook"
          className="w-9 h-9"
        />
        <span className="text-black">Facebook</span>
      </button>
    </div>
  </div>
);

export default SignUpRightModel;
