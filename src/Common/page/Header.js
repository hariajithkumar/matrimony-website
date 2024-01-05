import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../image/Sahyatri-Matrimony-Logo.png';
import { setClass1Hide } from '../../Redux/CreateSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
  const { isClass1Show } = useSelector((state) => state.matrimony)
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
  return (
    <>
      <header className='header-bg-img faq-bg-img'>
        <div className='nav-section container-90'>
          <nav class="navbar navbar-expand-lg navbarlist sticky-top">
            <div class="container-fluid ">
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
                  <button class="btn btn-outline-success mx-2" type="button" onClick={() => signup()}>Sign Up </button>
                  <button class="btn btn-outline-success" type="button" onClick={() => signin()}>sign in</button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </header>

    </>
  )
}

export default Header