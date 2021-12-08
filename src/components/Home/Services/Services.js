import React from 'react';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
const serviceData=[
    {
        name:'Flouride Treatment',
        img:fluoride
    },
    {
        name:'Cavity Filling',
        img:cavity
    },
    {
        name:'Teath Whitening',
        img:whitening
    }
]
const Services = () => {
    return (
        <section className="services-container">
            <div className="text-center">
                <h5 style={{color:"#1cc7c1"}}>Our Services</h5>
                <h2 style={{color:'##3A4056'}}>Services We Provide</h2>
            </div>
        </section>
    );
};

export default Services;