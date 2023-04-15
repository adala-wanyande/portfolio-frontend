import React from 'react'
import WorkHistoryItem1 from './WorkHistoryItem1'
import WorkHistoryItem2 from './WorkHistoryItem2'
import Subtitle from './Subtitle'
import ProjectItem from './ProjectItem'
import ProjectItem2 from './ProjectItem2'
import NavigationButton from './NavigationButton'
import Skill from './Skill'
import BlogItem from './BlogItem'

const SubContainer2 = () => {
  return (
    <div className="overflow-y-auto flex flex-col">
      <Subtitle text='Work History' id="work-history"></Subtitle>
      <WorkHistoryItem1></WorkHistoryItem1>
      <WorkHistoryItem2></WorkHistoryItem2>
      <Subtitle text='Projects' id="projects"></Subtitle>
      <ProjectItem></ProjectItem>
      <ProjectItem2></ProjectItem2>
      <div class="flex justify-end mx-4">
        <NavigationButton></NavigationButton>
      </div>
      <Subtitle text='Skills' id="skills"></Subtitle>
      <Skill></Skill>
      <Subtitle text='Blog' id="blogs"></Subtitle>
      <BlogItem></BlogItem>
      <div class="flex justify-end mx-4 mb-4">
        <NavigationButton></NavigationButton>
      </div>
    </div>
  )
}

export default SubContainer2