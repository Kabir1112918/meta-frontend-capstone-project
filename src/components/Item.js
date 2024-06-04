import React, { useState } from 'react';

const Item = (props) => {
    const { name, price, description } = props.food;
  
  return (
    <div className='item'>
        {/* <img src={props.imgage}></img> */}
        <h5>{name}</h5>
        <h5>{price}</h5>
        <p>{description}</p>
        <a>Order a delivery</a>
        {/* <img src={props.icon}></img> */}
    </div>
  );
};

export default Item;
