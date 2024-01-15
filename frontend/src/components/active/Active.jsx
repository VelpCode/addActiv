import React, { useEffect, useRef, useState } from 'react';
import './active.css';
import ActivityCards from './ActivityCards';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

        if(Inputs.title === "" || Inputs.body === "") {
            toast.error('Enter activity Text!')

        } else {
            setArray([...Array, Inputs])
            setInputs({ title: "", body: "" });
            toast.dark('Activity Added')
            toast.error('Your toast is not saved, please signup.')
        }
        
    }

    const del = (id) => {
        const newArray = Array.filter((_, index) => index !== id);
        setArray(newArray);
        toast.error('Activity Deleted')
    }

    return (
        
        <div className="agdive">
            <ToastContainer />
            <div className="addwholesec">
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
            <div className="todo-body">
            <div className="container fluid">
                <div className='row'>
                    {Array && Array.map((item, index) => (
                        <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                            <ActivityCards title={item.title} body={item.body} id={index} del = { del }/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Active;
