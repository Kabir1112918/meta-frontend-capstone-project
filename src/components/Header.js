import React, { useState } from 'react';
import banner from '../assets/banner.jpg';

const Header = () => {
  
  return (
    <header>
      <div className={'banner-left'}>
        <h1>Little Lemon</h1>
        <h2>chicago</h2>
        <p>
        Savor the tangy essence of sunshine in every
        dish at our delightful culinary retreat. Embrace
        the zestful journey that awaits.
        </p>
        <button>Reserve Table</button>
      </div>

      <div className={'banner-right'}>
        <img src={banner} alt='banner image'></img>
      </div>
        
    </header>
  );
};

export default Header;
