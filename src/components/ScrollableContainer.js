import React from 'react';
import WorkHistoryItem from './WorkHistoryItem';
import Subtitle from './Subtitle';
import ProjectItem from './ProjectItem';
import NavigationButton from './NavigationButton';
import Skill from './Skill';
import BlogItem from './BlogItem';
import CardPlaceholder from './CardPlaceholder'; 

const ScrollableContainer = ({ projects = [], blogs = [], workHistory = [] }) => {
  const renderProjects = projects.length > 0
    ? projects.map((projectObject, index) => (
        <ProjectItem key={`project-${index}`} projectObject={projectObject} />
      ))
    : <CardPlaceholder />;
    
  const renderBlogs = blogs.length > 0
    ? blogs.map((blogObject, index) => (
        <BlogItem key={`blog-${index}`} blogObject={blogObject} />
      ))
    : <CardPlaceholder />;
    
  const renderWorkHistory = workHistory.length > 0
    ? workHistory.map((workHistoryObject, index) => (
        <WorkHistoryItem key={`workhistory-${index}`} workHistoryObject={workHistoryObject} />
      ))
    : <CardPlaceholder />;

  return (
    <div className="overflow-y-auto flex flex-col">
      <Subtitle text='Work History' id="work-history" />
      {renderWorkHistory}
      <Subtitle text='Projects' id="projects" />
      {renderProjects}
      {/* <div className="flex justify-end mx-4">
        <NavigationButton buttonText="View All Projects" link="https://dev.to/benard-dev"></NavigationButton>
      </div> */}
      <Subtitle text='Skills' id="skills" />
      <Skill />
      <Subtitle text='Blogs' id="blogs" />
      {renderBlogs}
      <div className="flex justify-end mx-4 mb-4">
        <NavigationButton buttonText="View All Blogs" link="https://dev.to/benard-dev" />
      </div>
    </div>
  );
};

export default ScrollableContainer;
