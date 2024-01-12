import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import '../css/myprofile.css'

// image path set 
import ajith from '../image/profile-2.png'
import rightarrow from '../image/rigth-arrow.png'
import rightinactive from '../image/right-inactive.png'
import userImage from '../image/profile-img.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonRifle, faUser } from '@fortawesome/free-solid-svg-icons';



function Useraside() {
    const { profileImage } = useSelector((state) => state.matrimony)
    const [isFullScreen, setIsFullScreen] = useState(false);
    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };
   
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname, search, hash } = location;
    const handleItemClick = (item) => {
        // dispatch(setActiveItem(item))
        if (item === 'Myprofile') {
            navigate('/Myprofile')
        } else if (item === 'Partner') {
            navigate('/Partner')
        } else if (item === 'Matches') {
            navigate('/matches')
        } else if (item === 'Photoupload') {
            navigate('/Photoupload')
        } else if (item === 'Proofverify') {
            navigate('/Proofverify')
        }
    };

    const profilePage = () =>{
        navigate('/Photoupload')
    }

    return (
        <div className='user-position'>
            <div className='account-details px-3 pb-2'>
                <div className='row m-0'>
                    <div className='col-xl-6 col-lg-12  align-self-center'>
                        <div class="profile-container">
                            {/* <img src={ajith} alt="Profile Image" class="profile-image" /> */}
                            {profileImage ? <><div className={`image-viewer ${isFullScreen ? 'full-screen' : ''}`} onClick={toggleFullScreen}><img src={profileImage} alt="Profile Image" class="profile-image" /></div></> : <><img src={userImage} className='w-100'/></>}
                        </div>
                    </div>
                    <div className='col-xl-6 col-lg-12 col-12 profile-name align-self-center'>
                        <h4>Hi Ajith !</h4>
                        <h5>ID : SYM000001</h5>
                        <h6 className='user-select-none' onClick={profilePage}>Profile Update</h6>
                    </div>
                </div>
                <hr className='mt-0' />
                <ul className='p-0 profile-details'>
                    <li className={`list-group-item border-0 hover-action ${pathname === '/Myprofile' ? 'active' : 'inactive'}`} onClick={() => handleItemClick('Myprofile')}>
                        My Profile <img src={pathname === '/Myprofile' ? rightarrow : rightinactive} className='pe-2 float-end' />
                    </li>
                    <li className={`list-group-item border-0 hover-action ${pathname === '/Partner' ? 'active' : 'inactive'}`} onClick={() => handleItemClick('Partner')}>
                        Partner Preference <img src={pathname === '/Partner' ? rightarrow : rightinactive} className='pe-2 float-end' />
                    </li>
                    <li className={`list-group-item border-0 hover-action ${pathname === '/matches' ? 'active' : 'inactive'}`} onClick={() => handleItemClick('Matches')}>
                        Matches <img src={pathname === '/matches' ? rightarrow : rightinactive} className='pe-2 float-end' />
                    </li>
                    <li className={`list-group-item border-0 hover-action ${pathname === '/Photoupload' ? 'active' : 'inactive'}`} onClick={() => handleItemClick('Photoupload')}>
                        Photos & Horoscope <img src={pathname === '/Photoupload' ? rightarrow : rightinactive} className='pe-2 float-end' />
                    </li>
                    <li className={`list-group-item border-0 hover-action ${pathname === '/Proofverify' ? 'active' : 'inactive'}`} onClick={() => handleItemClick('Proofverify')}>
                        Verify my profile <img src={pathname === '/Proofverify' ? rightarrow : rightinactive} className='pe-2 float-end' />
                    </li>
                    <li className={`list-group-item border-0 hover-action ${pathname === '/ajith' ? 'active' : 'inactive'}`} onClick={() => handleItemClick('Account')}>
                        Settings <img src={pathname === '/ajith' ? rightarrow : rightinactive} className='pe-2 float-end' />
                    </li>
                </ul>
            </div>
            <div className='complete-card text-center py-4'>
                <h1>60<span>%</span></h1>
                <h4>Need to Complete</h4>
                <p>Enhance Your Chances Of Getting Feedback To Your Profile.</p>
                <button>Complete Now</button>
            </div>
        </div>
    )
}

export default Useraside