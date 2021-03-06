import React from "react"
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { Link } from "react-router-dom"
import { useStateValue } from "./StateProvider"
import { auth } from "../firebase"
function Header() {
  const [{ basket, user }] = useStateValue() //code to pull data into data layer

  const handleAuthentication = () => {
    if (user) {
      auth.signOut()
    }
  }
  return (
    <div className="header ">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login">
          {/* if user exist on click dont render to login page */}
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
              Hello {!user ? "guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns </span>
          <span className="header__optionLineTwo">& Orders </span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your </span>
          <span className="header__optionLinetwo">Prime </span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
            {/* ? refers to optional chaining to gracefully exit on error */}
          </div>
        </Link>
      </div>
    </div>
  )
}
export default Header
