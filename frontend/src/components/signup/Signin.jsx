import React, { useState } from 'react'
import "./signin.css"
import Logo from "./Signindude.png";
import axios from "axios"
import {useNavigate} from "react-router-dom"


const Signin = () => {


    const history = useNavigate();
    const [Inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value })
    };
    const submit = async (e) => {
        e.preventDefault();
    try {
        const response = await axios.post("http://localhost:1000/api/v1/signin", Inputs);
        // If the response is successful, navigate to the /active page.
        history("/active");
    } catch (error) {
        // If an error occurs, check the status code
        if (error.response && error.response.status === 404) {
            // Display a user-friendly error message for 404 errors
            alert('Invalid details');
        } else {
            // For other errors, you might want to display a generic error message
            alert('An error occurred. Please try again.');
        }
    }
}


  return (

    <div className="signin d-flex justify-content-center align-items-center">
    <div className="signblock">
        <div className='block-left'>
            <h1>Sign In</h1><br></br>
            <div className="infodetails">
                <input type="email" name="email" className="text" placeholder='Enter your email' onChange={change} value={Inputs.email}/>
            </div>
            <div className="passdetails">
                <input type="password" name="password" className="text" placeholder='Enter your password' onChange={change} value={Inputs.password}/>
            </div>
            <button className="signbtn" onClick={submit}>Sign In</button>
        </div>

        <div className="block-right">
            <img className="imagebro" src={Logo} alt=""></img>
        </div>
    </div>
</div>

  )
}

export default Signin