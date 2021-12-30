import React from 'react';
import AppointmentsShortList from '../AppointmentsShortList/AppointmentsShortList';

const AppointmentsByDate = ({appointments}) => {
  
    return (
        <div>
            <h2>AppointmentsByDate : {appointments.length} </h2>

            {
                
                appointments.length? <AppointmentsShortList appointments={appointments}></AppointmentsShortList>
                :
                <div className='p-5'>
                    <h4 className='lead text-center'>No Appointsment Found</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentsByDate;