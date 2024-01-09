import React from 'react'
import "./home.css"
import { IoAddCircleOutline } from "react-icons/io5";

const Home = () => {
  return (
    <div className = "home d-flex justify-center">
        <div className='continent'>
            <h1>Manage the boatload<br></br>of activities on your plate. <br></br></h1>
            <p>Elimate unnessary activies, stay on top of your goals and tasks<br></br>
            with the best activity tracker on the market    .</p>
            <button class = "dude">Add Activitiy <IoAddCircleOutline size={20} className="icon-vertical-adjust"/></button>
        </div>
    </div>
  )
};

export default Home;