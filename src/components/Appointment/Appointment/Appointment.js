import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';

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
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;