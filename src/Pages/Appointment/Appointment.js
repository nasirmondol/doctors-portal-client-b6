import React, { useState } from 'react';
import AppointmentBanner from '../MakeAppointment/AppointmentBanner';
import AvailableAppointment from '../MakeAppointment/AvailableAppointment';
import Footer from '../Shared/Footer/Footer';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppointment
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;