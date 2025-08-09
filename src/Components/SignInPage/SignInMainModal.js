import React from 'react';
import SignInLeftModal from '../SignInPage/SigninLeftModal';
import RightModal from '../SignInPage/RightModal';

const SignInMainModal = () => (
    <div className="flex justify-center mt-28">  {/* Modal Box */}
      
      <SignInLeftModal />
      <RightModal />

    </div>
 
);

export default SignInMainModal;
