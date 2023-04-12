import React from 'react'

const InternalNavigationBar = () => {
  return (
    <div className= "p-8 mb-4">
      <ul className="mx-4">
        <li>
          <a href="#" class="block py-2 hover-underline-animation">Work History</a>
        </li>
        <li>
          <a href="#" class="block-4 py-2 hover-underline-animation">Projects</a>
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