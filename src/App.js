import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Bookingform from './components/Bookingform';
import Menu from './components/Menu';
import BookingConfirm from './components/BookingConfirm';


const App = () => {
  return (
    <div>
      <Nav/>
      <Header/>
      <Menu/>
      <Footer/>
      {/* <Bookingform/> */}
      {/* <BookingConfirm/> */}
      
    </div>
  );
};

export default App;
