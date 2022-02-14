import React from 'react';
import DashNav from "../components/navs/DashNav";
import Calendar from './Calendar';

const Bookings = () => {
    return (
        <>
            <h1>Ready, Steady, Plan</h1>
            <p>Plan in advance using the booking system to plan a safe journey with your guardian</p>
            <br />
            <Calendar />
            <DashNav />
        </>
    );
};

export default Bookings;