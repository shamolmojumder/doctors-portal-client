import React, { useState } from 'react';
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
    const handLeDateChange=date=>{
        setSelectedDate(date);
        console.log(selectedDate,"date");
    }
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
              <AppointmentsByDate></AppointmentsByDate>
          </div>

      </section>
    );
};

export default Dashboard;