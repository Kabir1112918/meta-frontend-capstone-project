import React, { useState } from 'react';
import logo from '../assets/logo.jpeg';

const Nav = () => {
  const [menuState, setMenuState] = useState(false);

  const toggleMenu = () => {
    setMenuState(menuState => !menuState); // Toggle the state value
  };

  return (
    <nav className={'navbar'}>
      <img className='logo' src={logo} alt="example" width='20%' height='50px'/>

      <button id={'menu-icon'} onClick={toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </button>

      <ul className={`nav-links ${menuState ? "open" : ""}`}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
