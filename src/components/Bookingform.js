import React, { useRef, useState } from 'react';
import Modal from 'react-modal';

const Bookingform = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errors, setErrors] = useState({});
  
  // Refs for form inputs
  const formRef = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const quantityRef = useRef(null);
  const occasionRef = useRef(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    resetForm();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      date: dateRef.current.value || new Date().toISOString().split('T')[0],
      time: timeRef.current.value,
      quantity: quantityRef.current.value || '1', 
      occasion: occasionRef.current.value || 'Normal', 
    };

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with submission
      openModal(); 
      props.closeForm();
      resetForm();
    } else {
      // Update errors state to display validation errors
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.time) {
      errors.time = '*Time is required';
    }
    return errors;
  };

  const resetForm = () => {
    // Reset form inputs to default values
    formRef.current.reset();
    // Clear errors state
    setErrors({});
  };

  const handleTimeChange = () => {
    // Clear the "Time is required".
    if (errors.time) {
      setErrors({});
    }
  };

  const handleBack = () => {
    props.closeForm(); 
    resetForm(); 
  };

  return (
    <div className='myform' ref={props.bformRef}>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className='fitem'>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" ref={dateRef} defaultValue={new Date().toISOString().split('T')[0]} />
        </div>
        <div className='fitem'>
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" ref={timeRef} onChange={handleTimeChange} />
        </div>
        <div className='timeError'>
          {errors.time && <span className="error">{errors.time}</span>}
        </div>
        <div className='fitem'>
          <label htmlFor="quantity">Number of Guests (max: 10):</label>
          <input type="number" id="quantity" name="quantity" min="1" max="10" defaultValue="1" ref={quantityRef} />
        </div>
        <div className='fitem'>
          <label htmlFor="dropdown">Occasion:</label>
          <select id="dropdown" name="dropdown" ref={occasionRef}>
            <option value="Normal">Normal</option>
            <option value="Dating">Dating</option>
            <option value="Kitty party">Kitty party</option>
          </select>
        </div>
        <div className='fitem'>
          <button className='back-btn' type="button" onClick={handleBack}>Back</button>
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
          <p>Your table reservation was successful.</p>
          <div className='dialog-btn'>
            <button onClick={closeModal}>Okay</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Bookingform;
