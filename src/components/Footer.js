import React from 'react';
import './Footer.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import image from '../components/assets/images/img-7.jpg'

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>
              <Link to='/'>Home</Link>
            </h2>
          </div>
          <div class='footer-link-items'>
            <h2>
              <Link to='/AboutUs'>About Us</Link>
            </h2>
          </div>
          <div class='footer-link-items'>
            <h2>
              <Link to='/Campaigns'>Campaigns</Link>
            </h2>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>
              <Link to='/Events'> Events</Link>
            </h2>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src={image} alt='logo' height={80} width={80} />
              {/* <i class='fab fa-typo3' /> */}
            </Link>
          </div>
          <small class='website-rights'>GND for DC © 2022</small>
          <div class='social-icons'>
            {/* <a href='https://www.facebook.com/Arm-In-Arm-DC-108366190956042'
              class='social-icon-link facebook'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a> */}
            {/* <a href='https://www.instagram.com/?hl=en'
              class='social-icon-link instagram'
              // target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a> */}
            <a href='https://twitter.com/GND4DCAction'
              class='social-icon-link twitter'
              to='/https://twitter.com/GND4DCAction'
              // target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;