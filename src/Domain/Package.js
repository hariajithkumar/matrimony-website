import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs, Tab, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Common/page/Header';
import Footer from '../Common/page/Footer';
import '../Common/css/style.css'
import '../Common/css/search.css'

import Check from '../Common/image/Check.png'
import Topheader from '../Common/page/Topheader';
import Topmove from '../Common/page/Topmove';
import { setPaymentProcess } from '../Redux/CreateSlice';

function Search() {
  const { isClass1Show,paymentProcess } = useSelector((state) => state.matrimony)
  const [key, setKey] = useState('home');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const payment = (id) => {
        dispatch(setPaymentProcess(id))
        navigate('/upgradeprocess')
  }
    // const upgrade = () => {
    //     navigate
    // }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='section-search'>
      <Topheader />
      <div className='header-bg-img header-content'>
        <h2 className='text-center mb-sm-3'>Upgrade and enjoy added benefits</h2>
      </div>
      {/* <div className={`header-content ${isClass1Show ? 'header-position' : 'header-active'}`}>
        <h2 className='text-center mb-sm-3'>Search Your Partner Here</h2>
      </div> */}
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
                                            <button className="btn btn-outline-success w-100" type="button" onClick={(id)=>payment(1)}>Upgrade</button>
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
            <Topmove />
      <Footer />
    </div>
  )
}

export default Search