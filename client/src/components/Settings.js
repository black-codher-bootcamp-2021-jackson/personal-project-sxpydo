import React from 'react';
import { Link } from "react-router-dom";
import DashNav from "../components/navs/DashNav";


const Settings = () => {
    return (
        <>
        <Link to="/dashboard" id="backlink" className="nav-btn">
              <img alt="back icon" className="icon" src="icons/left-arrow.png"/>
        </Link>
            <p>Edit your profile info, profile photo, notifications, location privacy, enable/disable battery saver feature, 
                clear app cache feature</p>
        <DashNav />
        </>
    );
};

export default Settings;