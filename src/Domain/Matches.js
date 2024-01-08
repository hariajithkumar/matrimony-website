import React, { useEffect } from 'react'
import Profileheader from '../Common/page/Profileheader'
import Footer from '../Common/page/Footer'
import Useraside from '../Common/page/Useraside'

import Select from 'react-select';


// image path 
import verify from '../Common/image/verifydetails.png'
import { useDispatch, useSelector } from 'react-redux';
import { setIsMatches } from '../Redux/CreateSlice';
import Matchesprofile from './Matchesprofile';



function Matches() {
    const { isMatches } = useSelector((state) => state.matrimony)

    const caste = [
        { label: 'New Matches', value: 'New Matches' },
        { label: 'Total Matches', value: 'Total Matches' },
        { label: 'Premium Matches', value: 'Premium Matches' },
        { label: 'Mutual Matches', value: 'Mutual Matches' },
    ];

    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    console.log(isMatches)
    return (
        <div>
            <Profileheader />
            <section className='my-profile pb-3'>
                <div className='container-90'>
                    <div className='row m-0'>
                        <div className='col-lg-3'>
                            <div className='d-lg-block d-none position-section'>
                                <Useraside />
                            </div>
                        </div>
                        <div className='col-lg-9 col-12 px-lg-3 px-md-2 px-1'>
                            <div className='section-profiles '>
                                <div className='profile-verify'>
                                    <div className='verify'>
                                        <h2><img src={verify} className='me-3' /><span>Verify your profile</span> using Govt ID proofs and get a badge to look genuine.</h2>
                                    </div>
                                </div>                               
                                <div className='profile-verify'>
                                    <div className='verify'>
                                        <Matchesprofile />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Matches