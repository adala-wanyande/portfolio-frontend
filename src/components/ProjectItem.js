import React from 'react'
import hrms from '../assets/Projects/hrms-preview.gif'

const ProjectItem = ({projectObject}) => {
  return (
    <div class="max-w-lg min-w-min bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
        <a href="https://www.strathmore.ac.ke/" class="flex justify-center">
            <img class="w-[300px] h-[150px] mt-4" src={hrms} alt="HRMS Preview"/>
        </a>
        <div class="px-5 py-2">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">HR Management System</h5>
            <h6 class="mb-2 text-lg font-bold tracking-tight text-gray-500">React, TailwindCSS</h6>
            <p class="mb-2 text-sm text-gray-600 dark:text-gray-400 min-w-[250px]">Developed a HR assistant web application that digitized the HR department processes such as onboarding, leave management, performance appraisal and employee management at WEC.</p>
        </div>
        <p class="px-5 py-4 text-xs font-normal text-gray-500">Github: <a class='font-medium text-blue-600 dark:text-blue-500 hover:underline' href="https://github.com/benard-dev/wec-hr-management-system">https://github.com/benard-dev/wec-hr-management-system</a></p>
        <p class="px-5 py-4 text-xs font-normal text-gray-500">January 2023 - April 2023</p>
        <p class="mx-5 my-4 bg-blue-100 text-blue-800 text-xs font-medium w-fit px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Open Source</p>
    </div>
  )
}

export default ProjectItem