import React, { useState } from 'react';
import Modal from 'react-modal';
import BookingConfirm from './BookingConfirm';
import alertIcon from '../assets/alertIcon.png';
import yesIcon from '../assets/yesIcon.png';

const Item = (props) => {
    const { name, price, description, imageAltText } = props.food;
    const [firstModalIsOpen, setFirstModalIsOpen] = useState(false);
    const [secondModalIsOpen, setSecondModalIsOpen] = useState(false);

    const openFirstModal = () => {
        setFirstModalIsOpen(true);
    };

    const closeFirstModal = () => {
        setFirstModalIsOpen(false);
    };

    const openSecondModal = () => {
        setFirstModalIsOpen(false);
        setSecondModalIsOpen(true);
    };

    const closeSecondModal = () => {
        setSecondModalIsOpen(false);
    };

    return (
        <div className='item'>
            {/* alt={imageAltText} */}
            <img src={props.image} alt={imageAltText}></img>
            <h5 >{name}</h5>
            <h5>{price}</h5>
            <p>{description}</p>
            <button onClick={openFirstModal}>Order a delivery</button>




            <Modal className='firstModal' isOpen={firstModalIsOpen} onRequestClose={closeFirstModal}>
                <div className='dialogbox'>
                    <img src={alertIcon} width='100%' height='100%'></img>
                    <h2>Are you sure, you want to order it?</h2>
                    <p>you won't be able to cancel it.</p>
                    <div className='dialog-btn'>
                        <button onClick={closeFirstModal}>Cancel</button>
                        <button onClick={openSecondModal}>OKay</button>
                    </div>
                </div>
            </Modal>

            <Modal className='secondModal' isOpen={secondModalIsOpen} onRequestClose={closeSecondModal}>
                <div className='dialogbox'>
                    <img src={yesIcon} width='100%' height='100%'></img>
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
