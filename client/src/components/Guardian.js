import React from 'react';
import { Link } from "react-router-dom";
import DashNav from "../components/navs/DashNav";


const Guardian = () => {
    return (
        <>
        <Link to="/dashboard" id="backlink" className="nav-btn">
              <img alt="back icon" className="icon" src="icons/left-arrow.png"/>
        </Link>
            <p>Input upto 6 guardians from their contacts</p>
            <DashNav />
        </>
    );
};

export default Guardian;