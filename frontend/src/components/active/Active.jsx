import React from 'react'
import './active.css'


const Active = () => {
  return (

    <div className="agdive">
        <div className="logheader">
        <h2 className='headingact'>Add <span style={{ color: '#7562FF' }}>∀ctivities</span></h2>
        </div>
        <div className="actbox">
            <div className="inputinputs">
            <input type="text" className="textbawk" placeholder='Activity Title' />
            <input type="text" className="textbawsk" placeholder='Activity Tasks' />
            </div>
            <button class = "addbutt">Add</button>
        </div>
    </div>


    )
}

export default Active