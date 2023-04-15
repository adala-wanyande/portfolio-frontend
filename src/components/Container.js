import React from 'react'
import SubContainer1 from './SubContainer1'
import SubContainer2 from './SubContainer2'

const Container = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <SubContainer1></SubContainer1>
      <SubContainer2></SubContainer2>
    </div>
  )
}

export default Container