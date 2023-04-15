import React from 'react'
import strath from '../assets/WorkHistory/strath-logo.png';

const WorkHistoryItem2 = () => {
  return (     
    <div class="max-w-lg min-w-min bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
        <a href="https://www.strathmore.ac.ke/" class="flex justify-center">
            <img class="w-[56px] h-[56px] mt-4" src={strath} alt="Strathmore School Logo" />
        </a>
        <div class="px-5 py-2">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Strathmore School</h5>
            <h6 class="mb-2 text-lg font-bold tracking-tight text-gray-500">Teaching Assistant, Computer Lab</h6>
            {/* 60 word lorem */}
            <p class="mb-2 text-sm text-gray-600 dark:text-gray-400 min-w-[250px]">As a teaching assistant for the computer lab at Strathmore School, I assisted in the delivery of computer-based instruction to students. My responsibilities included setting up and maintaining computer equipment, monitoring student progress, and providing individualized assistance to students as needed. I played a key role in ensuring the smooth functioning of the computer lab and facilitating student learning.</p>
        </div>
        <p class="px-5 py-4 text-xs font-normal text-gray-500">January 2022 - April 2022</p>
    </div>
  )
}

export default WorkHistoryItem2