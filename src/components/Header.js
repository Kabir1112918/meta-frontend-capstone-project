import React, { useRef, useState } from 'react';
import banner from '../assets/banner.jpg';
import Bookingform from './Bookingform';

const Header = () => {
  const bform = useRef();
  const myheader = useRef();

  const openForm = () => {
    myheader.current.style.display = 'none';
    bform.current.style.display = 'flex';
  }

  const closeForm = () => {
    myheader.current.style.display = 'flex';
    bform.current.style.display = 'none';
  }

  return (
    <>
      <header ref={myheader}>
        <div className={'banner-left'}>
          <h1>Little Lemon</h1>
          <h2>chicago</h2>
          <p>
            Savor the tangy essence of sunshine in every
            dish at our delightful culinary retreat. Embrace
            the zestful journey that awaits.
          </p>
          <button onClick={openForm}>Reserve Table</button>
        </div>

        <div className={'banner-right'}>
          <img src={banner} alt='banner image'></img>
        </div>

      </header>
      <Bookingform bform={bform} closeForm={closeForm}/>
    </>
  );
};

export default Header;
