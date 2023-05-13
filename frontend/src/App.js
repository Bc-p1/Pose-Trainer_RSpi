import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Forgot from './pages/Forgot/Forgot'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Yoga from './pages/Yoga/Yoga'
import About from './pages/About/About'
import Tutorials from './pages/Tutorials/Tutorials'

import './App.css'
import SignUpPage from './pages/Register/Register.js'
import WelcomePage from './pages/WelcomePage/WelcomePage.js'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<WelcomePage />}/>
        <Route path='/Register' element={<SignUpPage />}/>
        <Route path='/Signin' element={<Login />}/>
        <Route path='/Forgot' element={<Forgot />}/>
        <Route path='/Login' element={<Home />}/>
        <Route path='/start' element={<Yoga />} />
        <Route path='/about' element={<About />} />
        <Route path='/tutorials' element={<Tutorials />} />
      </Routes>
    </Router>
  )
}


