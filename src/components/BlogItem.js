import React from 'react'
import software from '../assets/Blog/my-software-journey.avif'

const BlogItem = () => {
  return (
    <div class="max-w-lg min-w-min bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
        <a href="https://www.strathmore.ac.ke/" class="flex justify-center">
            <img class="w-[300px] h-[300px] mt-4 rounded-md" src={software} alt="Software Journey"/>
        </a>
        <div class="px-5 py-2">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">My Journey as a Software Developer Starts</h5>
            <p class="mb-2 text-sm text-gray-600 dark:text-gray-400 min-w-[250px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
  )
}

export default BlogItem