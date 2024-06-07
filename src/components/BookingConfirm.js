import React, { useState } from 'react';

const BookingConfirm = (props) => {

  return (
    <div className='dialogbox'>
      <img src={'#'} width='100px' height='100px'></img>
      <h2>Are you sure?</h2>
      <p>you won't be able to cancel it.</p>
      <div className='dialog-btn'>
        <button onClick={props.handleCancel}>Back</button>
        <button onClick={props.handleOk}>OKay</button>
      </div>
    </div>
  );
};

export default BookingConfirm;
