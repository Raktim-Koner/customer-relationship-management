import React from 'react'
import DocumentCard from './DocumentCard'

const DocumentParaTwo = () => {
  return (
    <div>
        <DocumentCard>
          {/* write all text inside this*/ }
          <p className="text-black  bg-slate-50 ">
          <p className="font-bold font-serif "> 6.Notifications & Reminders <br/></p>
                  • How to view alerts for upcoming tasks or follow-ups.<br/>
                  • Setting up email or in-app notifications.<br/>
            <p className="font-bold font-serif"> 7.Reporting & Analytics<br/></p>
                  • Accessing sales reports and performance metrics.<br/>
                  • Quick steps to generate and view performance reports.<br/>
            <p className="font-bold font-serif"> 8.User Management & Settings<br/></p>
                  • Adding/removing team members.<br/>
                  • Adjusting user permissions and roles.<br/>
            <p className="font-bold font-serif"> 9.Integration Help<br/></p>
                  • Email client integration<br/>
                 • Calendar synchronization<br/>
                  • Third-party app connections<br/>
                  •Data import from other CRM<br/>
            <p className="font-bold font-serif"> 10.Contact Support<br/></p>
                  • How to reach support with Call.<br/>
                  • How to Technical Suppport Chat. <br/>
                  • What information to include in support requests.<br/>
                  • Community forums or knowledge base links.<br/>

          </p>
        </DocumentCard>
    </div>
  )
}

export default DocumentParaTwo