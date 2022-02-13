import React from "react";
import { Link } from "react-router-dom";


function DashNav(props) {
    return (
        <nav className="nav">
        <div className="breadcrumb">
          <ul>
            <li className="nav-list">
              <Link to="/settings" id="setlink" className="nav-btn">
                <img alt="settings icon" className="icon" src="icons/settings.png"/>
              </Link>
            </li>
            <li>
              <Link to="/bookings" id="bookinglink" className="nav-btn">
                <img alt="calendar icon" className="icon" src="icons/calendar.png"/>   
              </Link>
            </li>
            <li>
              <Link to="/now" id="nowlink" className="nav-btn">
                <img alt="now icon" className="icon" src="icons/now.png"/>
              </Link>
            </li>
            <li>
              <Link to="/guardian" id="guardlink" className="nav-btn">
                <img alt="guardian icon" className="icon" src="icons/user.png"/>
              </Link>
            </li>
            <li>
              <Link to="/journey" id="gpslink" className="nav-btn">
                <img alt="pin icon" className="icon" src="icons/pin.png"/>
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
  
  export default DashNav;