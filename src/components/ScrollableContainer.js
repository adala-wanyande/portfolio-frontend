import React from 'react'
import WorkHistoryItem from './WorkHistoryItem'
import Subtitle from './Subtitle'
import ProjectItem from './ProjectItem'
import NavigationButton from './NavigationButton'
import Skill from './Skill'
import BlogItem from './BlogItem'

const dummyProjects = [
    {
      title: 'HR Management System',
      description: 'Developed a HR assistant web application that digitized the HR department processes such as onboarding, leave management, performance appraisal and employee management at WEC.',
      githubLink: 'https://github.com/benard-dev/wec-hr-management-system',
      skills: ['React', 'TailwindCSS'],
      coverImage: 'assets/Projects/hrms-preview.gif',
      openSource: true,
      startDate: 'January 2023',
      endDate: 'April 2023'
    },
    {
      title: 'WEC Company Website',
      description: 'Creating the Willfreight company website was an exciting project that involved collaboration between me and the client. I worked closely with Willfreight to develop a modern and user-friendly website that effectively showcases their services, values, and company culture, while providing a seamless user experience for visitors.',
      githubLink: 'https://github.com/benard-dev/wec-company-website',
      skills: ['React', 'TailwindCSS'],
      coverImage: 'assets/Projects/wcw-preview.gif',
      openSource: true,
      startDate: 'April 2023',
      endDate: 'Present'
    }
]

const dummyBlogs = [
  {
    title: "My Journey as a Software Developer Starts",
    teaserContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    coverImage: 'assets/Blog/my-software-journey.avif',
    link: "https://dev.to/benard-dev"
  },
  {
    title: "My Journey as a Software Developer Starts",
    teaserContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    coverImage: 'assets/Blog/my-software-journey.avif',
    link: "https://dev.to/benard-dev"
  }
]

const dummyWorkHistory = [
   {
    company: "Willfreight Express Cargo Services",
    position: "Software Engineer Intern",
    description: "During my 12-week internship at Willfreight, a freight and logistics company, I worked on developing a human resource management system. I collaborated with mentors and team members to ensure timely delivery of the project.",
    startDate: "January 2023",
    endDate: "April 2023",
    logo: "assets/WorkHistory/wec-logo.jpg",
    link: "https://www.willfreight.com"
  },
  {
    company: "Strathmore School",
    position: "Teaching Assistant, Computer Lab",
    description: "As a teaching assistant for the computer lab at Strathmore School, I assisted in the delivery of computer-based instruction to students. My responsibilities included setting up and maintaining computer equipment, monitoring student progress, and providing individualized assistance to students as needed. I played a key role in ensuring the smooth functioning of the computer lab and facilitating student learning.",
    startDate: "January 2023",
    endDate: "April 2023",
    logo: "assets/WorkHistory/strath-logo.png",
    link: "https://www.strathmore.ac.ke/"
  }
]

const ScrollableContainer = ({projects = dummyProjects, blogs = dummyBlogs, workHistory = dummyWorkHistory}) => {
  const renderProjects = 
    projects.map((projectObject, index) => {
      return (
        <ProjectItem key={`project-${index}`} projectObject={projectObject}></ProjectItem>
      )
    })

  const renderBlogs = 
    blogs.map((blogObject, index) => {
      return (
        <BlogItem key={`blog-${index}`} blogObject={blogObject}></BlogItem>
      )
  })

  const renderWorkHistory =
    workHistory.map((workHistoryObject, index) => {
      return (
        <WorkHistoryItem key={`workhistory-${index}`} workHistoryObject={workHistoryObject}></WorkHistoryItem>
      )
    })
      

  return (
    <div className="overflow-y-auto flex flex-col">
      <Subtitle text='Work History' id="work-history"></Subtitle>
      {renderWorkHistory}
      <Subtitle text='Projects' id="projects"></Subtitle>
      {renderProjects}
      <div class="flex justify-end mx-4">
        <NavigationButton buttonText="View All Projects" link="https://dev.to/benard-dev"></NavigationButton>
      </div>
      <Subtitle text='Skills' id="skills"></Subtitle>
      <Skill></Skill>
      <Subtitle text='Blogs' id="blogs"></Subtitle>
      {renderBlogs}
      <div class="flex justify-end mx-4 mb-4">
        <NavigationButton buttonText="View All Blogs" link="https://dev.to/benard-dev"></NavigationButton>
      </div>
    </div>
  )
}

export default ScrollableContainer
