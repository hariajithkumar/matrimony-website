import React, { useEffect, useState } from 'react';
import imageCompression from "browser-image-compression";


import Profileheader from '../Common/page/Profileheader'
import Footer from '../Common/page/Footer'
import Useraside from '../Common/page/Useraside'
import Benifit from '../Common/page/Benefit'
import '../Common/css/profile.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import upload from '../Common/image/upload.png'
import editprofile from '../Common/image/white-edit.png'
import verify from '../Common/image/verifydetails.png'
import cardproof from '../Common/image/verify-card.jpg'
import ImageCompressor from './ImageCompressor';
// import ImageUploader from './ImageUploader';
// compress fn code 

const units = ["bytes", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];

function niceBytes(x) {
    let l = 0,
        n = parseInt(x, 10) || 0;

    while (n >= 1024 && ++l) {
        n = n / 1024;
    }

    return n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l];
}

const imageSize = (file) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    const promise = new Promise((resolve, reject) => {
        reader.onload = function (e) {
            const image = new Image();

            image.src = e.target.result;

            image.onload = function () {
                const height = this.height;
                const width = this.width;

                resolve({ width, height });
            };

            image.onerror = reject;
        };
    });

    return promise;
};


function Proofverify() {
    const [selected, setSelected] = useState('');
    // State for storing file data and preview URLs
    const [files, setFiles] = useState([]);
    const [previewUrls, setPreviewUrls] = useState([]);
    // const [compressedImages, setCompressedImages] = useState([]);
    // const [base64Image, setBase64Image] = useState("");

    // Function to handle file uploads
    // const handleFileUpload = (e) => {
    //     const uploadedFiles = Array.from(e.target.files);
    //     console.log(uploadedFiles)
    //     // Map each file to a Promise that resolves to an array of the file itself and its preview URL
    //     const filePromises = uploadedFiles.map((file) => {

    //         return new Promise((resolve) => {
    //             const size = file.size;

    //             if (size > 100 * 102) {
    //                 alert('file size above 100 KB')
    //             } else {
    //                 const reader = new FileReader();
    //                 reader.onload = (e) => {
    //                     resolve([file, e.target.result]);
    //                     const previewUrl = e.target.result;
    //                     resolve({ file, previewUrls, size });
    //                     reader.readAsDataURL(file);
    //                 };
    //                 reader.readAsDataURL(file);
    //             }
    //         });
    //     });

    //     // Once all promises are resolved, update the state with the new files and preview URLs
    //     Promise.all(filePromises).then((results) => {
    //         console.log(results)
    //         const newFiles = results.map((result) => result[0]);
    //         const newPreviewUrls = results.map((result) => result[1]);
    //         setFiles([...files, ...newFiles]);
    //         setPreviewUrls([...previewUrls, ...newPreviewUrls])
    //     })
    //         .catch((error) => {
    //             console.error('Error uploading file:', error.message);
    //             // Handle the error, e.g., show a notification to the user
    //         });
    // };

    // compressImage fn code 
    const compressImage = async (file) => {
        const reader = new FileReader();
        const imageDimensions = await imageSize(file);

        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: imageDimensions?.width > 1300 ? 1300 : imageDimensions?.width,
            useWebWorker: true,
        };

        const compressedImg = await imageCompression(file, options);
        // Convert the compressed image to base64
        const base64String = await convertToBase64(compressedImg);

        return base64String;
    };

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const uploadImage = async (files) => {
        const base64String = await compressImage(files[0]);
        setPreviewUrls((prevImages) => [...prevImages, base64String]);
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

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

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
                                {/* <div className='profile-photo'>
                                    <img src={editprofile} className='editprofile' />
                                    <div className='profile-id'>
                                        <h1>Tamil Selvan</h1>
                                        <p>ID : SYM000001</p>
                                    </div>
                                </div> */}
                                <div className='profile-verify'>
                                    <div className='proof-verify'>
                                        <h2><b>Upload Your ID Proof</b></h2>
                                        <p>Upload documents to verify your identity with information such as your ID Proof.</p>
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
                                                                <div className='row m-0'>
                                                                    <div className='col-6'>
                                                                        <input type="file" id="upload" onChange={(e) => uploadImage(e.target.files)} style={{ display: 'none' }} />
                                                                        <label htmlFor="upload" className="custom-file-upload">
                                                                            <img src={upload} alt="upload" className="w-100 h-100" />
                                                                        </label>
                                                                    </div>

                                                                </div>

                                                            </>
                                                        }

                                                    </>
                                                    :
                                                    <></>
                                                }

                                            </div>
                                            <div>
                                                {/* <ImageCompressor /> */}
                                            </div>
                                            <div className='col-12'>
                                                {selected == 'Voter' || selected == 'Aadhar' || selected == 'License' ?
                                                    <>
                                                        <div className='proof-verify mt-3'>
                                                            <div className='row m-0'>
                                                                <div className='col-lg-6 col-md-6 col-sm-6 col-12 mt-lg-0 mt-md-0 mt-sm-0 mt-2 mb-2'>
                                                                    <div class="rounded-3" >
                                                                        <img src={previewUrls == "" ? cardproof : previewUrls[0]} className='w-100 card-views p-0' />
                                                                        {previewUrls == "" ? "" :
                                                                            <>
                                                                                <button type="button" className="close position-absolute border-0 bg-none close-btn" onClick={() => deleteitem(0)}>
                                                                                    <FontAwesomeIcon icon={faClose} />
                                                                                </button>
                                                                            </>
                                                                        }

                                                                        <div>
                                                                            <h5 className='py-2 text-center'>{selected} Front View</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-6 col-md-6 col-sm-6 col-12 mt-lg-0 mt-md-0 mt-sm-0 mt-2 mb-2'>
                                                                    <div class=" rounded-3" >
                                                                        <img src={previewUrls.length == 2 ? previewUrls[1] : cardproof} className='w-100 card-views p-0' />
                                                                        {previewUrls.length == 2 ? 
                                                                            <>
                                                                                <button type="button" className="close position-absolute  border-0 bg-none close-btn" onClick={() => deleteitem(1)}>
                                                                                    <FontAwesomeIcon icon={faClose} />
                                                                                </button>
                                                                            </> : ""
                                                                        }
                                                                        <div>
                                                                            <h5 className='py-2 text-center'>{selected} Back View</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </>
                                                    :
                                                    <></>}
                                            </div>
                                        </div>
                                        {/* <div className='row m-0 py-3'>
                                            {previewUrls.map((previewUrl, index) => (
                                                <div className='col-lg-6 col-md-6 col-sm-6 col-12 mt-lg-0 mt-md-0 mt-sm-0 mt-2 mb-2'>
                                                    <img key={index} src={previewUrl} alt="preview" className='w-100 card-views p-0' />
                                                    <button type="button" className="close position-absolute border-0 bg-none close-btn" onClick={() => deleteitem(index)}>
                                                        <FontAwesomeIcon icon={faClose} />
                                                    </button>
                                                </div>
                                            ))}
                                        </div> */}
                                        <div className='proof-verified mt-4'>
                                            {previewUrls.length > 1 ? <><img src={verify} /><span className='mx-2'>Verified</span><div className='text-center save-btn'><button type='button' onClick={() => proofupdate()}>Upload</button></div></> : ""}
                                        </div>
                                    </div>
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
            </section >
            <Footer />
        </>
    )
}

export default Proofverify