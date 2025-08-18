import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './LandingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faChartBar, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';


const LandingPage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop;

    const stickNavbar = () => {
      if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };

    window.onscroll = stickNavbar;

    const particleContainer = document.querySelector('.particles');
    const starBackground = document.querySelector('.star-background');

    for (let i = 0; i < 100; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      particleContainer.appendChild(particle);
    }

    for (let i = 0; i < 300; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      starBackground.appendChild(star);
    }
  }, []);

  const showSlide = (n) => {
    let newIndex = index + n;
    const slides = document.querySelectorAll('.slide');

    if (newIndex >= slides.length) {
      newIndex = 0;
    }
    if (newIndex < 0) {
      newIndex = slides.length - 1;
    }
    setIndex(newIndex);
    const slideWidth = slides[0].offsetWidth;
    document.querySelector('.slides').style.transform = `translateX(-${newIndex * slideWidth}px)`;
  };

  return (
    <div>
      <div className="navbar" id="navbar">

      </div>

      <div className="container">
        <div className='tex'>
        Welcome to AgroTrade
        </div>

        <h3>Forecasting Crop Prices, Empowering Farmers</h3>
    
        <Link to="/dashboard" className="cta-button">Sign In</Link>
      </div>

   <div className="container" id="features">
       
  <h1>Features</h1>
  <div className="features">
  <div className="feature-item">
    <h2>Price Prediction Engine   <FontAwesomeIcon icon={faChartLine} /></h2>
   
    <p>Provides real-time predictions on crop prices using advanced machine learning algorithms.</p>
  </div>
  <div className="feature-item">
    <h2>Market Analysis <FontAwesomeIcon icon={faChartBar} /> </h2>
    
    <p>Displays historical data and market trends to help users understand price fluctuations.</p>
  </div>
  <div className="feature-item">
    <h2>Interactive Dashboard  <FontAwesomeIcon icon={faTachometerAlt} /></h2>
    
    <p>Offers a customizable and visual dashboard for easy access to key metrics and insights.</p>
  </div>
</div>


      </div>
{/* 
      <div className="container">
        <h1>Image Slider</h1>
        <div className="slider">
          <div className="slides">
            <div className="slide"><img src="https://via.placeholder.com/800x400" alt="Slide 1" /></div>
            <div className="slide"><img src="https://via.placeholder.com/800x400" alt="Slide 2" /></div>
            <div className="slide"><img src="https://via.placeholder.com/800x400" alt="Slide 3" /></div>
          </div>
          <div className="slider-buttons">
            <button className="slider-button" onClick={() => showSlide(-1)}>&#10094;</button>
            <button className="slider-button" onClick={() => showSlide(1)}>&#10095;</button>
          </div>
        </div>
      </div> */}

      <div className="particles"></div>
      <div className="star-background"></div>
    </div>
  );
};

export default LandingPage;
