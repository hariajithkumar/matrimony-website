import React, { useState } from 'react';
import Topheader from '../Common/page/Topheader'

import calender from '../Common/image/Calendar.png'

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLock, faEnvelope, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';


import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';

import 'react-datepicker/dist/react-datepicker.css';

import { Form } from 'react-bootstrap';
import Select from 'react-select';

function Tophome() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [checkDetails,setcheckDetails] = useState(1)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const sumbit = () => {
        navigate('/Myprofile')
    }
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [confirm, setconfirm] = useState(false);
    const toggleConfiemPasswordVisibility = () => {
        setconfirm(!confirm);
    };

    const agreeCheck = () =>{
        const onvalue = setcheckDetails((prevValue) => (prevValue === 0 ? 1 : 0));
    }
    const login = () => {
        navigate('/login')
    }
    console.log(checkDetails)
    return (
        <div>
            {/* <Topheader /> */}
            <div>
                <div className='header-bg-img '>
                    <div className='register-form mt-5'>
                        <div className='form-submit'>
                            <form>
                                <h2 className='text-center register-head'>FREE FOR REGISTER NOW</h2>
                                <div className='row m-0 px-2'>
                                    <div className='col-lg-6 col-md-6 col-sm-12 col-12 ps-2 my-lg-3 my-2'>
                                        <label>Name *</label>
                                        <input type="text" className="form-control" placeholder='Your Name' />
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12 col-12 ps-2 my-lg-3 my-2'>
                                        <label>Gender *</label><br/>
                                        <select className=""  aria-label="Default select example">
                                            <option selected>Select gender</option>
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>
                                        </select>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12 col-12 ps-2 my-lg-3 my-2'>
                                        <label>Mobile Number *</label>
                                        <input type="text" className="form-control" placeholder='Your Name' />
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12 col-12 ps-2 my-lg-3 my-2'>
                                        <label>E-Mail Address *</label>
                                        <input type="text" className="form-control" placeholder='Your Email' />
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-12 col-12 ps-2 my-lg-3 my-2 position-relative'>
                                        <label>Date of Birth *</label>
                                        <input type="date" id='datepicker' className="form-control" placeholder='Your DOB' />
                                        {/* <span className='position-absolute img-calender'><img src={calender} /></span> */}
                                    </div>
                                    {/* <div className='col-lg-4'>
                                        <div className="date-picker-container">
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={(date) => setSelectedDate(date)}
                                                dateFormat="MMMM d, yyyy"
                                                placeholderText="Select a date"
                                                className="date-picker-input"
                                            />
                                            <FaCalendarAlt className="date-picker-icon" />
                                        </div>
                                    </div> */}
                                    <div className='col-lg-4 col-md-6 col-sm-12 col-12 ps-2 my-lg-3 my-2'>
                                        <label>Religion *</label>
                                        <select className="option-select" aria-label="Default select example">
                                            <option selected>Select</option>
                                            <option value="Hindu">Hindu</option>
                                            <option value="Christian">Christian</option>
                                            <option value="Muslim">Muslim</option>
                                        </select>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-12 col-12 ps-2 my-lg-3 my-2'>
                                        <label>Caste *</label>
                                        <select className="option-select" aria-label="Default select example">
                                            <option selected>Select</option>
                                            <option value="Hindu">Hindu</option>
                                            <option value="Christian">Christian</option>
                                            <option value="Muslim">Muslim</option>
                                        </select>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12 col-12 ps-2 my-lg-3 my-2'>
                                        <label>Password *</label>
                                        <div className="input-group box-border">
                                            <input type={showPassword ? 'text' : 'password'} className="form-control border-0" id="password" placeholder="Enter your password" required />
                                            <button className="btn eyes-btn" type="button" onClick={togglePasswordVisibility}>
                                                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className='text-white' />
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12 col-12 ps-2 my-lg-3 my-2 '>
                                        <label>Confirm Password *</label>
                                        <div className="input-group box-border">
                                            <input type={confirm ? 'text' : 'password'} className="form-control border-0" id="password" placeholder="Confrim your Password" />
                                            <button
                                                className="btn eyes-btn"
                                                type="button"
                                                onClick={toggleConfiemPasswordVisibility}
                                            >
                                                <FontAwesomeIcon icon={confirm ? faEye : faEyeSlash} className='text-white' />
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div class="mb-3 form-check">
                                            <input type="checkbox" class="form-check-input check-box" id="exampleCheck1" checked={checkDetails === 0} onClick={agreeCheck}/>
                                            <label class="form-check-label" for="exampleCheck1">I agree to the T&C and privacy policy</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className='mb-3 '>
                                {/* <button className='btn-width' disabled={checkDetails} onClick={() => sumbit()}>Register</button> */}
                                <button className={checkDetails ? "agree" : "btn-width"} disabled={checkDetails} onClick={() => sumbit()}>Register</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tophome