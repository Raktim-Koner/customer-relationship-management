import React from 'react'
import SignUpLeftModel from './SignUpLeftModel'
import SignUpRightModel from './SignUpRightModel'

const SignUpMainModel = () => {
  return (
    <div className="flex justify-center mt-28">
        <SignUpLeftModel/>
        <SignUpRightModel/>
    </div>
  )
}

export default SignUpMainModel