import React, {useEffect, useState} from 'react'
import StickyContainer from './components/StickyContainer'
import ScrollableContainer from './components/ScrollableContainer'
import "./App.css"

const App = () => {
  const [projects, setProjects] = useState([])
  const [blogs, setBlogs] = useState([])
  const [workHistory, setWorkHistory] = useState([])

  function convertSnakeToCamel(obj) {
    return Object.keys(obj).reduce((acc, key) => {
      const camelKey = key.replace(/_\w/g, match => match[1].toUpperCase());
      acc[camelKey] = obj[key];
      return acc;
    }, {});
  }
  
  function convertApiData(data) {
    return data.map(obj => {
      const newObj = convertSnakeToCamel(obj);
      return newObj;
    });
  }
  
  useEffect(() => {
    fetch('http://localhost:4000/projects')
      .then(response => response.json())
      .then(data => {
        const camelCaseData = convertApiData(data);
        setProjects(camelCaseData);
      })
  })

  useEffect(() => {
    fetch('http://localhost:4000/blogs')
      .then(response => response.json())
      .then(data => {
        const camelCaseData = convertApiData(data);
        setBlogs(camelCaseData);
      })
  })

  useEffect(() => {
    fetch('http://localhost:4000/work-history')
      .then(response => response.json())
      .then(data => {
        const camelCaseData = convertApiData(data);
        setWorkHistory(camelCaseData);
      })
  })

  return (
    <div className="flex flex-col md:flex-row w-full justify-center">
      <StickyContainer/>
      <ScrollableContainer projects={projects} blogs={blogs} workHistory={workHistory}/>
    </div>
  )
}

export default App;
