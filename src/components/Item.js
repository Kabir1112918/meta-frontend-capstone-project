import React, { useState } from 'react';
import Modal from 'react-modal';
import BookingConfirm from './BookingConfirm';

const Item = (props) => {
    const { name, price, description } = props.food;
    const [firstModalIsOpen, setFirstModalIsOpen] = useState(false);
    const [secondModalIsOpen, setSecondModalIsOpen] = useState(false);

    const openFirstModal = () => {
        setFirstModalIsOpen(true);
    };

    const closeFirstModal = () => {
        setFirstModalIsOpen(false);
    };

    const openSecondModal = () => {
        setFirstModalIsOpen(false); // Close the first modal
        setSecondModalIsOpen(true);
    };

    const closeSecondModal = () => {
        setSecondModalIsOpen(false);
    };

    return (
        <div className='item'>
            {/* Your item content */}
            <h5>{name}</h5>
            <h5>{price}</h5>
            <p>{description}</p>
            <button onClick={openFirstModal}>Order a delivery</button>
            {/* <img src={props.icon}></img> */}

            <Modal className='firstModal' isOpen={firstModalIsOpen} onRequestClose={closeFirstModal}>
                {/* Modal content */}
                <div className='dialogbox'>
                    <img src={'#'} width='100px' height='100px'></img>
                    <h2>Are you sure, you want to order it?</h2>
                    <p>you won't be able to cancel it.</p>
                    <div className='dialog-btn'>
                        <button onClick={closeFirstModal}>Cancel</button>
                        <button onClick={openSecondModal}>OKay</button>
                    </div>
                </div>
            </Modal>

            <Modal className='secondModal' isOpen={secondModalIsOpen} onRequestClose={closeSecondModal}>
                {/* Second Modal content */}
                <div className='dialogbox'>
                    <img src={'#'} width='100px' height='100px'></img>
                    <h2>Your order successfully placed.</h2>
                    <p>you will get it within 30 minutes</p>
                    <div className='dialog-btn'>
                        <button onClick={closeSecondModal}>Okay</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Item;
