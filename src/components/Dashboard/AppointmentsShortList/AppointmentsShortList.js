import React from 'react';

const AppointmentsShortList = ({appointments}) => {
  console.log(appointments);
    return (
        <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
            <th scope="col">Service</th>
          </tr>
        </thead>
        <tbody>
        {
          appointments.map((appointment,index)=>
           
            <tr>
            <th scope="row">{index+1} </th>
            <td> {appointment.firstName +' '+appointment.lastName} </td>
            <td>{appointment.category}</td>
            <td>{appointment.age}</td>
            <td>{appointment.service}</td>
          </tr>
          )
        }
        </tbody>
      </table>
    );
};

export default AppointmentsShortList;