import React from 'react'
import strath from '../assets/strath-logo.png';

const WorkHistoryItem2 = () => {
  return (     
    <div class="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
        <a href="https://www.strathmore.ac.ke/" class="flex justify-center">
            <img class="w-[56px] h-[56px] mt-4" src={strath} alt="Strathmore School Logo" />
        </a>
        <div class="px-5 py-2">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Strathmore School</h5>
            <h6 class="mb-2 text-lg font-bold tracking-tight text-gray-500">Assistant Teacher</h6>
            {/* 60 word lorem */}
            <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">As an assistant teacher at Strathmore School, I provided valuable support to teachers in delivering excellent educational experiences for students. My duties included preparing classroom materials, supervising students, assisting with lesson planning and implementation, grading assignments, and communicating with parents. I worked collaboratively with teachers to create a positive and engaging learning environment and provided individualized support to students who needed extra help.</p>
        </div>
        <p class="px-5 py-4 text-xs font-normal text-gray-500">January 2022 - April 2022</p>
    </div>
  )
}

export default WorkHistoryItem2