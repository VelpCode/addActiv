import React, { useState } from 'react'
import "./signup.css"
import Logo from "./dudedraw.png";
import axios from "axios";
import {useNavigate} from "react-router-dom"


const Signup = () => {
    const history = useNavigate();
    const [Inputs, setInputs] = useState({
        email: "", 
        username:"", 
        password:"",
    })
    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value })
    };
    const submit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:1000/api/v1/register", Inputs)
        .then((response) => {
            if(response.data.message === "User Already Exists") {
                alert(response.data.message);
            } else {
                alert(response.data.message);
                setInputs({
                    email: "", 
                    username:"", 
                    password:"",
                });
                history("/signin");
            }
            
        });
    }
  return (

    <div className="signup d-flex justify-content-center align-items-center">
        <div className="signblock">
            <div className='block-left'>
                <h1>Create Account</h1><br></br>
            <div className="infodetails">
                <input type="email" name = "email" className="text" placeholder='Enter your email' onChange={change} value = {Inputs.email}/>
            </div>
            <div className="userdetails">
                <input type="username" name = "username" className="text" placeholder='Enter your username' onChange={change} value = {Inputs.username}/>
            </div>
            <div className="passdetails">
                <input type="password" name = "password" className="text" placeholder='Enter your password' onChange={change} value = {Inputs.password}/>
            </div>
                <button class = "signbtn" onClick={submit}>Sign Up</button>
            </div>

            <div className="block-right">
                <img className = "imagebro "src = {Logo} alt = ""></img>
            </div>

        </div>
    </div>

  )
}

export default Signup