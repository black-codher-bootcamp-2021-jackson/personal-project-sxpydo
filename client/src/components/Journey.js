import React from "react";
import { Link } from "react-router-dom";
import DashNav from "../components/navs/DashNav";


const Journey = () => {

    return(
        <>
        <Link to="/dashboard" id="backlink" className="nav-btn">
              <img alt="back icon" className="icon" src="icons/left-arrow.png"/>
        </Link>
        <p>Journey feature to have a live GPS location where you can start and end your journey and notify guardians
            when you have arrived safely!
        </p>
        <DashNav />
        </>
    )
}

export default Journey;