import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import signup from '../Common/image/signup.png'
import connect from '../Common/image/connect.png'
import interact from '../Common/image/interact.png'
import create from '../Common/image/create.png'
import connects from '../Common/image/connects.png'
import profile from '../Common/image/profile.png'
import intreract from '../Common/image/intreract.png'
import prev from '../Common/image/prev.png'
import next from '../Common/image/next.png'
import welcome from '../Common/image/welcome.png'
import CheckCircle from '../Common/image/CheckCircle.png'
import connectpair from '../Common/image/connect-pair.png'
import GooglePlay from '../Common/image/GooglePlay.png'
import AppStore from '../Common/image/AppStore.png'
import videocall from '../Common/image/video-call.png'
import videocall1 from '../Common/image/video-call-1.png'
import videocall2 from '../Common/image/video-call-2.png'
import videocallgroup from '../Common/image/videocall-group.png'
import bestmatch from '../Common/image/best-match.png'
import verify from '../Common/image/verify.png'
import privacy from '../Common/image/privacy.png'
import Check from '../Common/image/Check.png'
import successstore from '../Common/image/success-store.png'
import star from '../Common/image/Stars.png'

import Owl from './Owl';
import Footer from '../Common/page/Footer';
import Faq from '../Common/page/Faq';
import Header from '../Common/page/Header';
import Topheader from '../Common/page/Topheader';
import Tophome from './Tophome';
import Topmove from '../Common/page/Topmove';
import SimpleSlider from './SimpleSlider ';

function Home() {

  const { isClass1Show } = useSelector((state) => state.navButton)
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 200; // You can adjust this value based on when you want the button to appear

    if (scrollY > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Topheader />
      {/* <div className={`header-content ${isClass1Show ? 'header-position' : 'header-active'}`}>
        <h2 className='text-center mb-sm-3'>Some one special is <br /><span className='waiting-text'>waiting for you</span></h2>
        <div className='d-lg-block d-sm-block d-md-block d-none'>
          <div className='row m-0 pt-lg-5 pt-md-2 pt-sm-4 align-items-stretch justify-content-center'>
            <div className='col-4 text-lg-end text-center py-2'>
              <img src={signup} alt='signup' className='icon-width' />
              <span className='content-span'>Sign Up</span>
            </div>
            <div className='col-4 text-lg-end text-center py-2'>
              <img src={connect} alt='connect' className='icon-width' />
              <span className='content-span'>Connect</span>
            </div>
            <div className='col-4 text-lg-end text-center py-2'>
              <img src={interact} alt='interact' className='icon-width' />
              <span className='content-span'>Interact</span>
            </div>
          </div>
        </div>
      </div> */}
      <Tophome />
      {/* <div className='header-card'>
        <div className="container-80 mt-4">
          <div className="card card-bg">
            <div className="card-body">
              <h5 className="card-title text-center quich-search pt-3 pb-3">Quick Search</h5>
              <div className="mb-3">
                <div className='row m-0'>
                  <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
                    <label for="firstName" className="form-label">I’m Looking for*</label>
                    <div className='select-option'>
                      <select className="w-100 border-0" id="selecttype">
                        <option selected value='disabled'>select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
                    <label for="firstName" className="form-label">Religion*</label>
                    <div className='select-option'>
                      <select className="w-100 border-0" id="selecttype">
                        <option selected value='disabled'>select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
                    <label for="firstName" className="form-label">Age From (yrs)</label>
                    <div className='select-option'>
                      <select className="w-100 border-0" id="selecttype">
                        <option selected value='disabled'>select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
                    <label for="firstName" className="form-label">Age From (yrs)</label>
                    <div className='select-option'>
                      <select className="w-100 border-0" id="selecttype">
                        <option selected value='disabled'>select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <form>
                <div className='text-center mt-5'>
                  <button type="submit" className="btn btn-light text-dark">Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
      <section className='section-start'>
        <div className='section-profile'>
          <h5 className='text-center mb-3'>Introducing Profile</h5>
          <h2 className='text-center'>Highlighted Profiles</h2>
          <SimpleSlider />
        </div>
        <div className='section-work work-img mt-5 mb-5'>
          <div className='pt-lg-5 pt-2 container-80'>
            <h2 className='text-center'>How <span style={{ color: "#00425E" }}>Does</span> It Work ?</h2>
            <div className='row m-0 pt-lg-5 pt-2'>
              <div className='col-lg-3 col-md-6 col-sm-6 col-12 text-center work-card img-zoom'>
                <img src={create} alt='create' />
                <h3>Create Account</h3>
                <p className='text-center'>Lorem ipsum dolor sit amet, consetetu sadipscing elitr, sed diam nonumy.</p>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-6 col-12 text-center work-card img-zoom'>
                <img src={profile} alt='profile' />
                <h3>Browse Profiles</h3>
                <p className='text-center'>Lorem ipsum dolor sit amet, consetetu sadipscing elitr, sed diam nonumy.</p>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-6 col-12 text-center work-card img-zoom'>
                <img src={connects} alt='connects' />
                <h3>Connect</h3>
                <p className='text-center'>Lorem ipsum dolor sit amet, consetetu sadipscing elitr, sed diam nonumy.</p>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-6 col-12 text-center work-card img-zoom'>
                <img src={intreract} alt='intreract' />
                <h3>Interact</h3>
                <p className='text-center'>Lorem ipsum dolor sit amet, consetetu sadipscing elitr, sed diam nonumy.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='welcome container-85'>
          <div className='row m-0'>
            <div className='col-lg-6 col-md-12 col-sm-12 col-12 slide-left visible'>
              <h5>About Us</h5>
              <h2>WELCOME TO THE MATRIMONY.IN</h2>
              <p>Ready Matrimonial provides decent Matrimonial PHP Script in various design templates at a reasonable price. It is also available in Android & iOs versions.</p>
              <ul className='list-group'>
                <li className='mb-3'>
                  <img src={CheckCircle} alt='CheckCircle' /> Profile with fully updated details
                </li>
                <li className='mb-3'>
                  <img src={CheckCircle} alt='CheckCircle' /> Multiple & easy way to contact
                </li>
                <li className='mb-3'>
                  <img src={CheckCircle} alt='CheckCircle' /> Automatic Matching System
                </li>
                <li className='mb-3'>
                  <img src={CheckCircle} alt='CheckCircle' /> Easy & flexible navigations
                </li>
              </ul>
              <div className="mt-3">
                <button className="btn btn-outline-success " type="button">Read more</button>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 col-12 my-5 text-center slide-right visible'>
              <img src={welcome} alt='welcome' className='img-zoom w-75' />
            </div>
          </div>
        </div>
        <div className='mt-lg-5 mt-3 connect-match'>
          <div className='container-85'>
            <div className='row m-0'>
              <div className='col-lg-6 col-md-12 col-sm-12 col-12 py-lg-5 py-3 text-center slide-left visible'>
                <img src={connectpair} alt='connectpair' className='img-zoom connect-img w-75 my-5' />
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12 col-12 connect-content slide-right visible'>
                <h2 className='pb-3'>Connect with matches the way you like</h2>
                <p className='pb-3'>Offer subscription plans for premium features that enhance the user experience. These features may include unlimited messaging, highlighted profiles, or advanced matching algorithms. Implement in-app purchases and seamless payment integration for user convenience.</p>
                <div className="mt-3 mb-5">
                  <button className="btn btn-outline-success " type="button">Register now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='video-call container-85 mb-5 pb-5'>
          <div className='row m-0'>
            <div className='col-lg-8 col-md-12 app-content slide-left visible'>
              <h5>App Download</h5>
              <h2 className='mt-2'>"Video Call Matching: Your Path to Genuine Connections"</h2>
              <p>Elevate your online matrimony experience with our Video Call Matching feature. Connect with potential partners in real time, see their smiles, and have meaningful conversations through live video calls. It's the ultimate way to build authentic connections and determine compatibility. Try Video Call Matching today and take the first step towards finding your true love.</p>
              <img src={GooglePlay} alt='GooglePlay' className='playstore' />
              <img src={AppStore} alt='AppStore' className='playstore' />
            </div>
            <div className='col-lg-4 col-12 d-lg-block d-none'>
              <img src={videocall2} alt='videocall-1' className='video-1 shake-img' />
              <img src={videocall} alt='videocall' className='video-2 img-zoom' />
              <img src={videocall1} alt='videocall-2' className='video-3 shake-img' />
            </div>
            <div className='col-lg-4 col-12 d-lg-none d-md-block text-center mt-lg-0 mt-5'>
              <img src={videocallgroup} className='w-75 shake-img' />
            </div>
          </div>

        </div>
        <div className='section-trust'>
          <div className='container-85 text-center pb-3'>
            <h2 className='w-50 mx-auto '>Trusted by Millions</h2>
            <p className='w-75 mx-auto'>"Love doesn't make the world go around. Love is what makes the ride worthwhile." Millions of Active Matrimonial users around the world find their true love and partners from this site. We are always there to help and find you the suitable match for yourself.</p>
          </div>
          <div className='container-75 text-center'>
            <div className='row m-0 pb-5 align-items-stretch justify-content-center'>
              <div className='col-12 col-lg-4 col-sm-6 py-2 '>
                <button className='w-100'><img src={bestmatch} className='px-2' /> Best Matches</button>
              </div>
              <div className='col-12 col-lg-4 col-sm-6 py-2 '>
                <button className='w-100'><img src={verify} className='px-2' /> Verified Profiles</button>
              </div>
              <div className='col-12 col-lg-4 col-sm-6 py-2 '>
                <button className='w-100'><img src={privacy} className='px-2' /> 100% Privacyes</button>
              </div>
            </div>
          </div>
        </div>
        <div className='best-package text-center mt-5'>
          <h5>Packages</h5>
          <h2>Best Packages for you</h2>
          <div className='container-80 pt-5'>
            <div className='row m-0 align-items-stretch justify-content-center'>
              <div className='col-lg-4 col-md-6 col-12 py-md-2 py-sm-2 py-2'>
                <div className="card">
                  <div className="card-header packagr-head">
                    <h3>Royal Delight</h3>
                    <p>CR Manager Support</p>
                  </div>
                  <div className="card-body list-content px-2">
                    <div className='row m-0'>
                      <div className='col-2 p-0'>
                        <img src={Check} alt='Check' />
                      </div>
                      <div className='col-10 text-start p-0'>
                        <h5>Address view feature</h5>
                      </div>
                      <div className='col-2 p-0'>
                        <img src={Check} alt='Check' />
                      </div>
                      <div className='col-10 text-start p-0'>
                        <h5>200 Address View/4 Month</h5>
                      </div>
                      <div className='col-2 p-0'>
                        <img src={Check} alt='Check' />
                      </div>
                      <div className='col-10 text-start p-0'>
                        <h5>15 Address View/ Day</h5>
                      </div>
                      <div className='col-2 p-0'>
                        <img src={Check} alt='Check' />
                      </div>
                      <div className='col-10 text-start p-0'>
                        <h5>Express interest feature</h5>
                      </div>
                      <div className='col-2 p-0'>
                        <img src={Check} alt='Check' />
                      </div>
                      <div className='col-10 text-start p-0'>
                        <h5>600 Express Interest/4 Month</h5>
                      </div>
                      <div className='col-2 p-0'>
                        <img src={Check} alt='Check' />
                      </div>
                      <div className='col-10 text-start p-0'>
                        <h5>4 Months Validity</h5>
                      </div>
                      <div className='col-2 p-0'>
                        <img src={Check} alt='Check' />
                      </div>
                      <div className='col-10 text-start p-0'>
                        <h5>Dedicated Customer Relation Manager Support For 4 Months. . On Request Free Profile Conversion to Classic Plus Package</h5>
                      </div>
                      <div className='col-lg-5 col-md-5 col-sm-12 col-12 p-0'>
                        <h3 className='text-center px-3 pt-4'>₹12000</h3>
                      </div>
                      <div className='col-lg-7 col-md-7 col-sm-12 col-12 text-start p-0'>
                        <div className="mt-3 text-end px-3">
                          <button className="btn btn-outline-success w-100" type="button">Upgrade</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-12 py-md-2 py-sm-2 py-2'>
                <div className="card">
                  <div className="card-header packagr-head">
                    <h3>Premium Delight</h3>
                    <p>Assisted Service</p>
                  </div>
                  <div className="card-body list-content px-2">
                    <div className='row  m-0'>
                      <div className='col-2 p-0'>
                        <img src={Check} alt='Check' />
                      </div>
                      <div className='col-10 text-start p-0'>
                        <h5>Address view feature</h5>
                      </div>
                      <div className='col-2 p-0'>
                        <img src={Check} alt='Check' />
                      </div>
                      <div className='col-10 text-start p-0'>
                        <h5>200 Address View/4 Month</h5>
                      </div>
                      <div className='col-2 p-0'>
                        <img src={Check} alt='Check' />
                      </div>
                      <div className='col-10 text-start p-0'>
                        <h5>15 Address View/ Day</h5>
                      </div>
                      <div className='col-2 p-0'>
                        <img src={Check} alt='Check' />
                      </div>
                      <div className='col-10 text-start p-0'>
                        <h5>Express interest feature</h5>
                      </div>
                      <div className='col-2 p-0'>
                        <img src={Check} alt='Check' />
                      </div>
                      <div className='col-10 text-start p-0'>
                        <h5>600 Express Interest/4 Month</h5>
                      </div>
                      <div className='col-2 p-0'>
                        <img src={Check} alt='Check' />
                      </div>
                      <div className='col-10 text-start p-0'>
                        <h5>4 Months Validity</h5>
                      </div>
                      <div className='col-2 p-0'>
                        <img src={Check} alt='Check' />
                      </div>
                      <div className='col-10 text-start p-0'>
                        <h5>Dedicated Customer Relation Manager Support For 4 Months. . On Request Free Profile Conversion to Classic Plus Package</h5>
                      </div>
                      <div className='col-lg-5 col-md-5 col-sm-12 col-12 p-0'>
                        <h3 className='text-center px-3 pt-4'>₹12000</h3>
                      </div>
                      <div className='col-lg-7 col-md-7 col-sm-12 col-12 text-start p-0'>
                        <div className="mt-3 text-end px-3">
                          <button className="btn btn-outline-success w-100" type="button">Upgrade</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-12 py-md-2 py-sm-2 py-2'>
                <div className="card">
                  <div className="card-header packagr-head">
                    <h3>Online Premium</h3>
                    <p>Online Package</p>
                  </div>
                  <div className="card-body list-content px-2">
                    <div className='row  m-0'>
                      <div className='col-2 p-0'>
                        <img src={Check} alt='Check' />
                      </div>
                      <div className='col-10 text-start p-0'>
                        <h5>Address view feature</h5>
                      </div>
                      <div className='col-2 p-0'>
                        <img src={Check} alt='Check' />
                      </div>
                      <div className='col-10 text-start p-0'>
                        <h5>200 Address View/4 Month</h5>
                      </div>
                      <div className='col-2 p-0'>
                        <img src={Check} alt='Check' />
                      </div>
                      <div className='col-10 text-start p-0'>
                        <h5>15 Address View/ Day</h5>
                      </div>
                      <div className='col-2 p-0'>
                        <img src={Check} alt='Check' />
                      </div>
                      <div className='col-10 text-start p-0'>
                        <h5>Express interest feature</h5>
                      </div>
                      <div className='col-2 p-0'>
                        <img src={Check} alt='Check' />
                      </div>
                      <div className='col-10 text-start p-0'>
                        <h5>600 Express Interest/4 Month</h5>
                      </div>
                      <div className='col-2 p-0'>
                        <img src={Check} alt='Check' />
                      </div>
                      <div className='col-10 text-start p-0'>
                        <h5>4 Months Validity</h5>
                      </div>
                      <div className='col-2 p-0'>
                        <img src={Check} alt='Check' />
                      </div>
                      <div className='col-10 text-start p-0'>
                        <h5>Dedicated Customer Relation Manager Support For 4 Months. . On Request Free Profile Conversion to Classic Plus Package</h5>
                      </div>
                      <div className='col-lg-5 col-md-5 col-sm-12 col-12 p-0'>
                        <h3 className='text-center px-3 pt-4'>₹12000</h3>
                      </div>
                      <div className='col-lg-7 col-md-7 col-sm-12 col-12 text-start p-0'>
                        <div className="mt-3 text-end px-3">
                          <button className="btn btn-outline-success w-100" type="button">Upgrade</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='success-store mt-5 pb-5'>
          <h5 className='pt-5'>Testimonials</h5>
          <h2 className='my-3'>Success Stories</h2>
          <div className='container-75 pt-5'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className='row m-0'>
                    <div className='col-lg-4 col-md-12 col-sm-12 col-12'>
                      <img src={successstore} alt='successstore' className='w-100' />
                    </div>
                    <div className='col-lg-8 col-md-12 col-sm-12 col-12 store-content'>
                      <img src={star} alt='star' />
                      <p>I can proudly say that I've found my soulmate here, and I would recommend Matrimony to anyone in search of love and companionship. Thank you for bringing us together!</p>
                      <p>Yassin Kasongo</p>
                    </div>
                  </div>

                </div>
                <div className="carousel-item">
                  <div className='row m-0'>
                    <div className='col-lg-4 col-md-12 col-sm-12 col-12'>
                      <img src={successstore} alt='successstore' className='w-100' />
                    </div>
                    <div className='col-lg-8 col-md-12 col-sm-12 col-12 store-content'>
                      <img src={star} alt='star' />
                      <p>I can proudly say that I've found my soulmate here, and I would recommend Matrimony to anyone in search of love and companionship. Thank you for bringing us together!</p>
                      <p>Yassin Kasongo</p>
                    </div>
                  </div>

                </div>
              </div>
              <button className="carousel-control-prev prev-btn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <img src={prev} />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next prev-btn next-btn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <img src={next} />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

        </div>
        <div className='section-faq mt-5'>
          <h1>Frequently Asked Questions</h1>
          <div className="container-80">
            <Faq />
          </div>
        </div>
      </section >
      <Topmove />
      <Footer />
    </>
  )
}

export default Home