import React from 'react';
import { Link } from 'react-router-dom';


const RightModal = () => (
  <div className="pt-32 w-[25rem] rounded-r-2xl h-[30rem] bg-gradient-to-b from-purple-200 to-blue-400 text-white p-8">
    <h2 className="text-6xl font-medium mb-2 text-black">New Here??</h2>
    <p className="text-base text-black mb-10 text-center">If you don’t have an account</p>
    <Link to='/signup'>
          <button className="bg-white text-gray-700 px-8 py-2 rounded-xl shadow-md hover:bg-gray-100 transition block mx-auto ">SIGN-UP</button>

    </Link>
  </div>
);

export default RightModal;