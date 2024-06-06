import React, { useState } from 'react';

const BookingConfirm = () => {

  return (
    <div className='dialogbox'>
      <img src={'#'} width='100px' height='100px'></img>
      <h2>Are you sure?</h2>
      <p>you won't be able to cancel it.</p>
      <div className='dialog-btn'>
        <button>Back</button>
        <button>OKay</button>
      </div>
    </div>
  );
};

export default BookingConfirm;
