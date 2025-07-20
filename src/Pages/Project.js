import React from 'react'
import Projectsearch from '../Components/ProjectPage/Projectsearch'
import Projectfilter from '../Components/ProjectPage/Projectfilter'
import Projectentry from '../Components/ProjectPage/Projectentry'
import Projecttable from '../Components/ProjectPage/Projecttable'
import ProjectName from '../Components/ProjectPage/ProjectName'
// import Projectdone from '../Components/ProjectPage/Projectdone'

const Project = () => {
  return (
    <div>
      <ProjectName/>
      <div className='flex ml-4 mt-8'>
        <Projectsearch/>
        <Projectfilter/>
        <Projectentry/>
      </div>
      {/* <Projectdone/> */}
      <Projecttable/>
    </div>
  )
}

export default Project