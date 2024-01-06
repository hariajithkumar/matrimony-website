import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs, Tab, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Common/page/Header';
import Footer from '../Common/page/Footer';
import '../Common/css/style.css'
import call from '../Common/image/call.png'
import message from '../Common/image/message.png'
import home from '../Common/image/home.png'
import '../Common/css/style.css'
import '../Common/css/contact.css'
import Topheader from '../Common/page/Topheader';
import Topmove from '../Common/page/Topmove';

function Contact() {
    const { isClass1Show } = useSelector((state) => state.matrimony)
    const [key, setKey] = useState('home');
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div className='section-contact'>
            {/* <Header />
            <div className={`header-content ${isClass1Show ? 'header-position' : 'header-active'}`}>
                <h2 className='text-center mb-sm-3'>Contact Us</h2>
            </div> */}
            <Topheader />
            <div className='header-bg-img header-content'>
                <h2 className='text-center mb-sm-3'>Contact Us</h2>
            </div>
            <div style={{ background: '#FBFBFB' }} className='details-contact'>
                <div className='py-lg-5 py-3 container-90'>
                    <div className='row m-0'>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-12 contact-inform'>
                            <h1>Contact Information</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien.</p>
                            <div className='row'>
                                <div className='col-3 p-0 text-center pb-5'>
                                    <img src={call} className='' />
                                </div>
                                <div className='col-9 px-0 pb-5'>
                                    <h5>Call Us</h5>
                                    <h6>(199) 661-1451</h6>
                                </div>
                                <div className='col-3 p-0 text-center pb-5'>
                                    <img src={message} className='' />
                                </div>
                                <div className='col-9 px-0 pb-5'>
                                    <h5>Write to us</h5>
                                    <h6>sofía.suárez@skansxka.net</h6>
                                </div>
                                <div className='col-3 p-0 text-center pb-5'>
                                    <img src={home} className='' />
                                </div>
                                <div className='col-9 px-0 pb-5'>
                                    <h5>Address</h5>
                                    <h6>1700 W Blancke St, kiyev port south USA, American</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-12 form-content'>
                            <div className='form-submit'>
                                <form>
                                    <h2>Get in Touch with Us</h2>
                                    <input type="text" className="form-control my-5" placeholder='your Name' />
                                    <div className='row m-0'>
                                        <div className='col-lg-6 col-md-6 col-12 p-0'>
                                            <input type="text" className="form-control" placeholder='Your Mail' />
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-12 ps-lg-2 ps-md-2 mt-lg-0 mt-md-0 mt-5 px-0'>
                                            <input type="text" className="form-control" placeholder='Your Number' />
                                        </div>
                                    </div>
                                    <input type="text" className="form-control my-5" placeholder='Subject' />
                                    <textarea type='text' className='form-control' placeholder='Message*'></textarea>
                                </form>
                                <div>
                                    <button>Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Topmove />
            <Footer />
        </div>
    )
}

export default Contact