import React, { useRef, useState } from 'react';
import Modal from 'react-modal';

const Bookingform = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    openModal(); // Open the modal when the form is submitted
    props.closeForm();
  };

  return (
    <div className='myform' ref={props.bform}>
      <form onSubmit={handleSubmit}>
        <div className='fitem'>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" />
        </div>
        <div className='fitem'>
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" />
        </div>
        <div className='fitem'>
          <label htmlFor="quantity">Number of Guests (max: 10):</label>
          <input type="number" id="quantity" name="quantity" min="1" max="10" />
        </div>
        <div className='fitem'>
          <label htmlFor="dropdown">Occasion:</label>
          <select id="dropdown" name="dropdown">
            <option value="Normal">Option 1</option>
            <option value="Dating">Option 2</option>
            <option value="Kitty party">Option 3</option>
          </select>
        </div>
        <div className='fitem'>
          <button className='form-btn' type="submit">Reserve</button>
        </div>
      </form>

      {/* Modal */}
      <Modal
        className='bFormModal'
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Booking Confirmation"
      >
        <div className='dialogbox'>
          <h2>Booking Confirmation</h2>
          <p>your Table reservation done successfully</p>
          <div className='dialog-btn'>
            <button  onClick={closeModal}>Okay</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Bookingform;
