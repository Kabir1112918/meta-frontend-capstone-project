import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Bookingform from './components/Bookingform';
import Menu from './components/Menu';
// import Testimonial from './components/Testimonial';

const App = () => {
  return (
    <div>
      <Nav/>
      <Header/>
      <Menu/>
      {/* <Testimonial/> */}
      <Footer/>
      {/* <Bookingform/> */}
      
    </div>
  );
};

export default App;
