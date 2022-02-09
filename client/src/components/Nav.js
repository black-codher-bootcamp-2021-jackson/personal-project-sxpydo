import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav(props) {
  return (
    <div className="header">
      <h1>Step Out</h1>
      <div className="breadcrumb">
        <ul>
          <li>
            <Link to="/" id="homelink">         
              Home
            </Link>
          </li>
          <li className="active">
            <Link to="/about" id="aboutlink">
              Our mission
            </Link>
          </li>
          <li>
            <Link to="/signup" id="signlink">
              Sign up
            </Link>
          </li>
          <li>
            <Link to="/login" id="loglink">
              Log in
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;