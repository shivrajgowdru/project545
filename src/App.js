import React from "react"
import "./App.css"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Payment from "./Components/Payment"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Checkout from "./Components/Checkout"
import Login from "./Components/Login"
import { auth } from "./firebase"
import { useStateValue } from "./Components/StateProvider"
import { useEffect } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Orders from "./Components/Orders"

const promise = loadStripe(
  "pk_test_51K7a5USDHyAWhLfhWMQz6lFldcDRCaORZwbseY6J8i0pgxvaIZQBRsZh8vsa1IwapFKtn3GQh7e2Rof4qxxtnuVD003DTn8wRg"
)
//public key

function App() {
  const [{}, dispatch] = useStateValue()

  //creating a listner to keep track of who is logged in
  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
