import React from 'react'
import Logowhite from '../image/Logo-white.png';
import GooglePlay from '../image/GooglePlay.png'
import AppStore from '../image/AppStore.png'
import Facebook from '../image/Facebook.png'
import LinkedIn from '../image/LinkedIn.png'
import Instagram from '../image/Instagram.png'
import Youtube from '../image/Youtube.png'
import X from '../image/X.png'


function Footer() {
    return (
        <>
            <footer>
                <div className='container-90'>
                    <div className='row m-0 footer-top align-items-stretch justify-content-center'>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                            <img src={Logowhite} />
                            <p>We are the most trusted matrimonial service for Indians, offering a wide range of matchmaking services.</p>
                            <img src={GooglePlay} alt='GooglePlay' className='w-25' />
                            <img src={AppStore} alt='AppStore' className='w-25' />
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-12 py-3'>
                            <ul className='footer-list p-0 float-lg-end float-md-none'>
                                <li className='content-title'>Menu</li>
                                <li>Packages</li>
                                <li>About</li>
                                <li>Success Story</li>
                                <li>FAQ’S</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-12 py-3'>
                            <ul className='footer-list p-0 float-lg-end float-md-none'>
                                <li className='content-title'>Privacy & You</li>
                                <li>Terms of Use</li>
                                <li>Privacy Policy</li>
                                <li>Be Safe Online</li>
                                <li>FAQ’S</li>
                                <li>Report Misuse</li>
                            </ul>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-12 py-3'>
                            <ul className='footer-list p-0 float-lg-end float-md-none'>
                                <li className='content-title'>Need Help?</li>
                                <li>Member Login</li>
                                <li>Sign Up</li>
                                <li>Partner Search</li>
                                <li>How to Use </li>
                                <li>Customer Support</li>
                            </ul>
                        </div>
                    </div>
                    <div className='row m-0 py-3 footer-bottom align-items-stretch justify-content-center'>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-12 text-lg-start text-center'>
                            <p>© 2023. All rights reserved.</p>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12  col-12 text-center'>
                            <p>Designed by Webbitech.com.</p>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-12 text-lg-end text-center'>
                            <img src={Facebook}  alt='facebook'/>
                            <img src={Instagram}  alt='Instagram'/>
                            <img src={X}  alt='X'/>
                            <img src={LinkedIn}  alt='LinkedIn'/>
                            <img src={Youtube}  alt='Youtube'/>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer