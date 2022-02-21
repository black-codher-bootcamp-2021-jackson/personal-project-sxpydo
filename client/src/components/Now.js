import React from 'react';
import { Link } from "react-router-dom";
import DashNav from "../components/navs/DashNav";


const Now = () => {
    return (
        <>
        <Link to="/dashboard" id="backlink" className="nav-btn">
              <img alt="back icon" className="icon" src="icons/left-arrow.png"/>
        </Link> 
            <img style={{height: "150px"}} alt="coming soon icon" className="icon" src="icons/coming-soon.png"/>
            <DashNav />
        </>
    );
};

export default Now;