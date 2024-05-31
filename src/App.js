import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Bookingform from './components/Bookingform';

const App = () => {
  return (
    <div>
      <Nav/>
      {/* <Header/>
      <Footer/> */}
      <Bookingform/>
    </div>
  );
};

export default App;
