import React, { useRef } from 'react';
import banner from '../assets/banner.jpg';
import Bookingform from './Bookingform';

const Header = () => {
  const bformRef = useRef(null);
  const myheader = useRef();

  const openForm = () => {
    myheader.current.style.display = 'none';
    bformRef.current.style.display = 'flex';
  };

  const closeForm = () => {
    myheader.current.style.display = 'flex';
    bformRef.current.style.display = 'none';
  };

  return (
    <>
      <header ref={myheader}>
        <div className={'banner-left'}>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Savor the tangy essence of sunshine in every
            dish at our delightful culinary retreat. Embrace
            the zestful journey that awaits.
          </p>
          <button onClick={openForm}>Reserve Table</button>
        </div>

        <div className={'banner-right'}>
          <img src={banner} alt='banner image' />
        </div>
      </header>
      <Bookingform bformRef={bformRef} closeForm={closeForm} />
    </>
  );
};

export default Header;
