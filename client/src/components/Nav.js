import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Navbar = () => {
  return (
    <>
      <nav id="navbar" class="nav">
      <div id="navlist" class="nav-list">
        <Link to="/SignUp" className="nav-link">
            Sign up
          </Link>
        <Link to="/LogIn" className="nav-link">
            Log in
          </Link>
      </div>
      </nav> 
    </>
  );
};

export default Navbar;