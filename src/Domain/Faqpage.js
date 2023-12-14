import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Header from '../Common/page/Header'
import Footer from '../Common/page/Footer'
import Faq from '../Common/page/Faq'
import '../Common/css/style.css'
import Topheader from '../Common/page/Topheader';
function Faqpage() {
    const { isClass1Show } = useSelector((state) => state.navButton)
    const dispatch = useDispatch();
    return (
        <div className='faq'>
            {/* <Header /> */}
            <Topheader />
            <div className='header-bg-img header-content'>
                <h2 className='text-center mb-sm-3'>Upgrade and enjoy added benefits</h2>
            </div>
            {/* <div className={`header-content ${isClass1Show ? 'header-position' : 'header-active'}`}>
                <h2 className='text-center mb-sm-3'>Upgrade and enjoy added benefits</h2>
            </div> */}
            <div className="container-80">
                <Faq />
            </div>
            <Footer />
        </div>
    )
}

export default Faqpage