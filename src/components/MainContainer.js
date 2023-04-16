import React from 'react'
import StickyContainer from './StickyContainer'
import ScrollableContainer from './ScrollableContainer'

const MainContainer = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center">
      <StickyContainer/>
      <ScrollableContainer/>
    </div>
  )
}

export default MainContainer