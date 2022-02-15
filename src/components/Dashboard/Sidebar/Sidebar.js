import React from 'react';
// import { Link } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = () => {

    
    return (
        <div>  
         
         <div class="sidenav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>
            <a href="/addDoctor">Add Doctor</a>
            {/* <Link to="/addDoctor">
            <a>Add Doctors</a>
            </Link> */}
        </div>

        </div>
    );
};

export default Sidebar;