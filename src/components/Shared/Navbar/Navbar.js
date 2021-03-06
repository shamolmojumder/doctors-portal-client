import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link ms-5 active" aria-current="page" href="./">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5 text-gray" href="/addDoctor">Add Doctor</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5 text-gray" href="./">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5 text-gray" href="./">Dental Service</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5 text-gray" href="./">Review</a>
                            </li>
                            <li class="nav-item">
                                {/* <a  href="./">Dashboard</a> */}
                                <Link class="nav-link ms-5 text-gray" to="/dashboard"> Dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5 text-gray" href="./">Contact us</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;