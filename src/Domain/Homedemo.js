import React from 'react';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.min.css';
// import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import Header from './Header';
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
import bestmatch from '../Common/image/best-match.png'
import verify from '../Common/image/verify.png'
import privacy from '../Common/image/privacy.png'
import Check from '../Common/image/Check.png'
import successstore from '../Common/image/success-store.png'
import star from '../Common/image/Stars.png'
import Footer from './Footer';
function Home() {
  return (
    <>
      <Header />
      <div className='header-position header-content'>
        <h2 className='text-center'>Some one special is <br /><span className='waiting-text'>waiting for you</span></h2>
        <div className='row m-0 pt-5'>
          <div className='col-4'>
            <img src={signup} alt='signup' />
            <span className='content-span'>Sign Up</span>
          </div>
          <div className='col-4 text-end'>
            <img src={connect} alt='connect' />
            <span className='content-span'>Connect</span>
          </div>
          <div className='col-4 text-end'>
            <img src={interact} alt='interact' />
            <span className='content-span'>Interact</span>
          </div>
        </div>
      </div>
      <div className='header-card'>
        <div className="container-80 mt-4">
          <div className="card card-bg">
            <div className="card-body">
              <h5 className="card-title text-center quich-search pt-3 pb-3">Quick Search</h5>
              <div className="mb-3">
                <div className='row m-0'>
                  <div className='col-3'>
                    <label for="firstName" className="form-label">I’m Looking for*</label>
                    <select className="w-100" id="selecttype">
                      <option selected value='disabled'>select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className='col-3'>
                    <label for="firstName" className="form-label">Religion*</label>
                    <select className="w-100" id="selecttype">
                      <option selected value='disabled'>select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className='col-3'>
                    <label for="firstName" className="form-label">Age From (yrs)</label>
                    <select className="w-100" id="selecttype">
                      <option selected value='disabled'>select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className='col-3'>
                    <label for="firstName" className="form-label">Age From (yrs)</label>
                    <select className="w-100" id="selecttype">
                      <option selected value='disabled'>select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
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
      </div>
      <section className='section-start'>
        <div className='section-profile'>
          <h5 className='text-center mb-3'>Introducing Profile</h5>
          <h2 className='text-center'>Highlighted Profiles</h2>
          <div className='container-85 mt-5 profile-position'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active pb-5">
                  <div className='row m-0'>
                    <div className='col-3 d-flex align-items-stretch'>
                      <div className="card card-image1 card-border align-self-stretch" >
                        <div className="card-body card-content">
                          <h5 className="card-title">Joaquín Díaz (age - 27)</h5>
                          <h6 className="card-title">B.Tech</h6>
                          <h6 className="card-title">Coimbatore</h6>
                        </div>
                      </div>
                    </div>
                    <div className='col-3 d-flex align-items-stretch'>
                      <div className="card card-image2 card-border align-self-stretch" >
                        <div className="card-body card-content">
                          <h5 className="card-title">MohammedHassan(age-27)</h5>
                          <h6 className="card-title">B.Tech</h6>
                          <h6 className="card-title">Coimbatore</h6>
                        </div>
                      </div>
                    </div>
                    <div className='col-3 d-flex align-items-stretch'>
                      <div className="card card-image3 card-border align-self-stretch" >
                        <div className="card-body card-content">
                          <h5 className="card-title">Đường Vy (age - 27)</h5>
                          <h6 className="card-title">B.Tech</h6>
                          <h6 className="card-title">Coimbatore</h6>
                        </div>
                      </div>
                    </div>
                    <div className='col-3 d-flex align-items-stretch'>
                      <div className="card card-image3 card-border align-self-stretch" >
                        <div className="card-body card-content">
                          <h5 className="card-title">Đường Vy (age - 27)</h5>
                          <h6 className="card-title">B.Tech</h6>
                          <h6 className="card-title">Coimbatore</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item pb-5">
                  <div className='row m-0'>
                    <div className='col-3 d-flex align-items-stretch'>
                      <div className="card card-image1 card-border align-self-stretch" >
                        <div className="card-body card-content">
                          <h5 className="card-title">Joaquín Díaz (age - 27)</h5>
                          <h6 className="card-title">B.Tech</h6>
                          <h6 className="card-title">Coimbatore</h6>
                        </div>
                      </div>
                    </div>
                    <div className='col-3 d-flex align-items-stretch'>
                      <div className="card card-image2 card-border align-self-stretch" >
                        <div className="card-body card-content">
                          <h5 className="card-title">MohammedHassan(age-27)</h5>
                          <h6 className="card-title">B.Tech</h6>
                          <h6 className="card-title">Coimbatore</h6>
                        </div>
                      </div>
                    </div>
                    <div className='col-3 d-flex align-items-stretch'>
                      <div className="card card-image3 card-border align-self-stretch" >
                        <div className="card-body card-content">
                          <h5 className="card-title">Đường Vy (age - 27)</h5>
                          <h6 className="card-title">B.Tech</h6>
                          <h6 className="card-title">Coimbatore</h6>
                        </div>
                      </div>
                    </div>
                    <div className='col-3 d-flex align-items-stretch'>
                      <div className="card card-image3 card-border align-self-stretch" >
                        <div className="card-body card-content">
                          <h5 className="card-title">Đường Vy (age - 27)</h5>
                          <h6 className="card-title">B.Tech</h6>
                          <h6 className="card-title">Coimbatore</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev prev-width" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <img src={prev} className='card-prev' />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next next-width" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <img src={next} className='card-next' />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className='container-85 mt-3 profile-position'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active pb-5">
                  <div className='row m-0'>
                    <div className='col-3 d-flex align-items-stretch'>
                      <div className="card card-image1 card-border align-self-stretch" >
                        <div className="card-body card-content">
                          <h5 className="card-title">Joaquín Díaz (age - 27)</h5>
                          <h6 className="card-title">BE.Tech</h6>
                          <h6 className="card-title">Coimbatore</h6>
                        </div>
                      </div>
                    </div>
                    <div className='col-3 d-flex align-items-stretch'>
                      <div className="card card-image2 card-border align-self-stretch" >
                        <div className="card-body card-content">
                          <h5 className="card-title">MohammedHassan(age-27)</h5>
                          <h6 className="card-title">B.Tech</h6>
                          <h6 className="card-title">Coimbatore</h6>
                        </div>
                      </div>
                    </div>
                    <div className='col-3 d-flex align-items-stretch'>
                      <div className="card card-image3 card-border align-self-stretch" >
                        <div className="card-body card-content">
                          <h5 className="card-title">Đường Vy (age - 27)</h5>
                          <h6 className="card-title">B.Tech</h6>
                          <h6 className="card-title">Coimbatore</h6>
                        </div>
                      </div>
                    </div>
                    <div className='col-3 d-flex align-items-stretch'>
                      <div className="card card-image3 card-border align-self-stretch" >
                        <div className="card-body card-content">
                          <h5 className="card-title">Đường Vy (age - 27)</h5>
                          <h6 className="card-title">B.Tech</h6>
                          <h6 className="card-title">Coimbatore</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item pb-5">
                  <div className='row m-0'>
                    <div className='col-3 d-flex align-items-stretch'>
                      <div className="card card-image1 card-border align-self-stretch" >
                        <div className="card-body card-content">
                          <h5 className="card-title">Joaquín Díaz (age - 27)</h5>
                          <h6 className="card-title">B.Tech</h6>
                          <h6 className="card-title">Coimbatore</h6>
                        </div>
                      </div>
                    </div>
                    <div className='col-3 d-flex align-items-stretch'>
                      <div className="card card-image2 card-border align-self-stretch" >
                        <div className="card-body card-content">
                          <h5 className="card-title">MohammedHassan(age-27)</h5>
                          <h6 className="card-title">B.Tech</h6>
                          <h6 className="card-title">Coimbatore</h6>
                        </div>
                      </div>
                    </div>
                    <div className='col-3 d-flex align-items-stretch'>
                      <div className="card card-image3 card-border align-self-stretch" >
                        <div className="card-body card-content">
                          <h5 className="card-title">Đường Vy (age - 27)</h5>
                          <h6 className="card-title">B.Tech</h6>
                          <h6 className="card-title">Coimbatore</h6>
                        </div>
                      </div>
                    </div>
                    <div className='col-3 d-flex align-items-stretch'>
                      <div className="card card-image3 card-border align-self-stretch" >
                        <div className="card-body card-content">
                          <h5 className="card-title">Đường Vy (age - 27)</h5>
                          <h6 className="card-title">BE.Tech</h6>
                          <h6 className="card-title">Coimbatore</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev prev-width" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <img src={prev} className='card-prev' />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next next-width" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <img src={next} className='card-next' />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className='section-work work-img mt-5'>
          <div className='pt-5 container-80'>
            <h2 className='text-center'>How <span style={{ color: "#00425E" }}>Does</span> It Work ?</h2>
            <div className='row m-0 pt-5'>
              <div className='col-3 text-center'>
                <img src={create} alt='create' />
                <h3>Create Account</h3>
                <p className='text-center'>Lorem ipsum dolor sit amet, consetetu sadipscing elitr, sed diam nonumy.</p>
              </div>
              <div className='col-3 text-center'>
                <img src={profile} alt='profile' />
                <h3>Browse Profiles</h3>
                <p className='text-center'>Lorem ipsum dolor sit amet, consetetu sadipscing elitr, sed diam nonumy.</p>
              </div>
              <div className='col-3 text-center'>
                <img src={connects} alt='connects' />
                <h3>Connect</h3>
                <p className='text-center'>Lorem ipsum dolor sit amet, consetetu sadipscing elitr, sed diam nonumy.</p>
              </div>
              <div className='col-3 text-center'>
                <img src={intreract} alt='intreract' />
                <h3>Interact</h3>
                <p className='text-center'>Lorem ipsum dolor sit amet, consetetu sadipscing elitr, sed diam nonumy.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-5 welcome container-85'>
          <div className='row m-0'>
            <div className='col-6'>
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
            <div className='col-6'>
              <img src={welcome} alt='welcome' className='w-100' />
            </div>
          </div>
        </div>
        <div className='mt-5 connect-match'>
          <div className='container-85'>
            <div className='row m-0'>
              <div className='col-6'>
                <img src={connectpair} alt='connectpair' className='w-100' />
              </div>
              <div className='col-6 connect-content'>
                <h2 className='pb-3'>Connect with matches the way you like</h2>
                <p className='pb-3'>Offer subscription plans for premium features that enhance the user experience. These features may include unlimited messaging, highlighted profiles, or advanced matching algorithms. Implement in-app purchases and seamless payment integration for user convenience.</p>
                <div className="mt-3">
                  <button className="btn btn-outline-success " type="button">Register now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='video-call container-85'>
          <div className='row'>
            <div className='col-8 app-content'>
              <h5>App Download</h5>
              <h2 className='mt-2'>"Video Call Matching: Your Path to Genuine Connections"</h2>
              <p>Elevate your online matrimony experience with our Video Call Matching feature. Connect with potential partners in real time, see their smiles, and have meaningful conversations through live video calls. It's the ultimate way to build authentic connections and determine compatibility. Try Video Call Matching today and take the first step towards finding your true love.</p>
              <img src={GooglePlay} alt='GooglePlay' className='playstore' />
              <img src={AppStore} alt='AppStore' className='playstore' />
              <img src={videocall2} alt='videocall-1' className='video-1' />
              <img src={videocall} alt='videocall' className='video-2' />
              <img src={videocall1} alt='videocall-2' className='video-3' />
            </div>
          </div>

        </div>
        <div className='section-trust'>
          <div className='container-85 text-center pb-3'>
            <h2 className='w-50 mx-auto '>Trusted by Millions</h2>
            <p className='w-75 mx-auto'>"Love doesn't make the world go around. Love is what makes the ride worthwhile." Millions of Active Matrimonial users around the world find their true love and partners from this site. We are always there to help and find you the suitable match for yourself.</p>
          </div>
          <div className='container-75 text-center'>
            <div className='row m-0 pb-5'>
              <div className='col-4 '>
                <button className='w-100'><img src={bestmatch} className='px-2' /> Best Matches</button>
              </div>
              <div className='col-4 '>
                <button className='w-100'><img src={verify} className='px-2' /> Verified Profiles</button>
              </div>
              <div className='col-4 '>
                <button className='w-100'><img src={privacy} className='px-2' /> 100% Privacyes</button>
              </div>
            </div>
          </div>
        </div>
        <div className='best-package text-center mt-5'>
          <h5>Packages</h5>
          <h2>Best Packages for you</h2>
          <div className='container-80 pt-5'>
            <div className='row m-0'>
              <div className='col-4'>
                <div className="card">
                  <div className="card-header packagr-head">
                    <h3>Royal Delight</h3>
                    <p>CR Manager Support</p>
                  </div>
                  <div className="card-body list-content px-2">
                    <div className='row'>
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
                    </div>
                    <h3 className='text-start px-3 pt-4'>₹12000</h3>
                    <div className="mt-3 text-start px-3">
                      <button className="btn btn-outline-success " type="button">Upgrade</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-4'>
                <div className="card">
                  <div className="card-header packagr-head">
                    <h3>Premium Delight</h3>
                    <p>Assisted Service</p>
                  </div>
                  <div className="card-body list-content px-2">
                    <div className='row'>
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
                    </div>
                    <h3 className='text-start px-3 pt-4'>₹7500</h3>
                    <div className="mt-3 text-start px-3">
                      <button className="btn btn-outline-success " type="button">Upgrade</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-4'>
                <div className="card">
                  <div className="card-header packagr-head">
                    <h3>Online Premium</h3>
                    <p>Online Package</p>
                  </div>
                  <div className="card-body list-content px-2">
                    <div className='row'>
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
                    </div>
                    <h3 className='text-start px-3 pt-4'>₹7000</h3>
                    <div className="mt-3 text-start px-3">
                      <button className="btn btn-outline-success " type="button">Upgrade</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='success-store mt-5'>
          <h5 className='pt-5'>Testimonials</h5>
          <h2 className='my-3'>Success Stories</h2>
          <div className='container-75 pt-5'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className='row m-0'>
                    <div className='col-4'>
                      <img src={successstore} alt='successstore' className='w-100' />
                    </div>
                    <div className='col-8 store-content'>
                      <img src={star} alt='star' />
                      <p>I can proudly say that I've found my soulmate here, and I would recommend Matrimony to anyone in search of love and companionship. Thank you for bringing us together!</p>
                      <p>Yassin Kasongo</p>
                    </div>
                  </div>

                </div>
                <div className="carousel-item">
                  <div className='row m-0'>
                    <div className='col-4'>
                      <img src={successstore} alt='successstore' className='w-100' />
                    </div>
                    <div className='col-8 store-content'>
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
              <button className="carousel-control-next prev-btn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <img src={next} />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

        </div>
        <div className='section-faq mt-5'>
          <h1>Frequently Asked Questions</h1>
          <div className="accordion container-80" id="accordionExample">
            <div className='row m-0'>
              <div className='col-6'>
                <div className='card border-0 faq-card my-5'>
                  <div className="accordion-item border-0">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How to register on Tamil Matrimony?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card border-0 faq-card my-5'>
                  <div className="accordion-item border-0">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How to register on Tamil Matrimony?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card border-0 faq-card my-5'>
                  <div className="accordion-item border-0">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How to register on Tamil Matrimony?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className='col-6'>
                <div className='card border-0 faq-card my-5'>
                  <div className="accordion-item border-0">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How to register on Tamil Matrimony?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card border-0 faq-card my-5'>
                  <div className="accordion-item border-0">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How to register on Tamil Matrimony?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card border-0 faq-card my-5'>
                  <div className="accordion-item border-0">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How to register on Tamil Matrimony?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home



import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../Common/image/Sahyatri-Matrimony-Logo.png';
import Owl from './Owl';
import '../Common/css/style.css'
import Header from '../Common/page/Header';
import connectpair from '../Common/image/connect-pair.png'

function Search() {
  const location = useLocation();
  const { pathname, search, hash } = location;
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const upCardRef = useRef(null);

  const leftSlideRef = useRef(null);
  const rightSlideRef = useRef(null);

  const handleScroll = () => {
    const leftSlide = leftSlideRef.current;
    const rightSlide = rightSlideRef.current;

    if (leftSlide && isElementInViewport(leftSlide)) {
      leftSlide.classList.add('slide-left');
    }

    if (rightSlide && isElementInViewport(rightSlide)) {
      rightSlide.classList.add('slide-right');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  return (
    <div>
      <Header />
      {/* <Owl /> */}
      <div className="slide-container">
        <div ref={leftSlideRef} className="slide-element">
          <div className='row m-0'>
            <div className='col-6'>
                <img src={connectpair} />
            </div>
            <div className='col-6'>
                <h1>ajith</h1>
            </div>

          </div>
        </div>
        <div ref={rightSlideRef} className="slide-element">
        <div className='row m-0'>
            <div className='col-6'>
                <h1>ajith</h1>
            </div>
            <div className='col-6'>
                <img src={connectpair} />
            </div>
          </div>
        </div>
        <div className="content">
          {/* Your main content goes here */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  )
}

export default Search