import React from 'react'
import { useSignIn } from 'react-auth-kit'
import { Link } from 'react-router-dom'
//import UserContext from './src/components/Usercontext/Usercontext.js'

import './Login.css'

export default function SignInPage() {
    const signIn = useSignIn()
  
    const handleSignIn = (e) => {
      e.preventDefault()
      const formData = new FormData(e.target)
      const username = formData.get('first_name')
      const password = formData.get('password')
  
      // Perform authentication using signIn function from React Auth Kit
      signIn(username, password)
        .then((response) => {
          // Handle successful authentication
          console.log('Authentication successful:', response)
        })
        .catch((error) => {
          // Handle authentication error
          console.error('Authentication error:', error)
        })
    }
  
    return (
      <div className="login-container">
        <div className="login-card">
          <div className="text-center m-5-auto">
            <h1 className='login-title'>Sign in</h1><br/>
            <form className="login-form" onSubmit={handleSignIn}>
              <p>
                <label className="login-subtitle">Username or email address</label><br/>
                <input type="text" name="first_name" required />
              </p>
              <p>
                <label className="login-subtitle">Password</label><br/>
                <input type="password" name="password" required />
              </p>
              <Link to="/Forgot"><label className="right-label">Forget password?</label></Link>
              <p>
                <button id="sub_btn" type="submit">Login</button>
              </p>
            </form>
            <footer>
              <label className="login-subtitle">First time? <Link to="/Register">Create an account</Link></label>
              <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
          </div>
        </div>
      </div>
    )
  }
  