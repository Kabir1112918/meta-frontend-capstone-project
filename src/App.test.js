import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Nav from './components/Nav';
import Header from './components/Header';
import Menu from './components/Menu';
import Item from './components/Item';
import Footer from './components/Footer';
import Bookingform from './components/Bookingform';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/lemon dessert/i);
  expect(linkElement).toBeInTheDocument();
});

// Nav testing************************************************************
test('my Nav test', () => {
  render(<Nav />);
  const navlink1 = screen.getByText(/Home/i);
  const navlink2 = screen.getByText(/Reservations/i);
  const navlink3 = screen.getByText(/Login/i);
  expect(navlink1).toBeInTheDocument();
  expect(navlink2).toBeInTheDocument();
  expect(navlink3).toBeInTheDocument();
  
});



// Header testing**************************************************
test('my Header test', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Little Lemon/i);
  expect(linkElement).toBeInTheDocument();

});


test('alt text tesing of image in Header', () => {
  render(<Header />);
  const img = screen.getByAltText("banner image");
  expect(img).toBeInTheDocument();

});


test('test click event of "Reserve Table" button', () => {
  //custom function to handle click
  function handleClick() {
    console.log('Button clicked!');
  }

  const { getByText } = render(<Header onClick={handleClick} />);
  
  const button = getByText('Reserve Table');
  fireEvent.click(button);
});




// Bookinform testing ****************************************
test("Booking form testing", () => {
  render(<Bookingform />);

  // Define new values for each input field
  const newDate = '2024-06-15';
  const newTime = '12:30';
  const newQuantity = '2'; 
  const newOccasion = 'Kitty party';

  // changing the values to new values.
  const dateInput = screen.getByLabelText('Date:');
  fireEvent.change(dateInput, { target: { value: newDate } });

  const timeInput = screen.getByLabelText('Time:');
  fireEvent.change(timeInput, { target: { value: newTime } });

  const quantityInput = screen.getByLabelText('Number of Guests (max: 10):');
  fireEvent.change(quantityInput, { target: { value: newQuantity } });

  const occasionInput = screen.getByLabelText('Occasion:');
  fireEvent.change(occasionInput, { target: { value: newOccasion } });

  // checking that the values has been changed or not.
  expect(dateInput.value).toBe(newDate);
  expect(timeInput.value).toBe(newTime);
  expect(quantityInput.value).toBe(newQuantity);
  expect(occasionInput.value).toBe(newOccasion);

});



// Menu testing*******************************************************
test('my Menu test', () => {
  render(<Menu />);
  const word1 = screen.getByText(/weeks/i);
  expect(word1).toBeInTheDocument();
  const word2 = screen.getByText(/special/i);
  expect(word2).toBeInTheDocument();

});




// item testing***********************************************************
test('renders special text', () => {
  render(<Item food={{ name: 'Bruchetta', price: '$10', description: 'This is a special dish' }} />);
  const specialText = screen.getByText(/Bruchetta/i);
  expect(specialText).toBeInTheDocument();
});


test('test click event of "Order a delivery" button', () => {
  // Render the Item component
  const { getByText } = render(<Item food={{ name: 'lemon-dessert', price: '$10', description: 'This is a special dish' }} />);

  // select the button.
  const button = getByText('Order a delivery');
  fireEvent.click(button);
});

test('alt text testing of image in Item component', () => {
  // Render
  render(<Item food={{ name: 'Greek Salad', price: '$10', description: 'This is a special dish', imageAltText: 'Greek Salad' }} image="path/to/image" />);
  
  // select image by its alt attribute value
  const img = screen.getByAltText("Greek Salad");
  
  expect(img).toBeInTheDocument();
});




// Footer testing************************************************************
test('all text items are present in Footer component', () => {
  render(<Footer />);

  const expectedTextItems = [
    'Reservations',
    'Home',
    'Address: 12. building',
    'Email: help@littlelemon.com',
    'Facebook',
    'Instagram',
    'LinkedIn',
  
  ];

  expectedTextItems.forEach(text => {
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});

test('alt text tesing of image in Footer', () => {
  render(<Footer />);
  const img = screen.getByAltText("business logo");
  expect(img).toBeInTheDocument();

});