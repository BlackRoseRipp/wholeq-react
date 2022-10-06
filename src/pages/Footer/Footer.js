import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-clean">
            <div className='main-footer'>
                <div className='container main-footer-container py-lg-5 py-4'>
                    <div className='row' id='mainRow'>
                        <div className='col-lg-4'>
                            <div className='ms-lg-5 ms-0 mt-4 text-center text-lg-start'>
                                <h5 className='footer-header'>
                                    About
                                </h5>
                                <div className='d-flex flex-column align-items-lg-start align-items-center'>
                                    <a className='footer-link' href='/about'>Company</a>
                                    <a className='footer-link' href='/team'>Team</a>
                                    <a className='footer-link' href='/our-story'>Our Story</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 footer-contact'>
                            <div className='ms-lg-5 ms-0 mt-4'>
                                <h5 className='footer-header'>
                                    Careers
                                </h5>
                                <div className='d-flex flex-column align-items-lg-start align-items-center'>
                                    <a className="footer-link" href="/careers">
                                        Job Openings
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 text-start d-flex flex-column justify-content-center align-items-center'>
                            <a href="/" className="text-center">
                                <img src="assets/img/logos/Whole-Q-New.png" style={{ width: '70%' }} />
                            </a>
                        </div>
                    </div>
                    <hr />
                    <div className='py-4 text-lg-start text-center'>
                        <p className='footer-copy'>Copyright © 2022 WholeQ</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer