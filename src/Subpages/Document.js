import React from 'react'
import DocumentHead from '../Components/DocumentPage/DocumentHead'
import DocumentHelpLogo from '../Components/DocumentPage/DocumentHelpLogo'
import DocumentPopularTopics from '../Components/DocumentPage/DocumentPopularTopics'

const Document = () => {
  return (
    <div className='flex'>
      <DocumentHead/>
      <DocumentHelpLogo/>
      <DocumentPopularTopics/>
   </div>
  )
}

export default Document
