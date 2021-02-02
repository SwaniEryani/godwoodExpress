import React from "react";
import { Button } from "./Button";
import './HeroSection.css'

export default function HeroSection() {
  return (
     <div className='hero-container'>
      <h1>DOGWOOD EXPRESS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          page='/location'
        >
          Find Us
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          page='/contact-us'
          onClick= {console.log('hey')}
        >
          Contact Us 
        </Button>
      </div>
    </div>
  );
}