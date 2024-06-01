import React, { useState } from 'react';

const Bookingform = () => {

  return (
    <form action="#" method="post">
      <div>
        <label for="date">Date:</label>
        <input type="date" id="date" name="date"/>
      </div>
      <div>
        <label for="time">Time:</label>
        <input type="time" id="time" name="time"/>
      </div>
      <div>
        <label for="quantity">Number of Guests (max: 10):</label>
        <input type="number" id="quantity" name="quantity" min="1" max="10"/>
      </div>
      <div>
        <label for="dropdown">Ocassion:</label>
        <select id="dropdown" name="dropdown">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div>
        <button type="submit">Make your reservations</button>
      </div>
    </form>
  );
};

export default Bookingform;
