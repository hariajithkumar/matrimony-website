import React, { useState } from 'react';
import Profileheader from '../Common/page/Profileheader'
import Footer from '../Common/page/Footer'
import Useraside from '../Common/page/Useraside'
import Benifit from '../Common/page/Benefit'
import '../Common/css/profile.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faL } from '@fortawesome/free-solid-svg-icons';

import upload from '../Common/image/upload.png'
import editprofile from '../Common/image/white-edit.png'
import verify from '../Common/image/verifydetails.png'

function Proofverify() {
    const [selected, setSelected] = useState('');
    // State for storing file data and preview URLs
    const [files, setFiles] = useState([]);
    const [previewUrls, setPreviewUrls] = useState([]);

    // Function to handle file uploads
    const handleFileUpload = (e) => {
        const uploadedFiles = Array.from(e.target.files);
        console.log(uploadedFiles)
        // Map each file to a Promise that resolves to an array of the file itself and its preview URL
        const filePromises = uploadedFiles.map((file) => {

            return new Promise((resolve) => {
                const size = file.size;

                if (size > 100 * 102) {
                    alert('file size above 100 KB')
                } else {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        resolve([file, e.target.result]);
                        const previewUrl = e.target.result;
                        resolve({ file, previewUrls, size });
                        reader.readAsDataURL(file);
                    };
                    reader.readAsDataURL(file);
                }
            });
        });

        // Once all promises are resolved, update the state with the new files and preview URLs
        Promise.all(filePromises).then((results) => {
            console.log(results)
            const newFiles = results.map((result) => result[0]);
            const newPreviewUrls = results.map((result) => result[1]);
            setFiles([...files, ...newFiles]);
            setPreviewUrls([...previewUrls, ...newPreviewUrls])
        })
            .catch((error) => {
                console.error('Error uploading file:', error.message);
                // Handle the error, e.g., show a notification to the user
            });
    };

    const handleChange = event => {
        // console.log('Label 👉️', event.target.selectedOptions[0].label);
        setSelected(event.target.value);
    };
    const proofupdate = () => {
        alert('Proof update succssfully.')
        setPreviewUrls([])
        setSelected('')
    }
    const deleteitem = (id) => {
        const idToRemove = id; // Replace with the actual 'id' you want to remove
        const updatedFiles = previewUrls.filter((file, index) => index !== idToRemove);
        setPreviewUrls(updatedFiles);
    };
    console.log(previewUrls.length)
    return (
        <>
            <Profileheader />
            <section className='my-profile pb-3'>
                <div className='container-90'>
                    <div className='row m-0'>
                        <div className='col-3'>
                            <Useraside />
                        </div>
                        <div className='col-6'>
                            <div className='section-profiles'>
                                <div className='profile-photo'>
                                    <img src={editprofile} className='editprofile' />
                                    <div className='profile-id'>
                                        <h1>Tamil Selvan</h1>
                                        <p>ID : SYM000001</p>
                                    </div>
                                </div>
                                <div className='profile-verify'>
                                    <div className='proof-verify'>
                                        <h2><b>Upload Your ID Proof</b></h2>
                                        <p>Upload documents to verify your identity with information such as your name & date of birth.</p>
                                    </div>
                                </div>
                                <div className='m-4'>
                                    <div>
                                        <div className='row m-0'>
                                            <div className='col-lg-6'>
                                                <label className='pb-1 selectid' >Select your ID *</label>
                                                <select className="form-select select-id" value={selected} onChange={handleChange}>
                                                    <option selected>select ID</option>
                                                    <option value="Voter">Voter ID</option>
                                                    <option value="Aadhar">Aadhar ID</option>
                                                    <option value="License">Driving License</option>
                                                </select>
                                            </div>
                                            <div className='col-lg-6 pt-4 text-center'>
                                                {selected == 'Voter' || selected == 'Aadhar' || selected == 'License' ?
                                                    <>
                                                        {previewUrls.length == 2 ? <></> :
                                                            <>
                                                                <input type="file" id="upload" onChange={handleFileUpload} style={{ display: 'none' }} />
                                                                <label htmlFor="upload" className="custom-file-upload">
                                                                    <img src={upload} alt="upload" className="w-100 h-100" />
                                                                </label>
                                                            </>
                                                        }

                                                    </>
                                                    :
                                                    <></>
                                                }

                                            </div>
                                            <div className='col-12'>
                                                {selected == 'Voter' || selected == 'Aadhar' || selected == 'License' ? <><div className='proof-verify'><h2><b>Upload Front side and Back side image</b></h2></div></> : <></>}
                                            </div>
                                        </div>
                                        <div className='row m-0 py-3'>
                                            {previewUrls.map((previewUrl, index) => (
                                                <div className='col-4 mb-2'>
                                                    <img key={index} src={previewUrl} alt="preview" className='w-100 card-views p-0' />
                                                    <button type="button" className="close position-absolute border-0 bg-none close-btn" onClick={() => deleteitem(index)}>
                                                        <FontAwesomeIcon icon={faClose} />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='proof-verified mt-4'>
                                            {previewUrls.length > 1 ? <><img src={verify} /><span className='mx-2'>Verified</span><div className='text-center save-btn'><button type='button' onClick={() => proofupdate()}>Upload</button></div></> : ""}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-3'>
                            <Benifit />
                        </div>
                    </div>
                </div>

            </section >
            <Footer />
        </>
    )
}

export default Proofverify