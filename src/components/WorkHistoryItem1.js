import React from 'react'
import wec from '../assets/wec-logo.jpg';

const WorkHistoryItem1 = () => {
  return (     
    <div id="work-history" class="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
        <a href="https://www.willfreight.com" class="flex justify-center">
            <img class="w-[56px] h-[56px] rounded-t-lg mt-4" src={wec} alt="Willfreight Logo" />
        </a>
        <div class="px-5 py-2">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Willfreight Express Cargo Services</h5>
            <h6 class="mb-2 text-lg font-bold tracking-tight text-gray-500">Software Engineer Intern</h6>
            {/* 60 word lorem */}
            <p class="mb-1 text-sm text-gray-600 dark:text-gray-400">During my 12-week internship at Willfreight, a freight and logistics company, I worked on developing a human resource management system. I collaborated with mentors and team members to ensure timely delivery of the project. The internship involved various stages of software development, including requirement specification, design, development, testing, and deployment. I also prepared user manuals and presentations to showcase the system's features and functionalities. Overall, the internship provided me with a practical learning experience in software development and teamwork.</p>
        </div> 
        <p class="px-5 py-4 text-xs font-normal text-gray-500">January 2023 - April 2023</p>
    </div>
  )
}

export default WorkHistoryItem1