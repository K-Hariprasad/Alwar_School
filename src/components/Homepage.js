import React from 'react';
import '../App.css';
import './Homepage.css';

function Homepage() {
  return (
    <div className='home-container'>
      <img src='/images/hhh.jpg' alt="home" />
      <h1>ALWAR SCHOOL</h1>
      <p>SOME QOUTES HERE</p>
      <div className="home-btns">
        <button
          className='btn btn-outline-light'
        >
          GET STARTED
        </button>
      </div>
    </div>
  );
}

export default Homepage;
