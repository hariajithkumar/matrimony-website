import React, { useEffect, useState } from 'react';
import Profileheader from '../Common/page/Profileheader'
import Footer from '../Common/page/Footer'
import Useraside from '../Common/page/Useraside'
import Benifit from '../Common/page/Benefit'
import '../Common/css/profile.css'

import ajith from '../Common/image/ajith.jpeg'
import addphoto from '../Common/image/add-photo.png'
import editprofile from '../Common/image/white-edit.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import PhotoCrop from './PhotoCrop';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileImage } from '../Redux/CreateSlice';

function Photoupload() {
    const { profileImage,backgroungImage } = useSelector((state) => state.matrimony)
    // State for storing file data and preview URLs
    const [files, setFiles] = useState([]);
    const [previewUrls, setPreviewUrls] = useState([]);

    const dispatch = useDispatch()

    // css image set 
    const myStyles = {
        borderRadius: '12px',
        backgroundImage: `url(${backgroungImage})`,
        height: '50vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

      // Function to handle file uploads
    const handleFileUpload = (e) => {
        const uploadedFiles = Array.from(e.target.files);

        // Map each file to a Promise that resolves to an array of the file itself and its preview URL
        const filePromises = uploadedFiles.map((file) => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    resolve([file, e.target.result]);
                };
                reader.readAsDataURL(file);
            });
        });

        // Once all promises are resolved, update the state with the new files and preview URLs
        Promise.all(filePromises).then((results) => {
            const newFiles = results.map((result) => result[0]);
            const newPreviewUrls = results.map((result) => result[1]);

            setFiles([...files, ...newFiles]);
            setPreviewUrls([...previewUrls, ...newPreviewUrls]);

        });
    };

    const deleteitem = (id) => {
        const idToRemove = id; // Replace with the actual 'id' you want to remove
        const updatedFiles = previewUrls.filter((file, index) => index !== idToRemove);
        setPreviewUrls(updatedFiles);
        
    };
    const proofupdate = () => {
        alert('Photo update succssfully.')
        setPreviewUrls([])
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    // console.log(1,profileImage)
    console.log(2,backgroungImage)
    return (
        <>
            <Profileheader />
            <section className='my-profile pb-3'>
                <div className='container-90'>
                    <div className='row m-0'>
                        <div className='col-lg-3 col-12'>
                            <div className='d-lg-block d-none position-section'>
                                <Useraside />

                            </div>
                        </div>
                        <div className='col-lg-6 col-12'>
                            <div className='section-profiles'>
                                {backgroungImage ?
                                    <>
                                        <div style={myStyles}>
                                            {/* <img src={editprofile} className='editprofile' /> */}
                                            {/* <div className='profile-id'>
                                                <h1>Tamil Selvan</h1>
                                                <p>ID : SYM000001</p>
                                            </div> */}
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className='profile-photo'>
                                        </div>
                                    </>
                                }
                                <PhotoCrop />
                            </div>
                        </div>
                        <div className='col-lg-3 col-12 mt-lg-0 mt-5'>
                            <div className='position-section'>
                                <Benifit />
                            </div>
                        </div>
                    </div>
                </div>

            </section >
            <Footer />
        </>
    )
}

export default Photoupload