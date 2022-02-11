import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav(props) {
  return (
    <nav className="nav">
      <div className="breadcrumb">
        <ul>
          <li className="nav-list">
          <Link to="/" id="homelink" className="nav-btn">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" id="aboutlink" className="nav-btn">
              About
            </Link>
          </li>
          <li>
            <Link to="/signup" id="signlink" className="nav-btn">
              Sign up
            </Link>
          </li>
          <li>
            <Link to="/login" id="loglink" className="nav-btn">
              Log in
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;