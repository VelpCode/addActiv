import React from 'react'
import { AiFillDelete } from "react-icons/ai"
import { TiUpload } from "react-icons/ti";

const ActivityCards = ({title, body}) => {
  return (
    <div className='p-3 mx-4 activcard'>
        <div>
            <h5>{title}</h5>
            <p className='todo-card-p'>{body.split("", 77)}...</p>
        </div>
        <div className='d-flex justify-content-between'>
          <div>
              <TiUpload className='card-icon-head' /> Update
          </div>
          <div>
              <AiFillDelete className='card-icon-head'/> Delete
          </div>
        </div>
    </div>

  )
}

export default ActivityCards