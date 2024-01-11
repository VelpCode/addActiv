import React from 'react'
import "./signin.css"
import Logo from "./Signindude.png";

const Signin = () => {
  return (

    <div className="signin d-flex justify-content-center align-items-center">
        <div className="signblock">
            <div className='block-left'>
                <h1>Sign In</h1><br></br>
                <div className="infodetails">
                <input type="text" className="text" placeholder='Enter your email' />
            </div>
            <div className="passdetails">
                <input type="text" className="text" placeholder='Enter your password'/>
                </div>
                <button class = "signbtn">Sign In</button>
            </div>

            <div className="block-right">
                <img className = "imagebro "src = {Logo} alt = ""></img>
            </div>

        </div>
    </div>

  )
}

export default Signin