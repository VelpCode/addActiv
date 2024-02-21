import React, { useState } from 'react'
import "./signin.css"
import Logo from "./Signindude.png";
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux"
import { authActions } from '../../store';


const Signin = () => {

    const dispatch = useDispatch();
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
        await axios
        .post("https://localhost:1000/api/v1/signin", Inputs)
        .then((response) => {
            sessionStorage.setItem("id", response.data.others_.id);
                dispatch(authActions.login)
            history("/todo")
        })
    
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