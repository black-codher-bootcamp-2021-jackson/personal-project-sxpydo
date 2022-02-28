import React from "react";
import { Link } from "react-router-dom";
import Map from "./features/Map";
import DashNav from "./navs/DashNav";


const Journey = () => {

    return(
        <>  
            <Link to="/dashboard" id="backlink" className="nav-btn">
                <img alt="back icon" className="icon" src="icons/left-arrow.png"/>
            </Link>
        <Map /> <br /><br />
        <p>Add a start and end location on live GPS maps to notify your selected guardians 
           when you have reached your chosen destination safely - all in real time!</p>
        <DashNav />
        </>
    )
}

export default Journey;