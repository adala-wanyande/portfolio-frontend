import React, {useEffect, useState} from 'react'
import StickyContainer from './components/StickyContainer'
import ScrollableContainer from './components/ScrollableContainer'
import "./App.css"

const App = () => {
  const [projects, setProjects] = useState([])
  const [blogs, setBlogs] = useState([])
  const [workHistory, setWorkHistory] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:4000/blogs')
      .then(response => response.json())
      .then(data => setBlogs(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:4000/work-history')
      .then(response => response.json())
      .then(data => setWorkHistory(data))
  }, [])

  return (
    <div className="flex flex-col md:flex-row w-full justify-center">
      <StickyContainer/>
      <ScrollableContainer projects={projects} blogs={blogs} workHistory={workHistory}/>
    </div>
  )
}

export default App;
