import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle={
    background:"#F4FDFB",
    height:"100%"
}
const Dashboard = () => {
    const [selectedDate,setSelectedDate]=useState(new Date())
    const [appointments,setAppointments]=useState([])
    const handLeDateChange=date=>{
        setSelectedDate(date);
    }

    useEffect(()=>{
        fetch('http://localhost:5000/appointmentsByDate',{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({date:selectedDate})
        })
        .then(res=>res.json())
        .then(data=>setAppointments(data))
    },[selectedDate])
    return (
      <section style={containerStyle} className='container-fluid row'>
          <div className="col-md-2">
              <Sidebar></Sidebar>
          </div>
          <div className="col-md-5">
          <Calendar
                    onChange={handLeDateChange}
                    value={new Date()}
                />
          </div>
          <div className="col-md-5">
              <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
          </div>

      </section>
    );
};

export default Dashboard;