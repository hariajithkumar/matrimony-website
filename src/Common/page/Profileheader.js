import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../image/Sahyatri-Matrimony-Logo.png';
import { setClass1Hide } from '../../Redux/CreateSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/topheader.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBox, faContactCard, faHome, faMoneyBill, faSearch } from '@fortawesome/free-solid-svg-icons';

import userprofile from '../image/userprofile.png'

import '../css/myprofile.css'

import Rightnav from './Rightnav';

function Profileheader() {

    const { isClass1Show } = useSelector((state) => state.navButton)
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isRightNavOpen, setIsRightNavOpen] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname, search, hash } = location;
    const toggleRightNav = () => {
        setIsRightNavOpen(!isRightNavOpen);
    };
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

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    // Close the dropdown if the user clicks outside of it
    const handleOutsideClick = (event) => {
        if (isDropdownVisible && !event.target.matches('.dropdown-btn')) {
            setDropdownVisible(false);
        }
    };

    // Attach the outside click handler to the window
    useEffect(() => {
        window.addEventListener('click', handleOutsideClick);
        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [isDropdownVisible]);

    const handleImageClick = () => {
        setIsOpen(!isOpen);
    };
    const Logout = () => {
        navigate('/login')
    }
    return (
        <>
            <header className='faq-bg-img position-sticky top-0 sticky-header bg-white'>
                <div className='nav-section d-lg-block d-none'>
                    <nav class="navbar navbar-expand-lg navbarlist sticky-top">
                        <div class="container-fluid container-95">
                            <div className='navbar-width'>
                                <a class="navbar-brand " href="#">
                                    <img src={Logo} alt="Sahyatri-Matrimony-Logo" className='nav-logo' />
                                </a>
                            </div>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => navButton()}>
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse navbarNav userprofile" id="navbarSupportedContent">
                                <ul class="navbar-nav d-flex justify-content-center width-navbar">
                                    <li className='nav-item'>
                                        <NavLink exact to={{ pathname: '/Myprofile', state: { isClass1Show } }} className={`${pathname === '/Myprofile' || pathname === '/Partner' || pathname === '/Photoupload' || pathname === '/Proofverify' ? 'active' : 'custom-active'} text-decoration-none`}>
                                            My Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact to="/search" className={`${pathname === '/search' ? 'active' : 'custom-active'} text-decoration-none`}>
                                            Search
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact to="/package" className={`${pathname === '/package' ? 'active' : 'custom-active'} text-decoration-none`}>
                                            Upgrade
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact to="/about" className={`${pathname === '/about' ? 'active' : 'custom-active'} text-decoration-none`}>
                                            Matches
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact to="/contact" className={`${pathname === '/contact' ? 'active' : 'custom-active'} text-decoration-none`}>
                                            CONTACT
                                        </NavLink>
                                    </li>
                                </ul>
                                <form class="d-flex">
                                    <h1 className='username'>Ajith</h1>
                                    <div class="dropdown">
                                        <button className="dropdown-toggle userbtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={userprofile} alt='userProfile' />
                                        </button>
                                        <ul class="dropdown-menu droplist" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Profile</a></li>
                                            <li><a class="dropdown-item" href="#" onClick={() => Logout()}>Logout</a></li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </nav>
                    <div>
                    </div>
                </div>
                <div className='d-lg-none d-block right-bar'>
                    <div className='row m-0'>
                        <div className='col-4'>
                            <div className='w-100 py-3'>
                                <div class="navbar-brand navbar-width">
                                    <img src={Logo} alt="Sahyatri-Matrimony-Logo" className='nav-logo' />
                                </div>
                            </div>
                        </div>
                        <div className='col-8 d-flex justify-content-end'>
                            <form class="d-flex">
                                <h1 className='username mx-4'>Ajith</h1>
                                <div className='d-flex align-items-center'>
                                    <button type='button' onClick={toggleRightNav} className='right-btn'><FontAwesomeIcon icon={faBars} style={{ color: '#FFF' }} /></button>
                                </div>
                            </form>
                            <Rightnav isOpen={isRightNavOpen} onClose={toggleRightNav} />
                        </div>
                    </div>


                </div>
            </header>
            {/* <div className='d-lg-none d-block mobile-nav'> */}
            <div className={`${isOpen ? 'mobile-nav d-lg-none d-block' : 'res-mobile d-lg-none d-block'} `}>
                <div className="">
                    <ul class="nav">
                        <li className='nav-item'>
                            <NavLink exact to={{ pathname: '/', state: { isClass1Show } }} className={`${pathname === '/' || pathname === '/Partner' || pathname === '/Photoupload' || pathname === '/Proofverify' ? 'active' : 'custom-active'} text-decoration-none`}>
                                <FontAwesomeIcon icon={faHome} />
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to="/search" className={`${pathname === '/search' ? 'active' : 'custom-active'} text-decoration-none`}>
                                <FontAwesomeIcon icon={faSearch} />
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to="/package" className={`${pathname === '/package' ? 'active' : 'custom-active'} text-decoration-none`}>
                                <FontAwesomeIcon icon={faBox} />
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink exact to="/about" className={`${pathname === '/about' ? 'active' : 'custom-active'} text-decoration-none`}>
                                <FontAwesomeIcon icon={faBars} />
                            </NavLink>
                        </li> */}
                        <li>
                            <NavLink exact to="/contact" className={`${pathname === '/contact' ? 'active' : 'custom-active'} text-decoration-none`}>
                                <FontAwesomeIcon icon={faContactCard} />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Profileheader