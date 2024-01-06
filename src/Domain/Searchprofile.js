import React, { useEffect } from 'react'
import Topheader from '../Common/page/Topheader'
import Footer from '../Common/page/Footer'
import Findprofile from './Findprofile'

function Searchprofile() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return (
        <div>
            <Topheader />
            <section className='section-start py-5'>
                <div className='section-profile'>
                    <h5 className='text-center mb-3'>Search Profile</h5>
                    <h2 className='text-center'>Highlighted Profiles</h2>
                    <Findprofile />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Searchprofile