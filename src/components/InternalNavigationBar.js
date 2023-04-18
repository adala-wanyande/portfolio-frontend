import React from 'react'

const InternalNavigationBar = () => {
  return (
    <div className="px-4 mt-8">
      <ul className="text-gray-700">
        <li>
          <a href="#work-history" className="py-2 hover-underline-animation">Work History</a>
        </li>
        <li>
          <a href="#projects" className="py-2 hover-underline-animation">Projects</a>
        </li>
        <li>
          <a href="#skills" className="py-2 hover-underline-animation">Skills</a>
        </li>
        <li>
          <a href="#blogs" className="py-2 hover-underline-animation">Blogs</a>
        </li>
      </ul>
    </div>
  )
}

export default InternalNavigationBar