import React, { useState } from 'react';
import flogo from '../assets/flogo.jpeg';

const Footer = () => {

    return (
        <footer>
            <div className='holder'>
                <div className='logo-des'>
                    <img src={flogo} alt='business logo' width='40%' height='20%'></img>
                    <p> Savor the tangy essence of sunshine in every
                        dish at our delightful culinary retreat. Embrace
                        the zestful journey that awaits
                    </p>
                </div>
                <div className='flist'>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>Menu</a></li>
                        <li><a href='#'>Reservations</a></li>
                        <li><a href='#'>Order Online</a></li>
                        <li><a href='#'>Login</a></li>
                    </ul>

                </div>
                <div className='flist'>
                    <h3>Contacts</h3>
                    <ul>
                        <li>Address: <br /> 12. building</li>
                        <li>Phone:<br /> +91 9876543210</li>
                        <li>Email: <br /> help@littlelemon.com</li>
                    </ul>

                </div>
                <div className='flist'>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href='#'>Facebook</a></li>
                        <li><a href='#'>Instagram</a></li>
                        <li><a href='#'>LinkedIn</a></li>
                    </ul>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
