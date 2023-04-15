import React from 'react'
import Bio from './Bio'
import InternalNavigationBar from './InternalNavigationBar'
import Socials from './Socials'

const SubContainer1 = () => {
  return (
    <div className='md:sticky md:top-0 md:h-screen max-w-screen-md flex flex-col justify-start pt-8'>
      <Bio></Bio>
      <InternalNavigationBar></InternalNavigationBar>
      <Socials></Socials>
    </div>
  )
}

export default SubContainer1