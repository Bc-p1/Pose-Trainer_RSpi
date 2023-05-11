import React from 'react'
import { Link } from 'react-router-dom'
import './WelcomePage.css'
export default function WelcomePage() {
    return (
        <div className="WelcomePage-header">
            <div className="text-center">
            <h1 className="main-title home-page-title">welcome to our app</h1>
            </div>
            <p>
            <div className="btn-section ">
            <Link to="/Register">
                <button className="primary-button">Create Account</button>
            </Link>
            <Link to="/Signin">
                <button className="primary-button">Login</button>
            </Link>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
            </div>
            </p>
            
        </div>
    )
}