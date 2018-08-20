import React from 'react';
import './Welcome.css';
import Navigation from './Navigation';
import Intro from './Intro';
import Info from './Info';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="wrapper">
        <Navigation/>
        <Intro/>
      </div>
      <Info/>
    </div>
  )
}

export default Welcome;