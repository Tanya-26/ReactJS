import React from 'react'
import C from './C'
const B = ({name}) => {
  return (
    <div>
      Component B inside A
      <C name={name}/>
    </div>
  )
}

export default B
