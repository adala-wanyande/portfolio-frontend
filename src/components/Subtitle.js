import React from 'react'

const Subtitle = ({id, text}) => {
  return (
    <div className="m-4">
        <h3 id={id} className="text-2xl font-bold text-gray-700">{text}</h3>
    </div>
  )
}

export default Subtitle