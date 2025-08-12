import React from 'react'
import DocumentCard from './DocumentCard';


const DocumentParaOne = () => {
  return (
    <div>
        <DocumentCard>
          {/* write all text inside this*/ }
          <p className="text-black "> 
                   <p className="font-bold "> 1.Introduction<br /></p>
                    • Briefly explain what the CRM does and who it's for.
                    <br />
                   <p className="font-bold "> 2. Getting Started<br /></p>
                      • Login/Signup – How to log in or create an account.<br />
                      • Dashboard Overview – Key sections (e.g., Deals, Contacts, Projects, Reports).
                    <br />
                    <p className="font-bold ">3.Core Features & Quick Actions</p>
                       • Add a Customer – Steps to create a new customer profile.<br/>
                       • Create a Deal – Steps to log and track a sales opportunity.<br/>
                       • Assign a Task/Project – How to assign work to team members.<br/>
                       • Update Status – How to change the progress stage of a deal/project.<br/>
                   <p className="font-bold "> 4.Search and Filters<br /></p>
                       • Advanced search techniques<br />
                       • Creating and saving custom filters<br />
                       • Using tags and categories effectively<br />
                   <p className="font-bold "> 5.Troubleshooting</p>
                       • Login issues and password reset<br />
                       • Data sync problems<br />
                       • Performance optimization tips<br />
                       • Common error messages and solutions<br />
                      • Browser compatibility requirements<br />
                    
          </p>
        </DocumentCard>
    </div>
  )
}

export default DocumentParaOne