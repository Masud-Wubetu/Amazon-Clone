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
        <div>
          <h1>Sign-in</h1>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>
            Sign In
          </button>
        </div>
     </section>
  )
}

export default Auth
