import React from 'react';
import WorkHistoryItem from './WorkHistoryItem';
import Subtitle from './Subtitle';
import ProjectItem from './ProjectItem';
import NavigationButton from './NavigationButton';
import Skill from './Skill';
import BlogItem from './BlogItem';
import CardPlaceholder from './CardPlaceholder'; 

const ScrollableContainer = ({projects, blogs, workHistory}) => {
  let renderProjects = <CardPlaceholder />;
  let renderBlogs = <CardPlaceholder />;
  let renderWorkHistory = <CardPlaceholder />;

  if (projects && blogs && workHistory) {
    renderProjects = 
      projects.map((projectObject, index) => {
        return (
          <ProjectItem key={`project-${index}`} projectObject={projectObject}></ProjectItem>
        );
      });

    renderBlogs = 
      blogs.map((blogObject, index) => {
        return (
          <BlogItem key={`blog-${index}`} blogObject={blogObject}></BlogItem>
        );
      });

    renderWorkHistory =
      workHistory.map((workHistoryObject, index) => {
        return (
          <WorkHistoryItem key={`workhistory-${index}`} workHistoryObject={workHistoryObject}></WorkHistoryItem>
        );
      });
  }

  return (
    <div className="overflow-y-auto flex flex-col">
      <Subtitle text='Work History' id="work-history"></Subtitle>
      {renderWorkHistory}
      <Subtitle text='Projects' id="projects"></Subtitle>
      {renderProjects}
      {/* <div className="flex justify-end mx-4">
        <NavigationButton buttonText="View All Projects" link="https://dev.to/benard-dev"></NavigationButton>
      </div> */}
      <Subtitle text='Skills' id="skills"></Subtitle>
      <Skill></Skill>
      <Subtitle text='Blogs' id="blogs"></Subtitle>
      {renderBlogs}
      <div className="flex justify-end mx-4 mb-4">
        <NavigationButton buttonText="View All Blogs" link="https://dev.to/benard-dev"></NavigationButton>
      </div>
    </div>
  );
};

export default ScrollableContainer;