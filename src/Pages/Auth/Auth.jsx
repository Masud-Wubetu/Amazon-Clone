import React from 'react'
import classes from './SignUp.module.css'
import {Link} from 'react-router-dom'

function Auth() {
  return (
     <section className={classes.login}>
        <Link>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/960px-Amazon_logo.svg.png"
           alt="" />
        </Link>
     </section>
  )
}

export default Auth
