import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appoinment = () => {
    const [selectedDate,setSelectedDate]=useState(new Date())
    const handLeDateChange=date=>{
        setSelectedDate(date);
        console.log(selectedDate,"date");
    }
    return (
        <div>
            <Navbar/>
            <AppointmentHeader handLeDateChange={handLeDateChange}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;