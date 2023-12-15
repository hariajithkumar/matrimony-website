import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs, Tab, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Common/page/Header';
import Footer from '../Common/page/Footer';
import '../Common/css/style.css'
import '../Common/css/about.css'
import ourmission from '../Common/image/ourmission.png'
import edit from '../Common/image/Edit.png'
import menu from '../Common/image/menu.png'
import rightarrow from '../Common/image/longarrow-right.png'
import appavailable from '../Common/image/app-available.png'
import GooglePlay from '../Common/image/GooglePlay.png'
import AppStore from '../Common/image/AppStore.png'
import Topheader from '../Common/page/Topheader';

function About() {
  const { isClass1Show } = useSelector((state) => state.navButton)
  const [key, setKey] = useState('home');
  const dispatch = useDispatch();

  // scroll effect code 
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const cards = document.querySelectorAll('.slide-up, .slide-left, .slide-right');
  //     cards.forEach(card => {
  //       const rect = card.getBoundingClientRect();
  //       const isVisible = rect.top <= window.innerHeight * 0.75;

  //       if (isVisible) {
  //         card.classList.add('visible');
  //       } else {
  //         card.classList.remove('visible');
  //       }
  //     });
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   handleScroll(); // Initial check

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div className='section-about' style={{ background: '#FBFBFB' }}>
      <Topheader />
      {/* <div className='header-bg-img header-content'>
        <div className='about-header'>
          <h4>About</h4>
          <h1>Who We Are</h1>
          <h5>Crafting Love Stories Since [2016]</h5>
          <p>At Matrimony, we believe in the power of love and the importance of meaningful connections. Our mission is to bring together individuals from diverse backgrounds and cultures, uniting them in the sacred bond of matrimony.</p>
        </div>
      </div> */}
      <div className='header-bg-img header-content'>
        <div className='about-header'>
          <h4>About</h4>
          <h1>Who We Are</h1>
          <h5>Crafting Love Stories Since [2016]</h5>
          <p>At Matrimony, we believe in the power of love and the importance of meaningful connections. Our mission is to bring together individuals from diverse backgrounds and cultures, uniting them in the sacred bond of matrimony.</p>
        </div>
      </div>
      <div className='container-90'>
        <div className='row m-0 our-mission'>
          <div className='col-lg-6 col-md-12 col-sm-12 col-12 slide-left visible content'>
            <h5>Designed for developers</h5>
            <h1>Our Mission & Vision</h1>
            <p>Our primary aim is to build a large free Matrimony web portal and provide a pleasant, satisfying, and superior matchmaking experience for all Keralite youths. Clearly, we place high priority on user privacy. We also give our customers complete control over their profile through easy-to-use interfaces and features that can help them identify, filter, and get in touch with potential partners.</p>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12 col-12 slide-right visible text-center'>
            <img src={ourmission} alt="Our Mission" className='w-100' />
          </div>
        </div>
      </div>
      <div className='mission-process container-90'>
        <div className='row m-0'>
          <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
            <img src={edit} />
            <h4>Best Matches</h4>
            <p>5,00,000 plus manually verified profiles to choose from.</p>
            <h5>See libraries<img src={rightarrow} className='px-2' /></h5>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
            <img src={menu} />
            <h4>100% Privacy</h4>
            <p>matrimony provides you a 100% secure platform to meet your life partner.</p>
            <h5>Explore partners<img src={rightarrow} className='px-2' /></h5>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
            <img src={menu} />
            <h4>Verified Profiles</h4>
            <p>Profiles are manually screened by our expert team before publishing.</p>
            <h5>Explore partners<img src={rightarrow} className='px-2' /></h5>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
            <img src={menu} />
            <h4>Statewide Branches</h4>
            <p>More than 15 branches spread across cities in Kerala.</p>
            <h5>Explore partners<img src={rightarrow} className='px-2' /></h5>
          </div>
        </div>
      </div>
      <div className='app-available mt-5'>
        <div className='container-90'>
          <div className='row m-0'>
            <div className='col-lg-6 col-12 slide-left visible contents'>
              <img src={appavailable} className='app-img' />
            </div>
            <div className='col-lg-6 col-12 app-content slide-right visible content'>
              <h1>Available now Matrimony App</h1>
              <p>We just launched our Matrimony app!</p>
              <img src={GooglePlay} alt='GooglePlay' className='store' />
              <img src={AppStore} alt='AppStore' className='px-2 store' />
            </div>
          </div>
        </div>
      </div>
      <div className='container-80 keep-touch'>
        <div className='keep-content text-center'>
          <h1>Keep in Touch <span>with us</span></h1>
          <p>Let us deliver every information regarding our latest events and news straight to your inbox.</p>
          <button>Enter your email to subscribe</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About