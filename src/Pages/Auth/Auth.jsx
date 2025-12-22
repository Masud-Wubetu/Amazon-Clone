import React, {useState, useContext} from 'react'
import {DataContext} from '../../Components/DataProvider/DataProvider'
import classes from './SignUp.module.css'
import {Link} from 'react-router-dom'
import {auth} from '../../Utility/firebase'
import {Type} from '../../Utility/action.type'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [{user}, dispatch] = useContext(DataContext);

  console.log(user);

  const authHandler = async (e) => {
    e.preventDefault();
    if(e.target.name === "signin") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user
          })
        })
        .catch((err) => {
          setError(err)
        })
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

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
              <input 
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               type="email" 
               id="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                type="password" 
                id="password" />
            </div>
            <button 
            onClick={authHandler} 
            type="submit"
            name="signin"
            className={classes.login_signInButton}>
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
          <button  
          onClick={authHandler} 
          type="submit"
          name="signup"
          className={classes.login_registerButton}>Create Your Amazon Account</button>
        </div>
     </section>
  )
}

export default Auth
