import React from 'react';
import { Link } from "react-router-dom";
import DashNav from "../components/navs/DashNav";


const Now = () => {
    return (
        <>
        <Link to="/dashboard" id="backlink" className="nav-btn">
              <img alt="back icon" className="icon" src="icons/left-arrow.png"/>
        </Link>
            <p>Chat bot - send following information to listed guardians!</p>
            <DashNav />
        </>
    );
};

export default Now;