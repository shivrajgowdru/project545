import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { auth } from "../firebase"
import "./Login.css"
function Login() {
  const history = useHistory() //it allows us to programmatically change the url
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signIn = e => {
    e.preventDefault()
    // this line prevents the page from refreshing on sign in
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push("/")
      })
      .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault()
    //firebase registration
    auth
      .createUserWithEmailAndPassword(email, password) //this literally creates a email and password
      //then if everything goes perfectly right the above code returns a auth object
      .then(auth => {
        console.log(auth)
        if (auth) {
          history.push("/")
        }
      })
      .catch(error => alert(error.message))
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo_svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {/* we just mapped the email value to the email state above */}
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login__signin">
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon Conditions of use & Sale. Please see
          our Privacy Notice, our cookies notice and our Interest-based Ads
          Notice.
        </p>
        <button className="login__register" onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  )
}
export default Login
