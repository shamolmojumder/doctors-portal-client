import React from 'react';

const AppointmentsByDate = ({appointments}) => {
    console.log(appointments);
    return (
        <div>
            <h2>AppointmentsByDate : {appointments.length} </h2>
            {
                appointments.map(app=> <li key={app._id}> {app.firstName} </li> )
            }
        </div>
    );
};

export default AppointmentsByDate;