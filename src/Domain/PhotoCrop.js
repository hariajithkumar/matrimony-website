import React, { useState,useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import addphoto from '../Common/image/add-photo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';


const PhotoCrop = () => {
    const [image, setImage] = useState(null);
    const [cropImage, setCropImage] = useState([]);
    const [cropper, setCropper] = useState();
    const [hideCrop, setHideCrop] = useState(0)
    const [errorMessage, setErrorMessage] = useState('');

    // const onDrop = (acceptedFiles) => {
    //     const file = acceptedFiles[0];
    //     setImage(URL.createObjectURL(file));
        
    // };
    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        const size = file.size;
        console.log(1,size)
        if (size > 100 * 1024) {
            setErrorMessage('File size exceeds 100 KB. Please choose a smaller file.');
        } else {
            setImage(URL.createObjectURL(file));
            setErrorMessage('');
        }
    }, []);
    const selectImage = () => {
        setHideCrop(0);

    }

    const handleCrop = () => {
        if (typeof cropper !== 'undefined') {
            const croppedDataUrl = cropper.getCroppedCanvas().toDataURL();
            setCropImage([...cropImage, croppedDataUrl]);
            setHideCrop(1)
            setImage(null)
        }
        setImage(null)
    };
  
    const { getRootProps, getInputProps } = useDropzone({
        // image: 'addphoto',
        accept: 'image/*',
        onDrop,
    });
    const save = ()=>{
        alert('successfully upload image')
        setErrorMessage('')
        setCropImage([])
    }
    const deleteitem = (id) => {
        const idToRemove = id; // Replace with the actual 'id' you want to remove
        const updatedFiles = cropImage.filter((file, index) => index !== idToRemove);
        setCropImage(updatedFiles);
    };
    return (
        <div>
            <div {...getRootProps()} style={{ width: '150px', height: '40px', position: 'relative', left: '30px', paddingBottom: '50px',marginTop:'25px' }}>
                <label htmlFor="upload" className="custom-file-upload">
                    <img src={addphoto} alt="upload" className="w-100 h-100" onClick={selectImage} />
                </label>
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
                            <div className='col-4 my-3'>
                                <img src={data} className='w-75 h-100' />
                                <button type="button" className="close position-absolute border-0 bg-none close-btn" onClick={() => deleteitem(index)}>
                                    <FontAwesomeIcon icon={faClose} />
                                </button>
                            </div>
                        </>
                    )
                })}
            </div>
            {cropImage.length>0 ? <><div><button className='upload-img' onClick={save}>Upload Image</button></div></> : <></>}

        </div>
    );
};

export default PhotoCrop;
