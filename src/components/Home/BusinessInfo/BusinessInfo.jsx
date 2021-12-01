import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'
const infosData=[
    {
        title:'opening hours',
        description:"we are open 7 days",
        icon:faClock,
        background:'primary'

    },
    {
        title:'Visit our location',
        description:"Gulshan dhaka",
        icon:faMapMarker,
        background:'dark'

    },
    {
        title:'Call us now',
        description:"+880168548452",
        icon:faPhone,
        background:'primary'

    }
]
const BusinessInfo = () => {
    return (
        <section className="row">
            {
                infosData.map(info=> <InfoCard info={info}></InfoCard> )
            }
        </section>
    );
};

export default BusinessInfo;