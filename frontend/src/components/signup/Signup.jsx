import React from 'react'
import "./signup.css"
import Logo from "./dudedraw.png";

const Signup = () => {
  return (

    <div className="signup d-flex justify-content-center align-items-center">
        <div className="signblock">
            <div className='block-left'>
                <h1>Create Account</h1><br></br>
                <div className="infodetails">
                <input type="text" className="text" placeholder='Enter your email' />
            </div>
            <div className="passdetails">
                <input type="text" className="text" placeholder='Enter your password'/>
                </div>
                <button class = "signbtn">Sign Up</button>
            </div>

            <div className="block-right">
                <img className = "imagebro "src = {Logo} alt = ""></img>
            </div>

        </div>
    </div>

  )
}

export default Signup