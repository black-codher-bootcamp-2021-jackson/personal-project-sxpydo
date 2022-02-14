import React from 'react';
import { Link } from "react-router-dom";
import DashNav from "../components/navs/DashNav";
import Calendar from './Calendar';

const Bookings = () => {
    return (
        <>
            <Link to="/dashboard" id="backlink" className="nav-btn">
              <img alt="back icon" className="icon" src="icons/left-arrow.png"/>
            </Link><h1>Ready, Steady, Plan</h1>
            <p>Plan in advance using the booking system to plan a safe journey with your guardian</p>
            <br />
            <Calendar />
            <DashNav />
        </>
    );
};

export default Bookings;