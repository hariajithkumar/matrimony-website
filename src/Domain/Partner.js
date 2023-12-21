import React, { useState } from 'react'
import Profileheader from '../Common/page/Profileheader'
import Benifit from '../Common/page/Benefit'
import Useraside from '../Common/page/Useraside'
import Footer from '../Common/page/Footer'

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



function Partner() {

    const [editBasic, setEditBasic] = useState(0)
    const [editEducation, setEditEducation] = useState(0)
    const [editReligion, setEditReligion] = useState(0)
    const [editLifestyle, setEditLifestyle] = useState(0)
    const [editContact, setEditContact] = useState(0)

    const handleEdit = (item) => {
        if (item === "Basic") {
            const onvalue = setEditBasic((prevValue) => (prevValue === 0 ? 1 : 0));
            if (editBasic === 0) {
                setEditBasic(1)
            }
        } else if (item === 'Education') {
            const onvalue = setEditEducation((prevValue) => (prevValue === 0 ? 1 : 0));
            if (editEducation === 0) {
                setEditEducation(1)
            }
        } else if (item === 'Religion') {
            const onvalue = setEditReligion((prevValue) => (prevValue === 0 ? 1 : 0));
            if (editReligion === 0) {
                setEditReligion(1)
            }
        } else if (item === 'Lifestyle') {
            const onvalue = setEditLifestyle((prevValue) => (prevValue === 0 ? 1 : 0));
            if (editLifestyle === 0) {
                setEditLifestyle(1)
            }
        }
    }

    const handleUpdate = (item) => {
        if (item === 'updateBasic') {
            setEditBasic(0)
        } else if (item === 'updateEducation') {
            setEditEducation(0)
        } else if (item === 'updateReligion') {
            setEditReligion(0)
        } else if (item === 'updateLifestyle') {
            setEditLifestyle(0)
        }
    }

    return (
        <>
            <Profileheader />
            <section className='my-profile pb-3'>
                <div className='container-90'>
                    <div className='row m-0'>
                        <div className='col-lg-3'>
                            <div className='d-lg-block d-none position-section'>
                                <Useraside />
                            </div>
                        </div>
                        <div className='col-lg-6 col-12'>
                            <div className='section-profile bg-white pb-3 rounded-4'>
                                <div className='profile-photo'>
                                    <img src={addphoto} />
                                    <div className='profile-id'>
                                        <h1>Tamil Selvan</h1>
                                        <p>ID : SYM000001</p>
                                    </div>
                                </div>
                                <div className='profile-verify'>
                                    <div className='verify'>
                                        <h2><img src={verify} className='me-3' /><span>Verify your profile</span> using Govt ID proofs and get a badge to look genuine.</h2>
                                    </div>
                                </div>
                                <div className='profile-item p-3'>
                                    <div className='row m-0 pb-3'>
                                        <div className='col-8'>
                                            <h1>Basic Details</h1>
                                        </div>
                                        <div className='col-4 align-self-center text-end'>
                                            <img src={profiledit} onClick={() => handleEdit('Basic')} />
                                        </div>
                                    </div>
                                    {editBasic ?
                                        <>
                                            <div className='row m-0 edit-basic'>
                                                <div className='col-lg-6 mb-3'>
                                                    <label className='mb-2'>Age From *</label><br />
                                                    <input type='text' className='form-control' value='' />
                                                </div>
                                                <div className='col-lg-6 mb-3'>
                                                    <label className='mb-2'>Age to *</label><br />
                                                    <input type='text' className='form-control' value='' />
                                                </div>
                                                <div className='col-lg-6 mb-3'>
                                                    <label className='mb-2'>Height*</label><br />
                                                    <input type='text' className='form-control' value=' ' />
                                                </div>
                                                <div className='col-lg-6 mb-3'>
                                                    <label className='mb-2'>Location*</label><br />
                                                    <input type='text' className='form-control' value='' />
                                                </div>
                                                <div>
                                                    <button type='button' onClick={() => handleUpdate("updateBasic")}>Update</button>
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className='row m-0 profile-edit'>
                                                <h4 className='align-self-center pb-2'><img src={edit5} className='me-3' />21 years - 25 years</h4>
                                                <h4 className='align-self-center pb-2'><img src={edit7} className='me-3' />5' 0" (1.52 mts) - 5' 7" (1.70 mts)</h4>
                                                <h4 className='align-self-center pb-2'><img src={edit6} className='me-3' />Never Married</h4>
                                                <h4 className='align-self-center pb-2'><img src={edit1} className='me-3' />Salem, Tamil Nadu, India </h4>
                                            </div>
                                        </>
                                    }

                                </div>
                                <div className='profile-item profile-degree p-3'>
                                    <div className='row m-0 pb-3'>
                                        <div className='col-8'>
                                            <h1>Education & Occupation details</h1>
                                        </div>
                                        <div className='col-4 align-self-center text-end'>
                                            <img src={profiledit} onClick={() => handleEdit('Education')} />
                                        </div>
                                    </div>
                                    <div className='row m-0 degree-details'>
                                        {editEducation ?
                                            <>
                                                <div className='row m-0 edit-basic'>
                                                    <div className='col-lg-6 mb-3'>
                                                        <label className='mb-2'>Highest Education*</label><br />
                                                        <input type='text' className='form-control' value='' />
                                                    </div>
                                                    <div className='col-lg-6 mb-3'>
                                                        <label className='mb-2'>Occupation*</label><br />
                                                        <input type='text' className='form-control' value='' />
                                                    </div>
                                                    <div className='col-lg-6 mb-3'>
                                                        <label className='mb-2'>Annual income</label><br />
                                                        <input type='text' className='form-control' value=' ' />
                                                    </div>

                                                    <div>
                                                        <button type='button' onClick={() => handleUpdate("updateEducation")}>Update</button>
                                                    </div>
                                                </div>
                                            </>
                                            :
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
                                        }

                                    </div>
                                </div>
                                <div className='profile-item profile-degree p-3'>
                                    <div className='row m-0 pb-3'>
                                        <div className='col-8'>
                                            <h1>Religion</h1>
                                        </div>
                                        <div className='col-4 align-self-center text-end'>
                                            <img src={profiledit} onClick={() => handleEdit('Religion')} />
                                        </div>
                                    </div>
                                    {editReligion ?
                                        <>
                                            <div className='row m-0 edit-basic'>
                                                <div className='col-lg-6 mb-3'>
                                                    <label className='mb-2'>Religion *</label><br />
                                                    <select className="form-select select-id" >
                                                        <option selected>select</option>
                                                        <option value="IT">Hindu</option>
                                                        <option value="IIT">Christen</option>
                                                        <option value="Others">Muslim</option>
                                                    </select>
                                                </div>
                                                <div className='col-lg-6 mb-3'>
                                                    <label className='mb-2'>Caste *</label><br />
                                                    <select className="form-select select-id" >
                                                        <option selected>select</option>
                                                        <option value="Private">OC</option>
                                                        <option value="Public">BC</option>
                                                        <option value="Public">other</option>
                                                    </select>
                                                </div>
                                                <div className='col-lg-6 mb-3'>
                                                    <label className='mb-2'>Mother tongue *</label><br />
                                                    <select className="form-select select-id" >
                                                        <option selected>select</option>
                                                        <option value="Private">Tamil</option>
                                                        <option value="Public">English</option>
                                                        <option value="Public">other</option>
                                                    </select>
                                                </div>
                                                <div className='col-lg-6 mb-3'>
                                                    <label className='mb-2'>Manglik *</label><br />
                                                    <select className="form-select select-id" >
                                                        <option selected>select</option>
                                                        <option value="Private">Tamil</option>
                                                        <option value="Public">English</option>
                                                        <option value="Public">other</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <button type='button' onClick={() => handleUpdate("updateReligion")}>Update</button>
                                                </div>
                                            </div>
                                        </>
                                        :
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
                                    }

                                </div>
                                <div className='profile-item profile-degree p-3'>
                                    <div className='row m-0 pb-3'>
                                        <div className='col-8'>
                                            <h1>Lifestyle</h1>
                                        </div>
                                        <div className='col-4 align-self-center text-end'>
                                            <img src={profiledit} onClick={() => handleEdit('Lifestyle')} />
                                        </div>
                                    </div>
                                    {editLifestyle ?
                                        <>
                                            <div className='row m-0 edit-basic'>
                                                <div className='col-lg-6 mb-3'>
                                                    <label className='mb-2'>Drinking Habit *</label><br />
                                                    <select className="form-select select-id" >
                                                        <option selected>select</option>
                                                        <option value="Private">Yes</option>
                                                        <option value="Public">NO</option>
                                                        <option value="Public">Doesn’t matter</option>
                                                    </select>
                                                </div>
                                                <div className='col-lg-6 mb-3'>
                                                    <label className='mb-2'>Smoking Habit *</label><br />
                                                    <select className="form-select select-id" >
                                                        <option selected>select</option>
                                                        <option value="Private">Yes</option>
                                                        <option value="Public">NO</option>
                                                        <option value="Public">Doesn’t matter</option>
                                                    </select>
                                                </div>
                                                <div className='col-lg-6 mb-3'>
                                                    <label className='mb-2'>Dietary Habit</label><br />
                                                    <select className="form-select select-id" >
                                                        <option selected>select</option>
                                                        <option value="Private">Yes</option>
                                                        <option value="Public">NO</option>
                                                        <option value="Public">Doesn’t matter</option>
                                                    </select>
                                                </div>
                                                <div className='col-lg-6 mb-3'>
                                                    <label className='mb-2'>Physical Status</label><br />
                                                    <select className="form-select select-id" >
                                                        <option selected>select</option>
                                                        <option value="Private">Yes</option>
                                                        <option value="Public">NO</option>
                                                        <option value="Public">Doesn’t matter</option>
                                                    </select>
                                                </div>
                                                <div className='col-lg-6 mb-3'>
                                                    <label className='mb-2'>No of Brothers *</label><br />
                                                    <input type='text' className='form-control' value='2' />
                                                </div>
                                                <div className='col-lg-6 mb-3'>
                                                    <label className='mb-2'>Brothers Married *</label><br />
                                                    <input type='text' className='form-control' value='0' />
                                                </div>
                                                <div className='col-lg-6 mb-3'>
                                                    <label className='mb-2'>No of Sisters *</label><br />
                                                    <input type='text' className='form-control' value='1' />
                                                </div>
                                                <div className='col-lg-6 mb-3'>
                                                    <label className='mb-2'>Sisters Married *</label><br />
                                                    <input type='text' className='form-control' value='1' />
                                                </div>
                                                <div>
                                                    <button type='button' onClick={() => handleUpdate("updateLifestyle")}>Update</button>
                                                </div>
                                            </div>
                                        </>
                                        :
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
                                    }


                                </div>

                            </div>
                        </div>
                        <div className='col-lg-3 col-12 mt-lg-0 mt-5'>
                            <div className='position-section'>
                                <Benifit />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Partner