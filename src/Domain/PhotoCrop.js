import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import imageCompression from "browser-image-compression";
// import Cropper from 'react-easy-crop';
import Select from 'react-select';

import addphoto from '../Common/image/add-photo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEllipsis, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Resizeimage from './Resizeimage';
import { useDispatch, useSelector } from 'react-redux';
import { setBackgroungImage, setProfileImage } from '../Redux/CreateSlice';



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

const PhotoCrop = () => {
    const { profileImage, backgroungImage } = useSelector((state) => state.matrimony)
    const [image, setImage] = useState(null);
    const [cropImage, setCropImage] = useState([]);
    const [cropper, setCropper] = useState();
    const [hideCrop, setHideCrop] = useState(0)
    const [errorMessage, setErrorMessage] = useState('');
    const [croppedImage, setCroppedImage] = useState(null);
    const [finalImage, setFinalImage] = useState([])
    const [optionsState, setOptionsState] = useState({});
    const [selected, setSelected] = useState('');
    const [selectCategory, setselectCategory] = useState([])
    const [filterProfile, setFilterProfile] = useState([])
    const height = [
        { label: 'Profile', value: 'Profile' },
        { label: 'Horoscope', value: 'Horoscope' }
    ];
    const dispatch = useDispatch();

    const onDrop = useCallback(async (acceptedFiles) => {
        const file = acceptedFiles[0];
        const imageDimensions = await imageSize(file);
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: imageDimensions?.width > 1300 ? 1300 : imageDimensions?.width,
            useWebWorker: true,
        };

        const compressedImg = await imageCompression(file, options);
        // Convert the compressed image to base64
        const base64String = await convertToBase64(compressedImg);

        // return base64String;
        setImage(URL.createObjectURL(file));
        setErrorMessage('');
    }, []);

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const selectImage = () => {
        setHideCrop(0);
    }

    const handleCrop = async () => {
        if (typeof cropper !== 'undefined') {
            const croppedDataUrl = cropper.getCroppedCanvas().toDataURL();
            setCroppedImage(croppedDataUrl);
            setCropImage([...cropImage, croppedDataUrl]);
            setFinalImage([...finalImage, croppedDataUrl])
            setselectCategory([...selectCategory, { category: selected.value, image: croppedDataUrl }])
            setSelected('')
        }
        setImage(null);
    };


    const { getRootProps, getInputProps } = useDropzone({
        // image: 'addphoto',
        accept: 'image/*',
        onDrop,
    });
    const save = () => {
        alert('successfully upload image')
        setErrorMessage('')
        setCropImage([])
    }
    const deleteitem = (id) => {
        const idToRemove = id; // Replace with the actual 'id' you want to remove
        const updatedFiles = cropImage.filter((file, index) => index !== idToRemove);
        setCropImage(updatedFiles);
    };

    // option function 
    const handleOptionClick = (index) => {
        setOptionsState((prevOptionsState) => ({
            ...prevOptionsState,
            [index]: !prevOptionsState[index],
        }));
    };
    // option delete profile photo fn 
    const photoRemove = (id) => {
        const idToRemove = id; // Replace with the actual 'id' you want to remove
        const delete_img = finalImage[id]
        // const updatedFiles = finalImage.filter((file, index) => index !== idToRemove);
        // setFinalImage(updatedFiles);
        const updatedFiles = selectCategory.filter((data, index) => index !== idToRemove);
        setselectCategory(updatedFiles);
        if (profileImage == delete_img) {
            dispatch(setProfileImage(''))
        }
        if (backgroungImage == delete_img) {
            dispatch(setBackgroungImage(''));
        }
        alert("Remove the Image")
    }

    // profileset image fn 
    const profileSet = (data) => {
        const profile_photo = selectCategory[data].image
        dispatch(setProfileImage(profile_photo))
        setOptionsState({})
        alert("Success upload your profile")
    }
    const backgroundSet = (data) => {
        const profile_photos = selectCategory[data].image
        dispatch(setBackgroungImage(profile_photos))
        setOptionsState({})
        alert("Background profile Successfully Updated")
    }

    // fliter options
    const handleFilter = (filterOption) => {
        if (filterOption == 'profile') {
            const updatedFiles = selectCategory.filter((data, index) => selectCategory[index].category == 'Profile');
            setFilterProfile(updatedFiles);
        } else if (filterOption == 'horoscope') {
            const updatedFiles = selectCategory.filter((data, index) => selectCategory[index].category == 'Horoscope');
            setFilterProfile(updatedFiles);
        } else {
            const updatedFiles = selectCategory.filter((data, index) => selectCategory);
            setFilterProfile(updatedFiles);
        }
    }

    console.log(1, selectCategory);
    console.log(2, filterProfile)
    return (
        <div>
            <div className='my-3 text-center'>
                <button className='upload-img' onClick={() => handleFilter('all')}>All</button>
                <button className='upload-img' onClick={() => handleFilter('profile')}>Profile</button>
                <button className='upload-img' onClick={() => handleFilter('horoscope')}>Horoscope</button>
            </div>
            <div className='row m-0'>
                <div className='col-lg-6 col-md-6 col-12 align-self-center'>
                    <label className='my-2'>Select Your Option</label>
                    <Select
                        options={height}
                        isSearchable
                        className='mb-2'
                        value={selected}
                        onChange={(selectedOption) => setSelected(selectedOption)}
                    />
                </div>
                <div className='col-lg-6 col-md-6 col-12'>
                    {selected == '' ?
                        <></>
                        :
                        <>
                            <div {...getRootProps()} style={{ width: '95%', height: '40px', position: 'relative', left: '30px', paddingBottom: '50px', marginTop: '8px' }}>
                                <label className='mt-0'>Select your {selected.value}</label><br />
                                <label htmlFor="upload" className="custom-file-upload mt-1">
                                    <img src={addphoto} alt="upload" className="w-100 h-100" onClick={selectImage} />
                                </label>
                            </div>
                        </>
                    }
                </div>


            </div>
            {errorMessage && <p className='mx-4 my-3 text-danger'>{errorMessage}</p>}
            {hideCrop ? <></> : <> {image ? (
                <Cropper
                    style={{ height: '100%', width: '100%', border: '1px solid #ccc', position: 'relative' }}
                    initialAspectRatio={1}
                    preview=".img-preview"
                    src={image}
                    viewMode={1}
                    guides={true}
                    minCropBoxHeight={10}
                    minCropBoxWidth={10}
                    background={false}
                    responsive={true}
                    autoCropArea={1}
                    checkOrientation={false}
                    onInitialized={(instance) => {
                        setCropper(instance);
                    }}
                />
            ) : (
                <>
                </>
            )}</>}
            {hideCrop ? <></> : <>{image && (
                <div>
                    <button type='button' className='upload-img' style={{ marginTop: '100px' }} onClick={handleCrop}>Crop Image</button>
                </div>
            )}</>}
            <div className='row m-0'>

                {cropImage.map((data, index) => {
                    return (
                        <>
                            <div className='col-6 my-3 text-center'>
                                <img src={data} className='h-100 upload-photo' />
                                <button type="button" className="close position-absolute border-0 bg-none close-btn" onClick={() => deleteitem(index)}>
                                    <FontAwesomeIcon icon={faClose} />
                                </button>
                            </div>
                        </>
                    )
                })}
            </div>
            {cropImage.length > 0 ? <><div><button className='upload-img' onClick={save}>Upload Image</button></div></> : <></>}
            {/* {cropImage.length > 0 ? <></> :
                <>
                    <div className='row m-0'>
                        {finalImage.map((data, index) => {
                            return (
                                <>
                                    <div key={data.id} className='col-6 my-3 text-center position-relative'>
                                        <img src={data} className='h-100 upload-photo ' />
                                        <span onClick={() => handleOptionClick(index)} className='position-absolute top-0 p-2' style={{ left: '84%', width: '20px', height: '20px', border: 'none', borderRadius: '10px', background: 'black', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <FontAwesomeIcon
                                                icon={faEllipsisVertical}
                                                style={{ color: '#FFF' }}

                                            />
                                        </span>
                                        {optionsState[index] && (
                                            <ul className='nav d-block' style={{ position: 'absolute', top: '35px', left: '49%', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                                                <li className='nav-item user-select-none' onClick={() => profileSet(index)}>Profile Set</li>
                                                <li className='nav-item user-select-none' onClick={() => backgroundSet(index)}>Background Set</li>
                                                <li className='nav-item user-select-none' onClick={() => photoRemove(index)}>Delete</li>
                                            </ul>
                                        )}
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </>
            } */}
            {cropImage.length > 0 ? <></> :
                <>
                    {filterProfile.length > 0 ?
                        <>
                            <div className='row m-0'>
                                {filterProfile.map((data, index) => {
                                    return (
                                        <>
                                            <div key={data.id} className='col-6 my-3 text-center position-relative'>
                                                <img src={data.image} className='h-100 upload-photo ' />
                                                <span onClick={() => handleOptionClick(index)} className='position-absolute top-0 p-2' style={{ left: '84%', width: '20px', height: '20px', border: 'none', borderRadius: '10px', background: 'black', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <FontAwesomeIcon
                                                        icon={faEllipsisVertical}
                                                        style={{ color: '#FFF' }}

                                                    />
                                                </span>
                                                {optionsState[index] && (
                                                    <ul className='nav d-block' style={{ position: 'absolute', top: '35px', left: '49%', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                                                        <li className='nav-item user-select-none' onClick={() => profileSet(index)}>Profile Set</li>
                                                        <li className='nav-item user-select-none' onClick={() => backgroundSet(index)}>Background Set</li>
                                                        <li className='nav-item user-select-none' onClick={() => photoRemove(index)}>Delete</li>
                                                    </ul>
                                                )}
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </>
                        :
                        <>
                            <div className='row m-0'>
                                {selectCategory.map((data, index) => {
                                    return (
                                        <>
                                            <div key={data.id} className='col-6 my-3 text-center position-relative'>
                                                <img src={data.image} className='h-100 upload-photo ' />
                                                <span onClick={() => handleOptionClick(index)} className='position-absolute top-0 p-2' style={{ left: '84%', width: '20px', height: '20px', border: 'none', borderRadius: '10px', background: 'black', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <FontAwesomeIcon
                                                        icon={faEllipsisVertical}
                                                        style={{ color: '#FFF' }}

                                                    />
                                                </span>
                                                {optionsState[index] && (
                                                    <ul className='nav d-block' style={{ position: 'absolute', top: '35px', left: '49%', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                                                        <li className='nav-item user-select-none' onClick={() => profileSet(index)}>Profile Set</li>
                                                        <li className='nav-item user-select-none' onClick={() => backgroundSet(index)}>Background Set</li>
                                                        <li className='nav-item user-select-none' onClick={() => photoRemove(index)}>Delete</li>
                                                    </ul>
                                                )}
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </>
                    }

                </>
            }

        </div>
    );
};

export default PhotoCrop;
