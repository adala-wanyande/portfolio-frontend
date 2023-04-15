import React from 'react'

const InternalNavigationBar = () => {
  return (
    <div className= "px-4 mt-8">
      <ul className="text-gray-700">
        <li>
          <a href="#work-history" class="block py-2 hover-underline-animation">Work History</a>
        </li>
        <li>
          <a href="#projects" class="block-4 py-2 hover-underline-animation">Projects</a>
        </li>
        <li>
          <a href="#" class="block py-2 hover-underline-animation">Skills</a>
        </li>
        <li>
          <a href="#" class="block py-2 hover-underline-animation">Blog</a>
        </li>
      </ul>
    </div>
  )
}

export default InternalNavigationBar