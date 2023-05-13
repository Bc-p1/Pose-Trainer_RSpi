import React from 'react'
import { Link } from 'react-router-dom'

import './Login.css'

export default function SignInPage() {
    return (
        <div className="login-container">
        <div className="login-card">
        <div className="text-center m-5-auto">
            <h1 className='login-title'>Sign in</h1>
            <form className="login-form">
                <p>
                    <label  className="white-label">Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                   
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/Forgot"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                  <Link to='/login'> <button id="sub_btn" type="submit">Login</button>
                  </Link> 
                </p>
            </form>
            <footer>
                <label className="white-label">First time? <Link to="/Register">Create an account</Link></label>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </div>
        </div>
    )
}