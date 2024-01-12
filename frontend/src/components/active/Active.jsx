import React, { useEffect, useRef } from 'react';
import './active.css';

const Active = () => {
    const textareaRef = useRef(null);

    const showTextarea = () => {
        textareaRef.current.style.display = 'block';
    };

    const hideTextarea = (event) => {
        // If the clicked element is not the input or the textarea, hide the textarea
        if (!textareaRef.current.contains(event.target) && event.target.id !== "todo-input") {
            textareaRef.current.style.display = 'none';
        }
    };

    useEffect(() => {
        // Add when the component is mounted
        document.addEventListener("click", hideTextarea);
        // Remove when the component is unmounted
        return () => {
            document.removeEventListener("click", hideTextarea);
        };
    }, []);

    return (
        <div className="agdive">
            <div className="logheader">
                <h2 className='headingact'>Add <span style={{ color: '#7562FF' }}>∀ctivities</span></h2>
            </div>
            <div className="actbox">
                <div className="inputinputs">
                    <input id="todo-input" type="text" className="todo-inputs" placeholder='Activity Title' onClick={showTextarea} />
                    <textarea ref={textareaRef} id="textarea" type="text" className="todo-inputs" placeholder='Activity Tasks' style={{ display: 'none' }} />
                </div>
                <button className="addbutt">Add</button>
            </div>
        </div>
    )
}

export default Active;
