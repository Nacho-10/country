import React from 'react';
import { Link } from 'react-router-dom';

import './landingPage.css'

export const LandingPage = () => {
  return (
    <div className='landing-countainer'>
      <img className='landing-image' src="/images/countries.png" alt="countries" /> 
      <Link className='landing-button' to='/home'> Países </Link>
    </div>
    
  )
}
