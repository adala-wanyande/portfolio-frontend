import React from 'react'
import wec from '../assets/Projects/wcw-preview.gif'

const ProjectItem2 = () => {
  return (
    <div class="max-w-lg min-w-min bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
        <a href="https://www.strathmore.ac.ke/" class="flex justify-center">
            <img class="w-[300px] h-[150px] mt-4 rounded-md" src={wec} alt="WEC Company Website Preview"/>
        </a>
        <div class="px-5 py-2">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">WEC Company Website</h5>
            <h6 class="mb-2 text-lg font-bold tracking-tight text-gray-500">React, TailwindCSS</h6>
            <p class="mb-2 text-sm text-gray-600 dark:text-gray-400 min-w-[250px]">Creating the Willfreight company website was an exciting project that involved collaboration between me and the client. I worked closely with Willfreight to develop a modern and user-friendly website that effectively showcases their services, values, and company culture, while providing a seamless user experience for visitors.</p>
        </div>
        <p class="px-5 py-4 text-xs font-normal text-gray-500">Github: <a class='font-medium text-blue-600 dark:text-blue-500 hover:underline' href="https://github.com/benard-dev/wec-company-website">https://github.com/benard-dev/wec-company-website</a></p>
        <p class="px-5 py-4 text-xs font-normal text-gray-500">April 2023 - Present</p>
        <p class="mx-5 my-4 bg-blue-100 text-blue-800 text-xs font-medium w-fit px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Open Source</p>
    </div>
  )
}

export default ProjectItem2