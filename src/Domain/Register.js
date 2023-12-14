import React, { useEffect } from 'react'
import '../Common/css/main.css'
import image1 from '../Common/image/matrimony7.jpg';
import image2 from '../Common/image/matrimony4.jpg';
import image3 from '../Common/image/matrimony9.jpg';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate()
    const sumbit = () =>{
        navigate('/Myprofile')
    }
    const options = [];
    // Create options numbered from 1 to 31
    for (let i = 1; i <= 31; i++) {
        options.push({ value: i, label: i });
    }
    const months = [];
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    for (let i = 0; i <= monthNames.length; i++) {
        const monthIndex = i;
        months.push({ value: monthIndex, label: monthNames[monthIndex] });
    }

    const currentYear = new Date().getFullYear();
    const years = [];

    for (let i = 0; i < 100; i++) {
        const yearIndex = currentYear - i;
        years.push({ value: yearIndex, label: yearIndex });
    }

    const login = () => {
        navigate('/login')
    }
    
    return (
        <div className='register'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image1} className="d-block w-100 zoom-in" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className="d-block w-100 zoom-in" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className="d-block w-100 zoom-in" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='register-form container-60'>
                <div className='form-submit'>
                    <form>
                        <h2 className='text-center'>Register</h2>
                        <hr className='text-white'/>
                        <div className='row m-0'>
                            <div className='col-lg-6 col-md-6 col-sm-12 col-12 ps-2 my-3'>
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder='Your Name' />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12 col-12 ps-2 my-3'>
                                <label>Gender</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Select</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                </select>
                            </div>
                            <label className='px-2'>Dataof Brith *</label>
                            <div className='col-lg-4 col-md-6 col-sm-12 col-12 ps-2 mb-3'>
                                <Form.Group controlId="searchSelectBox">
                                    <Select
                                        options={options}
                                        isSearchable
                                        placeholder="Select an option..."
                                    />
                                </Form.Group>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12 col-12 ps-2 mb-3'>
                                <Form.Group controlId="searchSelectBox">
                                    <Select
                                        options={months}
                                        isSearchable
                                        placeholder="Select an option..."
                                    />
                                </Form.Group>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12 col-12 ps-2 mb-3'>
                                <Form.Group controlId="searchSelectBox">
                                    <Select
                                        options={years}
                                        isSearchable
                                        placeholder="Select an option..."
                                    />
                                </Form.Group>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12 col-12 ps-2 my-3'>
                                <div className='row m-0'>
                                    <label className='p-0'>Mobile Number *</label>
                                    <div className='col-lg-5 col-md-5 col-sm-12 col-12 p-0 my-lg-0 my-2'>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Select</option>
                                            <option value="+91">+91</option>
                                            <option value="+93">+93</option>
                                        </select>
                                    </div>
                                    <div className='col-lg-7 col-md-7 col-sm-12 col-12 my-lg-0 my-2 px-lg-2 px-md-2 p-0'>
                                        <input type="text" className="form-control" placeholder='Your Phonenumber' />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12 col-12 ps-2 my-3'>
                                <label>E-Mail Address *</label>
                                <input type="text" className="form-control" placeholder='Your Email' />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12 col-12 ps-2 my-3'>
                                <label>Religion *</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Select</option>
                                    <option value="Hindu">Hindu</option>
                                    <option value="Christian">Christian</option>
                                    <option value="Muslim">Muslim</option>
                                </select>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12 col-12 ps-2 my-3'>
                                <label>Caste *</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Select</option>
                                    <option value="Hindu">Hindu</option>
                                    <option value="Christian">Christian</option>
                                    <option value="Muslim">Muslim</option>
                                </select>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12 col-12 ps-2 my-3'>
                                <label>Password *</label>
                                <input type="text" className="form-control" placeholder='Your Email' />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12 col-12 ps-2 my-3'>
                                <label>Confirm Password *</label>
                                <input type="text" className="form-control" placeholder='Your Email' />
                            </div>
                            <div className='col-12'>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">I accept the Privacy Policy & Terms and conditions</label>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className='text-center my-3'>
                        <button onClick={()=>sumbit()}>Register</button>
                    </div>
                    <div className='text-center'>
                        <p>Don't have an account? <a href="" id="signup-link" onClick={() => login()}>Sign up</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register