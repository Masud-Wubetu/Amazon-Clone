import React from 'react'
import classes from './SignUp.module.css'
import {Link} from 'react-router-dom'

function Auth() {
  return (
     <section className={classes.login}>
      {/* Logo */}
        <Link>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/960px-Amazon_logo.svg.png"
           alt="" />
        </Link>
        {/* form */}
        <div className={classes.login_container}>
          <h1>Sign-in</h1>
          <form action="">
            <div>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <button className={classes.login_signInButton}>
              Sign In
            </button>
          </form>
          {/* agreement */}
          <p>By signing in you agree to the AMAZON FAKE CLONE
             Conditions of use & sale. please see our privacy
             Notice, our Cookies notice and our Interest-based
             Ads Notice
          </p>

          {/* create account btn */}
          <button className={classes.login_registerButton}>Create Your Amazon Account</button>
        </div>
     </section>
  )
}

export default Auth
