import {Link} from "react-router-dom";
import logo from"../assets/images/logo.webp";
import "../index.css";


function Navbar() {
  return (
    <div id="header">
      <div id="siteinfo">

      </div>
      <img src={logo} className="logo"/>
    <div id="navbar">


      <Link className="navlink" to="/">Home</Link>
      <Link className="navlink"to="/about">About</Link>
      <Link className="navlink"to="/contact">Contact</Link>
      <Link className="navlink"to="/login">Login</Link>
   
      <br></br>
    </div>
    </div>
  )
}

export default Navbar;
