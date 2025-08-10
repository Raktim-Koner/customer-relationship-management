import React from 'react'
import SignUpRigtModel from './SignUpRightModel'
import SignUpLeftModel from './SignUpLeftModel'

const SignUpMainModel = () => {
  return (
    <div className="flex justify-center mt-28">
        <SignUpRigtModel/>
        <SignUpLeftModel/>
    </div>
  )
}

export default SignUpMainModel