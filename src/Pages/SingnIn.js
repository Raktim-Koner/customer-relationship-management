import React from 'react'
import SignInMainModal from '../Components/SignInPage/SignInMainModal'

const SingnIn = () => {
  return (
    <div>
        <SignInMainModal
           onForgotPasswordClick={() => console.log('Forgot Password Clicked')}
        />
          
    </div>
  )
}

export default SingnIn
