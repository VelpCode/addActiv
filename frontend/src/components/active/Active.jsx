import React, { useEffect, useRef, useState } from 'react';
import './active.css';


const Active = () => {
    
    
    const [Inputs, setInputs] = useState({ title: "", body: ""});
    const [Array, setArray] = useState([]);

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

    const change = (e) => {

        const {name,value} = e.target;
        setInputs({...Inputs,[name]: value});
    }

    useEffect(() => {
        // Add when the component is mounted
        document.addEventListener("click", hideTextarea);
        // Remove when the component is unmounted
        return () => {
            document.removeEventListener("click", hideTextarea);
        };
    }, []);

    const submit = () => {
        setArray([...Array, Inputs])
        setInputs({ title: "", body: "" });
    }
    console.log(Array)

    return (
        
        <div className="agdive">
            <div className="logheader">
                <h2 className='headingact'>Add <span style={{ color: '#7562FF' }}>∀ctivities</span></h2>
            </div>
            <div className="actbox">
                <div className="inputinputs">
                    <input id="todo-input" type="text" className="todo-inputs" placeholder='Activity Title' onClick={showTextarea} name = "title" value = {Inputs.title} onChange={change}/>
                    <textarea ref={textareaRef} id="textarea" type="text" className="todo-inputs" name="body" placeholder='Activity Tasks' value={Inputs.body} onChange={change} style={{ display: 'none' }} />
                </div>
                <button className="addbutt" onClick={submit}>Add</button>
            </div>
        </div>
    )
}

export default Active;
