import React from 'react'
import DocumentHead from '../Components/DocumentPage/DocumentHead'
import DocumentHelpLogo from '../Components/DocumentPage/DocumentHelpLogo'
import DocumentPopularLogo from '../Components/DocumentPage/DocumentPopularLogo'

const Document = () => {
  return (
    <div className='flex'>
      <DocumentHead/>
      <DocumentHelpLogo/>
      <DocumentPopularLogo/>

    </div>
  )
}

export default Document
