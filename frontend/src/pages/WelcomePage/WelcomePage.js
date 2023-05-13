import React from 'react'
import { Link } from 'react-router-dom'
import './WelcomePage.css'
export default function WelcomePage() {
    return (
        <div className="welcome-container">
        <div className="welcome-box">
            <h1 className="main-title home-page-title">welcome to our app</h1>
            //<img src="/utils/images/icon.svg" alt="App Icon" className="app-icon" />
         </div>
            <p>
            <div className="welcome-card">
            <div className="btn-section ">
            <Link to="/Register">
                <button className="welcome-button">Create Account</button>
            </Link>
            <Link to="/Signin">
                <button className="welcome-button">Login</button>
            </Link>
            <Link to="/">
                <button className="welcome-button">Log out</button>
            </Link>
            </div>
            </div>
            </p>
            
        </div>
    )
}