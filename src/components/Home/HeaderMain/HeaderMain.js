import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png'
const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4056'}}>Your smile starts <br />from here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti magnam facere eum enim, repellendus eligendi.</p>
                <Link to="/appointment">
                 <button className="btn btn-primary">Get Appionment</button>
                </Link>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;