import React from 'react';

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4">
            <h6>{info.title}</h6>
            <small>{info.description} </small>
        </div>
    );
};

export default InfoCard;