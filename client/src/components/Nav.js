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
              <img alt="home icon" className="icon" src="icons/home.png"/>
            </Link>
          </li>
          <li>
            <Link to="/about" id="aboutlink" className="nav-btn">
            <img alt="about icon" className="icon" src="icons/info.png"/>
            </Link>
          </li>
          <li>
            <Link to="/signup" id="signlink" className="nav-btn">
              <img alt="sign up icon" className="icon" src="icons/signup.png"/>
            </Link>
          </li>
          <li>
            <Link to="/login" id="loglink" className="nav-btn">
              <img alt="log in icon" className="icon" src="icons/log-in.png"/>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;