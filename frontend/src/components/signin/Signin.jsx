import React, { useState } from 'react'
import "./signin.css"
import Logo from "./Signindude.png";
import axios from "axios"

const Signin = () => {

    const [Inputs, setInputs] = useState({
        email: "",
        username: "",
        password: "",
    });
    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value })
    };
    const submit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:1000/api/v1/signin", Inputs)
        .then((response) => {
            console.log(alert(response.data.message));
        });
    }

  return (

    <div className="signin d-flex justify-content-center align-items-center">
        <div className="signblock">
            <div className='block-left'>
                <h1>Sign In</h1><br></br>
                <div className="infodetails">
                <input type="email" name = "email" className="text" placeholder='Enter your email' 
                value={Inputs.email}
                onChange={change}/>
            </div>
            <div className="passdetails">
                <input type="password" name = "password" className="text" placeholder='Enter your password'
                value={Inputs.password}
                onChange={change}/>
                </div>
                <button class = "signbtn" onClick={submit}>Sign In</button>
            </div>

            <div className="block-right">
                <img className = "imagebro "src = {Logo} alt = ""></img>
            </div>

        </div>
    </div>

  )
}

export default Signin