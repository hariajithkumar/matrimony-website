// RightNav.js

import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../image/Sahyatri-Matrimony-Logo.png';
import { setClass1Hide } from '../../Redux/CreateSlice'; import '../css/rightnav.css'; // You can style your navigation bar in a separate CSS file
import '../css/topheader.css'
import userprofile from '../image/userprofile.png'
import ajith from '../image/profile-2.png'
import rightarrow from '../image/rigth-arrow.png'
import rightinactive from '../image/right-inactive.png'
// import rightinactive from '../image/white-right.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
const Rightnav = ({ isOpen, onClose }) => {
    const { isClass1Show } = useSelector((state) => state.navButton)
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isRightNavOpen, setIsRightNavOpen] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname, search, hash } = location;

    const navButton = () => {
        if (isClass1Show == false) {
            dispatch(setClass1Hide(true))
        } else {
            dispatch(setClass1Hide(false))
        }
    }
    const signup = () => {
        navigate('/register')
    }
    const signin = () => {
        navigate('/login')
    }
    const Logout = () => {
        navigate('/')
    }
    const handleItemClick = (item) => {
        // dispatch(setActiveItem(item))
        if (item === 'Myprofile') {
            navigate('/Myprofile')
        } else if (item === 'Partner') {
            navigate('/Partner')
        } else if (item === 'Photoupload') {
            navigate('/Photoupload')
        } else if (item === 'Proofverify') {
            navigate('/Proofverify')
        }
    };

    return (
        <div className={`right-nav ${isOpen ? 'open' : ''} scroll-container`}>
            <div className='scroll-container'>
                <nav class="navbar navbar-expand-lg navbarlist sticky-top nav-right ">
                    <div class="container-95">
                        <div class="userprofile" id="">
                            <button onClick={onClose}><FontAwesomeIcon icon={faClose} /></button>
                            <div className='px-3 pb-2'>
                                <div className='row m-0'>
                                    <div className='col-lg-6 align-self-center'>
                                        <div class="profile-container">
                                            <img src={ajith} alt="Profile Image" class="profile-image" />
                                        </div>
                                    </div>
                                    <div className='col-lg-6 profile-name align-self-center'>
                                        <h4>Hi Ajith !</h4>
                                        <h5>ID : SYM000001</h5>
                                        <h6>View Profile</h6>
                                    </div>
                                </div>
                                <hr className='mt-0' />
                                <ul className='p-0 profile-details'>
                                    <li className={`list-group-item border-0 hover-action ${pathname === '/Myprofile' ? 'active' : 'inactive'}`} onClick={() => handleItemClick('Myprofile')}>
                                        My Profile <img src={pathname === '/Myprofile' ? rightarrow : rightinactive} className='pe-2 float-end' />
                                    </li>
                                    <li className={`list-group-item border-0 hover-action ${pathname === '/Partner' ? 'active' : 'inactive'}`} onClick={() => handleItemClick('Partner')}>
                                        Partner Preference <img src={pathname === '/Partner' ? rightarrow : rightinactive} className='pe-2 float-end' />
                                    </li>
                                    <li className={`list-group-item border-0 hover-action ${pathname === '/ajith' ? 'active' : 'inactive'}`} onClick={() => handleItemClick('Account')}>
                                        Matches <img src={pathname === '/ajith' ? rightarrow : rightinactive} className='pe-2 float-end' />
                                    </li>
                                    <li className={`list-group-item border-0 hover-action ${pathname === '/Photoupload' ? 'active' : 'inactive'}`} onClick={() => handleItemClick('Photoupload')}>
                                        Photos & Horoscope <img src={pathname === '/Photoupload' ? rightarrow : rightinactive} className='pe-2 float-end' />
                                    </li>
                                    <li className={`list-group-item border-0 hover-action ${pathname === '/Proofverify' ? 'active' : 'inactive'}`} onClick={() => handleItemClick('Proofverify')}>
                                        Verify my profile <img src={pathname === '/Proofverify' ? rightarrow : rightinactive} className='pe-2 float-end' />
                                    </li>
                                    <li className={`list-group-item border-0 hover-action ${pathname === '/ajith' ? 'active' : 'inactive'}`} onClick={() => handleItemClick('Account')}>
                                        Settings <img src={pathname === '/ajith' ? rightarrow : rightinactive} className='pe-2 float-end' />
                                    </li>
                                    <li className='list-group-item border-0 hover-action' onClick={() => Logout()}>
                                        Logout <img src={pathname === '/' ? rightarrow : rightinactive} className='pe-2 float-end' />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className='complete-card text-center py-4'>
                    <h1>60<span>%</span></h1>
                    <h4>Need to Complete</h4>
                    <p>Enhance Your Chances Of Getting Feedback To Your Profile.</p>
                    <button>Complete Now</button>
                </div>
            </div>

        </div>
    );
};

export default Rightnav;
