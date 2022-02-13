import React from 'react';
import DashNav from "./DashNav";
import Calendar from './Calendar';

const Bookings = () => {
    return (
        <>
            <h1>Plan in advance using the booking system to plan a safe journey with your guardian</h1>
            <Calendar />
            <DashNav />
        </>
    );
};

export default Bookings;