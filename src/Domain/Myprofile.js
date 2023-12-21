import React, { useState } from 'react'
import Profileheader from '../Common/page/Profileheader'
import Footer from '../Common/page/Footer'
import Useraside from '../Common/page/Useraside'
import Benifit from '../Common/page/Benefit'
import '../Common/css/profile.css'


import addphoto from '../Common/image/add-photo.png'
import verify from '../Common/image/verifydetails.png'
import profiledit from '../Common/image/profile-edit.png'
import edit1 from '../Common/image/edit1.png'
import edit2 from '../Common/image/edit2.png'
import edit3 from '../Common/image/edit3.png'
import edit4 from '../Common/image/edit4.png'
import edit5 from '../Common/image/edit5.png'
import edit6 from '../Common/image/edit6.png'
import edit7 from '../Common/image/edit7.png'
import edit8 from '../Common/image/edit8.png'
import degree from '../Common/image/degree.png'
import plus from '../Common/image/plus.png'
import degreemsg from '../Common/image/degree-msg.png'
import family1 from '../Common/image/family1.png'
import family2 from '../Common/image/family2.png'
import contact1 from '../Common/image/contact1.png'
import contact2 from '../Common/image/contact2.png'






function Myprofile() {
  const [editBasic, setEditBasic] = useState(0)
  const [editEducation, setEditEducation] = useState(0)
  const [editCareer, setEditCareer] = useState(0)
  const [editFamily, setEditFamily] = useState(0)
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
    } else if (item === 'Career') {
      const onvalue = setEditCareer((prevValue) => (prevValue === 0 ? 1 : 0));
      if (editCareer === 0) {
        setEditCareer(1)
      }
    } else if (item === 'Family') {
      const onvalue = setEditFamily((prevValue) => (prevValue === 0 ? 1 : 0));
      if (editFamily === 0) {
        setEditFamily(1)
      }
    } else if (item === 'Contact') {
      const onvalue = setEditContact((prevValue) => (prevValue === 0 ? 1 : 0));
      if (editContact === 0) {
        setEditContact(1)
      }
    }
  }

  const handleUpdate = (item) => {
    if (item === 'updateBasic') {
      setEditBasic(0)
    } else if (item === 'updateEducation') {
      setEditEducation(0)
    } else if (item === 'updateCareer') {
      setEditCareer(0)
    } else if (item === 'updateFamily') {
      setEditFamily(0)
    } else if (item === 'updateContact') {
      setEditContact(0)
    }
  }


  return (
    <>
      <Profileheader />
      <section className='my-profile pb-3'>
        <div className='container-90'>
          <div className='row m-0'>
            <div className='col-lg-3'>
              <div className='d-lg-block d-none'>
                <Useraside />
              </div>
            </div>
            <div className='col-lg-6 col-12'>
              <div className='section-profiles '>
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
                {/* Basic Details start */}
                <div className='profile-item p-3'>
                  <div className='row m-0 pb-3'>
                    <div className='col-lg-8'>
                      <h1>Basic Details</h1>
                      <p>Brief outline of personal information</p>
                    </div>
                    <div className='col-lg-4 align-self-center text-end'>
                      <img src={profiledit} onClick={() => handleEdit('Basic')} />
                    </div>
                  </div>
                  {editBasic ?
                    <>
                      <div className='row m-0 edit-basic'>
                        <div className='col-lg-6 mb-3'>
                          <label className='mb-2'>Name*</label><br />
                          <input type='text' className='form-control' value='Tamil' />
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <label className='mb-2'>Height*</label><br />
                          <input type='text' className='form-control' value='6ft-182cm' />
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <label className='mb-2'>DOB*</label><br />
                          <input type='date' className='form-control' />
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <label className='mb-2'>Weight*</label><br />
                          <input type='text' className='form-control' value='65kg ' />
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <label className='mb-2'>Mother Tongue*</label><br />
                          <select className="form-select select-id" >
                            <option selected>select</option>
                            <option value="1">Tamil</option>
                            <option value="2">Englisg</option>
                            <option value="3">Others</option>
                          </select>
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <label className='mb-2'>Marital status*</label><br />
                          <select className="form-select select-id" >
                            <option selected>select</option>
                            <option value="1">Never Married</option>
                          </select>
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <label className='mb-2'>Religion*</label><br />
                          <select className="form-select select-id" >
                            <option selected>select</option>
                            <option value="1">Hindu</option>
                            <option value="2">Christen</option>
                            <option value="3">Muslim</option>
                          </select>
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <label className='mb-2'>Caste*</label><br />
                          <select className="form-select select-id" >
                            <option selected>select</option>
                            <option value="1">BC</option>
                            <option value="2">OC</option>
                            <option value="3">MCA</option>
                          </select>
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <label className='mb-2'>Annual income</label><br />
                          <input type='text' className='form-control' value='Rs. 3 - 4 Lakh p.a' />
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <label className='mb-2'>Current Location*</label><br />
                          <input type='text' className='form-control' value='Salem, Tamil Nadu, India' />
                        </div>
                        <div>
                          <button type='button' onClick={() => handleUpdate("updateBasic")}>Update</button>
                        </div>
                      </div>
                    </>
                    :
                    <>
                      <div className='row m-0 profile-edit'>
                        <div className='col-lg-6 mb-3'>
                          <h4 className='align-self-center'><img src={edit5} className='me-3' />26 October 1998</h4>
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <h4 className='align-self-center'><img src={edit7} className='me-3' />6' 1" (1.85 mts)</h4>
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <h4 className='align-self-center'><img src={edit3} className='me-3' />Mother Tongue is Tamil</h4>
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <h4 className='align-self-center'><img src={edit8} className='me-3' />55kg</h4>
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <h4 className='align-self-center'><img src={edit2} className='me-3' />Hindu, Ambalavasi</h4>
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <h4 className='align-self-center'><img src={edit6} className='me-3' />Never Married</h4>
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <h4 className='align-self-center'><img src={edit4} className='me-3' />Rs. 3 - 4 Lakh p.a</h4>
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <h4 className='align-self-center'><img src={edit1} className='me-3' />Salem, Tamil Nadu, India </h4>
                        </div>

                      </div>
                    </>
                  }
                </div>
                {/* Education details start  */}
                <div className='profile-item profile-degree p-3'>
                  <div className='row m-0 pb-3'>
                    <div className='col-8'>
                      <h1>Education details</h1>
                      <p>Showcase your education qualificationn</p>
                    </div>
                    <div className='col-4 align-self-center text-end'>
                      <img src={profiledit} onClick={() => handleEdit('Education')} />
                    </div>
                  </div>
                  {editEducation ?
                    <>
                      <div className='row m-0 edit-basic'>
                        <div className='col-lg-6 mb-3'>
                          <label className='mb-2'>Highest Education*</label><br />
                          <input type='text' className='form-control' value='B.E' />
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <label className='mb-2'>Education in Detail*</label><br />
                          <input type='text' className='form-control' value='Electronics' />
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <label className='mb-2'>UG College</label><br />
                          <input type='text' className='form-control' value=' ' />
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <label className='mb-2'>School Name</label><br />
                          <input type='text' className='form-control' value='' />
                        </div>
                        <div>
                          <button type='button' onClick={() => handleUpdate("updateEducation")}>Update</button>
                        </div>
                      </div>
                    </>
                    :
                    <>
                      <div className='row m-0 degree-details'>
                        <div className='col-1 p-0'>
                          <img src={degree} />
                        </div>
                        <div className='col-10 ms-2'>
                          <h4>Career detailse</h4>
                          <h5>Give a glimpse of your professional life</h5>
                        </div>
                      </div>
                      <div className='row m-0 degree-details pt-4'>
                        <div className='col-lg-9  '>
                          <h3>School Name, UG College</h3>
                        </div>
                        <div className='col-lg-3 text-end'>
                          <img src={plus} /><span> ADD</span>
                        </div>
                        <div className='col-12 mt-3'>
                          <input type='text' placeholder='Write about your education...' className='form-control' />
                        </div>
                      </div>
                    </>
                  }
                </div>
                <div className='profile-item profile-degree p-3'>
                  <div className='row m-0 pb-3'>
                    <div className='col-8'>
                      <h1>Career detailss</h1>
                      <p>Give a glimpse of your professional life</p>
                    </div>
                    <div className='col-4 align-self-center text-end'>
                      <img src={profiledit} onClick={() => handleEdit('Career')} />
                    </div>
                  </div>
                  {editCareer ?
                    <>
                      <div className='row m-0 edit-basic'>
                        <div className='col-lg-6 mb-3'>
                          <label className='mb-2'>Occupation *</label><br />
                          <select className="form-select select-id" >
                            <option selected>select</option>
                            <option value="IT">IT</option>
                            <option value="IIT">IIT</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <label className='mb-2'>Employed in *</label><br />
                          <select className="form-select select-id" >
                            <option selected>select</option>
                            <option value="Private">Private</option>
                            <option value="Public">Public</option>
                          </select>
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <label className='mb-2'>Occupation in Detail</label><br />
                          <input type='text' className='form-control' value=' ' />
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <label className='mb-2'>Organization</label><br />
                          <input type='text' className='form-control' value='' />
                        </div>
                        <div>
                          <button type='button' onClick={() => handleUpdate("updateCareer")}>Update</button>
                        </div>
                      </div>
                    </>
                    :
                    <>
                      <div className='row m-0 degree-details'>
                        <div className='col-1 p-0'>
                          <img src={degreemsg} />
                        </div>
                        <div className='col-10 ms-2'>
                          <h4>Software Developer / Programmer</h4>
                          <h5>Private</h5>
                        </div>
                      </div>
                      <div className='row m-0 degree-details pt-4'>
                        <div className='col-lg-9  '>
                          <h3>Organisation Name, Thoughts on settling abroad</h3>
                        </div>
                        <div className='col-lg-3 text-end'>
                          <img src={plus} /><span> ADD</span>
                        </div>
                        <div className='col-12 mt-3'>
                          <input type='text' placeholder='Write about your career...' className='form-control' />
                        </div>
                      </div>
                    </>
                  }
                </div>
                <div className='profile-item profile-degree p-3'>
                  <div className='row m-0 pb-3'>
                    <div className='col-8'>
                      <h1>Family details</h1>
                      <p>Introduce your family member, values and background</p>
                    </div>
                    <div className='col-4 align-self-center text-end'>
                      <img src={profiledit} onClick={() => handleEdit('Family')} />
                    </div>
                  </div>
                  {editFamily ?
                    <>
                      <div className='row m-0 edit-basic'>
                        <div className='col-lg-6 mb-3'>
                          <label className='mb-2'>Family Type *</label><br />
                          <input type='text' className='form-control' value='Extended families' />
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <label className='mb-2'>Family Values</label><br />
                          <input type='text' className='form-control' value='5' />
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <label className='mb-2'>Father's Occupation</label><br />
                          <input type='text' className='form-control' value='Manager' />
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <label className='mb-2'>Mother's Occupation</label><br />
                          <input type='text' className='form-control' value='Not Employed' />
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
                          <button type='button' onClick={() => handleUpdate("updateFamily")}>Update</button>
                        </div>
                      </div>
                    </>
                    :
                    <>
                      <div className='row m-0 degree-details'>
                        <div className='col-1 p-0 mt-2'>
                          <img src={family1} />
                        </div>
                        <div className='col-10 ms-2 mt-2'>
                          <h4>Joint Family from indiar</h4>
                        </div>
                        <div className='col-1 p-0 mt-2'>
                          <img src={family2} />
                        </div>
                        <div className='col-10 ms-2 mt-2'>
                          <h4>Father is Not Employed, Mother is a Teacher</h4>
                          <h5 className='sibing'>1 Brother(s)   & 1 Sister(s)  (1 married)</h5>
                        </div>
                      </div>
                      <div className='row m-0 degree-details pt-4'>
                        <div className='col-lg-9  '>
                          <h3>Family Status, Family Value, Gothra, Living with parents?</h3>
                        </div>
                        <div className='col-lg-3 text-end'>
                          <img src={plus} /><span> ADD</span>
                        </div>
                        <div className='col-12 mt-3'>
                          <input type='text' placeholder='Write about your family...' className='form-control' />
                        </div>
                      </div>
                    </>
                  }

                </div>
                <div className='profile-item profile-degree p-3'>
                  <div className='row m-0 pb-3'>
                    <div className='col-8'>
                      <h1>Contact details</h1>
                      <p>Details that help profiles get in touch with you</p>
                    </div>
                    <div className='col-4 align-self-center text-end'>
                      <img src={profiledit} onClick={() => handleEdit('Contact')} />
                    </div>
                  </div>
                  {editContact ?
                    <>
                      <div className='row m-0 edit-basic'>
                        <div className='col-lg-6 mb-3'>
                          <label className='mb-2'>Mail *</label><br />
                          <input type='text' className='form-control' value=' ' />
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <label className='mb-2'>Phone No *</label><br />
                          <input type='text' className='form-control' value=' ' />
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <label className='mb-2'>Alternate Email</label><br />
                          <input type='text' className='form-control' value=' ' />
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <label className='mb-2'>Alternate Mobile No</label><br />
                          <input type='text' className='form-control' value='' />
                        </div>
                        <div>
                          <button type='button' onClick={() => handleUpdate("updateContact")}>Update</button>
                        </div>
                      </div>
                    </>
                    :
                    <>
                      <div className='row m-0 degree-details'>
                        <div className='col-1 p-0'>
                          <img src={contact1} />
                        </div>
                        <div className='col-10 ms-2'>
                          <h4>thamizha333@gmail.com</h4>
                        </div>
                        <div className='col-1 p-0 mt-2'>
                          <img src={contact2} />
                        </div>
                        <div className='col-10 ms-2 mt-2'>
                          <h4>+91 97911 06060</h4>
                        </div>
                      </div>
                      <div className='row m-0 degree-details pt-4'>
                        <div className='col-9  '>
                          <h3>Alternate Email, Alternate Mobile No.</h3>
                        </div>
                        <div className='col-3 text-end'>
                          <img src={plus} /><span> ADD</span>
                        </div>
                      </div>
                    </>
                  }

                </div>
              </div>
            </div>
            <div className='col-lg-3 col-12 mt-lg-0 mt-5'>
              <div className=''>
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

export default Myprofile