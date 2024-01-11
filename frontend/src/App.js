import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home';
import Footer from './components/footer/Footer'
import About from './components/about/About';
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';
import Active from './components/active/Active';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path = "/" element={<Home/>}/>
          <Route path = "/about" element={<About/>}/>
          <Route path = "/signup" element={<Signup/>}/>
          <Route path = "/signin" element={<Signin/>}/>
          <Route path = "/active" element={<Active/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App