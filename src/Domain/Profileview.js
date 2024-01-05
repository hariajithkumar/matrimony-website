import React, { useState, useEffect } from 'react'
import Topheader from '../Common/page/Topheader'
import Footer from '../Common/page/Footer'

import { useDispatch, useSelector } from 'react-redux';

import addphoto from '../Common/image/add-photo.png'
import verify from '../Common/image/verifydetails.png'
import profiledit from '../Common/image/profile-edit.png'
import edit1 from '../Common/image/edit1.png'
import edit5 from '../Common/image/edit5.png'
import edit6 from '../Common/image/edit6.png'
import edit7 from '../Common/image/edit7.png'
import edit9 from '../Common/image/edit9.png'
import edit10 from '../Common/image/edit10.png'
import edit11 from '../Common/image/edit11.png'
import edit12 from '../Common/image/edit12.png'
import edit13 from '../Common/image/edit13.png'
import edit14 from '../Common/image/edit14.png'
import edit15 from '../Common/image/edit15.png'
import edit16 from '../Common/image/edit16.png'
import edit17 from '../Common/image/edit17.png'
import degree from '../Common/image/degree.png'
import degreemsg from '../Common/image/degree-msg.png'
import Useraside from '../Common/page/Useraside';
import { setsingleProfile } from '../Redux/CreateSlice';


function Profileview() {
    const { singleProfile } = useSelector((state) => state.matrimony)

    const dispatch = useDispatch();
    return (
        <div>
            <Topheader />
            <section className='my-profile pb-3'>
                <div className='container-90'>
                    <div className='row m-0'>
                        <div className='col-lg-3 col-12 px-lg-3 px-md-2 px-1 '>
                            <div className='position-section'>
                                <div className='section-profile bg-white p-3 rounded-4'>
                                    <img src={singleProfile[0].photo} className='rounded-3 w-100' />
                                </div>
                                <div className='profile-verify'>
                                    <div className='verify '>
                                        <h2><img src={verify} className='me-3' /><span>Verify this profile</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-9 col-12 px-lg-3 px-md-2 px-1 mt-lg-0 mt-md-0 mt-2'>
                            <div className='section-profile bg-white pb-3 rounded-4'>
                                <div className='row m-0'>
                                    {/* <div className='col-12 text-center py-2'>
                                        <img src={singleProfile[0].photo} className='rounded-3'/>
                                    </div> */}
                                </div>
                                <div className='profile-verify profile-item'>
                                    <div className='row m-0 pt-3'>
                                        <div className='col-8'>
                                            <h1>Profile Name</h1>
                                        </div>
                                    </div>
                                    <div className='verify'>
                                        <h2>Name - {singleProfile[0].name}</h2>
                                        <h2>Age - {singleProfile[0].age}</h2>
                                        <h2>Education - {singleProfile[0].education}</h2>
                                        <h2>Place - {singleProfile[0].place}</h2>
                                        <h2>ID - {singleProfile[0].id}</h2>
                                    </div>
                                </div>
                                <div className='profile-item p-3'>
                                    <div className='row m-0 pb-3'>
                                        <div className='col-8'>
                                            <h1>Basic Details</h1>
                                        </div>
                                    </div>
                                    <>
                                        <div className='row m-0 profile-edit'>
                                            <h4 className='align-self-center pb-2'><img src={edit5} className='me-3' />21 years - 25 years</h4>
                                            <h4 className='align-self-center pb-2'><img src={edit7} className='me-3' />5' 0" (1.52 mts) - 5' 7" (1.70 mts)</h4>
                                            <h4 className='align-self-center pb-2'><img src={edit6} className='me-3' />Never Married</h4>
                                            <h4 className='align-self-center pb-2'><img src={edit1} className='me-3' />Salem, Tamil Nadu, India </h4>
                                        </div>
                                    </>


                                </div>
                                <div className='profile-item profile-degree p-3'>
                                    <div className='row m-0 pb-3'>
                                        <div className='col-8'>
                                            <h1>Education & Occupation details</h1>
                                        </div>

                                    </div>
                                    <div className='row m-0 degree-details'>

                                        <>
                                            <div className='col-1 p-0'>
                                                <img src={degree} />
                                            </div>
                                            <div className='col-10 ms-3'>
                                                <h4>Highest degree achieved</h4>
                                                <h5>UG Collegee</h5>
                                            </div>
                                            <div className='col-1 p-0'>
                                                <img src={degreemsg} />
                                            </div>
                                            <div className='col-10 ms-3'>
                                                <h4>Occupation could be</h4>
                                                <h5>Doesn’t Matter</h5>
                                            </div>
                                            <div className='col-1 p-0'>
                                                <img src={edit9} />
                                            </div>
                                            <div className='col-10 ms-3'>
                                                <h4>Should be earning</h4>
                                                <h5>Doesn’t Matter</h5>
                                            </div>
                                        </>

                                    </div>
                                </div>
                                <div className='profile-item profile-degree p-3'>
                                    <div className='row m-0 pb-3'>
                                        <div className='col-8'>
                                            <h1>Religion</h1>
                                        </div>

                                    </div>

                                    <>
                                        <div className='row m-0 degree-details'>
                                            <div className='col-1 p-0'>
                                                <img src={edit10} />
                                            </div>
                                            <div className='col-10 ms-3'>
                                                <h4>Religion</h4>
                                                <h5>Hindu</h5>
                                            </div>
                                            <div className='col-1 p-0'>
                                                <img src={edit13} />
                                            </div>
                                            <div className='col-10 ms-3'>
                                                <h4>Caste</h4>
                                                <h5>Gounder, Kongu Vellala Gounder, Pillai, Vanniyar, Vannia Kula Kshatriyar, Others...</h5>
                                            </div>
                                            <div className='col-1 p-0'>
                                                <img src={edit11} />
                                            </div>
                                            <div className='col-10 ms-3'>
                                                <h4>Mother tongue</h4>
                                                <h5>Tamil</h5>
                                            </div>
                                            <div className='col-1 p-0'>
                                                <img src={edit12} />
                                            </div>
                                            <div className='col-10 ms-3'>
                                                <h4>Manglik</h4>
                                                <h5>Doesn’t matter</h5>
                                            </div>
                                        </div>
                                    </>

                                </div>
                                <div className='profile-item profile-degree p-3'>
                                    <div className='row m-0 pb-3'>
                                        <div className='col-8'>
                                            <h1>Lifestyle</h1>
                                        </div>

                                    </div>
                                    <>
                                        <div className='row m-0 degree-details'>
                                            <div className='col-1 p-0 mt-2'>
                                                <img src={edit14} />
                                            </div>
                                            <div className='col-10 ms-2 mt-2'>
                                                <h4>Drinking Habitr</h4>
                                                <h5>Doesn’t matter</h5>
                                            </div>
                                            <div className='col-1 p-0 mt-2'>
                                                <img src={edit15} />
                                            </div>
                                            <div className='col-10 ms-2 mt-2'>
                                                <h4>Dietary Habit</h4>
                                                <h5 className='sibing'>Doesn’t matter</h5>
                                            </div>
                                            <div className='col-1 p-0 mt-2'>
                                                <img src={edit16} />
                                            </div>
                                            <div className='col-10 ms-2 mt-2'>
                                                <h4>Smoking Habit</h4>
                                                <h5>Doesn’t matter</h5>
                                            </div>
                                            <div className='col-1 p-0 mt-2'>
                                                <img src={edit17} />
                                            </div>
                                            <div className='col-10 ms-2 mt-2'>
                                                <h4>Physical Status</h4>
                                                <h5>Doesn’t matter</h5>
                                            </div>
                                        </div>
                                    </>
                                </div>

                            </div>
                        </div>
                        {/* <div className='col-lg-3 col-12 mt-lg-0 mt-5'>
                            <div className='profile-verify'>
                                <div className='verify'>
                                    <h2><img src={verify} className='me-3' /><span>Verify your profile</span> using Govt ID proofs and get a badge to look genuine.</h2>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Profileview