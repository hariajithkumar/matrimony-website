import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../image/Sahyatri-Matrimony-Logo.png';
import Rightnav from '../../Common/page/Rightnav'
import { setClass1Hide } from '../../Redux/CreateSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/topheader.css'
function Topheader() {
    const { isClass1Show } = useSelector((state) => state.matrimony)
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
        navigate('/')
    }
    const signin = () => {
        navigate('/login')
    }
    return (
        <>
            <header className='faq-bg-img position-sticky top-0 sticky-header'>
                <div className='nav-section d-lg-block'>
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
                            <div class="collapse navbar-collapse navbarNav" id="navbarSupportedContent">
                                <ul class="navbar-nav d-flex justify-content-center width-navbar">
                                    <li className='nav-item'>
                                        <NavLink exact to={{ pathname: '/', state: { isClass1Show } }} className={`${pathname === '/' ? 'active' : 'custom-active'} text-decoration-none`}>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact to="/search" className={`${pathname === '/search' ? 'active' : 'custom-active'} text-decoration-none`}>
                                            Search
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact to="/package" className={`${pathname === '/package' ? 'active' : 'custom-active'} text-decoration-none`}>
                                            Package
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact to="/about" className={`${pathname === '/about' ? 'active' : 'custom-active'} text-decoration-none`}>
                                            ABOUT
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact to="/faq" className={`${pathname === '/faq' ? 'active' : 'custom-active'} text-decoration-none`}>
                                            FAQ'S
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact to="/contact" className={`${pathname === '/contact' ? 'active' : 'custom-active'} text-decoration-none`}>
                                            CONTACT
                                        </NavLink>
                                    </li>
                                </ul>
                                <form class="d-flex">
                                    <button class="btn login-btn mx-2 login-hover" type="button" onClick={() => signin()}>Login </button>
                                    <button class="btn btn-outline-success" type="button" onClick={() => signup()}>Register</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                    
                </div>
            </header>

        </>
    )
}

export default Topheader