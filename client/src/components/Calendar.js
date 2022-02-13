import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../styles/Calendar.css";

const CalendarFeat = () => {
    const [date, setDate] = useState(new Date());
    return (
        <>
            <div>
                <Calendar onChange={setDate} value={date} />
            </div>
        </>
    );
};

export default CalendarFeat;