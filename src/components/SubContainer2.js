import React from 'react'
import WorkHistoryItem1 from './WorkHistoryItem1'
import WorkHistoryItem2 from './WorkHistoryItem2'
import Subtitle from './Subtitle'
import ProjectItem from './ProjectItem'

const SubContainer2 = () => {
  return (
    <div className="w-full overflow-y-auto flex flex-col justify-center m-4">
      <Subtitle text='Work History' id="work-history"></Subtitle>
      <WorkHistoryItem1></WorkHistoryItem1>
      <WorkHistoryItem2></WorkHistoryItem2>
      <Subtitle text='Projects' id="projects"></Subtitle>
      <ProjectItem></ProjectItem>
      <Subtitle text='Skills' id="skills"></Subtitle>
    </div>
  )
}

export default SubContainer2