import React from 'react'
import { AuthProvider } from 'react-auth-kit'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Forgot from './pages/Forgot/Forgot'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import Home from './pages/Home/Home'
import Yoga from './pages/Yoga/Yoga'
import About from './pages/About/About'
import Tutorials from './pages/Tutorials/Tutorials'
import SignUpPage from './pages/Register/Register.js'
import WelcomePage from './pages/WelcomePage/WelcomePage.js'
import './App.css'

export default function App() {
  return (
    <AuthProvider authType = {'cookie'}
    authName={'_auth'}
    cookieDomain={window.location.hostname}
    cookieSecure={window.location.protocol === "https:"}>

    <Router>
      <Routes>
        <Route path='/' element={<WelcomePage />}/>
        <Route path='/Register' element={<SignUpPage />}/>
        <Route path='/Sign in' element={<Login />}/>
        <Route path='/Profile' element={<Profile />}/>
        <Route path='/Forgot' element={<Forgot />}/>
        <Route path='/Login' element={<Home />}/>
        <Route path='/start' element={<Yoga />} />
        <Route path='/about' element={<About />} />
        <Route path='/tutorials' element={<Tutorials />} />
      </Routes>
    </Router>
    </AuthProvider>
  )
}