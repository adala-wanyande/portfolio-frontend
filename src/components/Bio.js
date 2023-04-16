import React from 'react'

const Bio = () => {
  return (
    <div className='px-4 mt-4'>
      <div>
        <h2 className="text-4xl font-extrabold dark:text-white max-w-lg">
          Hi, my name is <span className="text-blue-600 dark:text-blue-500">Adala</span> Wanyande.
        </h2>
      </div>
      <div className='mt-4 max-w-lg'>
        <p className='text-gray-500 text-base'>
          I'm a software developer with a strong inclination for frontend technologies, especially React. 
          I enjoy getting my hands dirty with frontend development and I have a preference for creating 
          visually appealing wireframes and mockups using Figma. There's nothing quite like the rush of 
          seeing my designs come to life through web development! As a man who's just starting out in 
          this exciting field, I can't wait to see what the future has in store for me and my development career.
        </p>
      </div>
    </div>
  )
}

export default Bio
