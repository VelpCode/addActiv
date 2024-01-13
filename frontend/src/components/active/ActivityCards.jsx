import React from 'react'
import { AiFillDelete } from "react-icons/ai"

const ActivityCards = ({title, body}) => {
  return (
    <div className='p-3 mx-4 activcard'>
        <div>
            <h5>{title}</h5>
            <p className='todo-card-p'>{body.split("", 77)}...</p>
        </div>
        <AiFillDelete />
    </div>

  )
}

export default ActivityCards