import React, { useState } from "react";
import imageCompression from "browser-image-compression";
import upload from '../Common/image/upload.png'
import verify from '../Common/image/verifydetails.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';




const ImageCompressor = () => {
  const [compressedImages, setCompressedImages] = useState([]);

  const compressImage = async (file) => {
    const imageDimensions = await (file);
    // const imageDimensions = await imageSize(file);


    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight:
        imageDimensions?.width > 1300 ? 1300 : imageDimensions?.width,
      useWebWorker: true,
    };

    const compressedImg = await imageCompression(file, options);

    return compressedImg;
  };

  const uploadImage = async (files) => {
    const compressedImage = await compressImage(files[0]);
    setCompressedImages((prevImages) => [...prevImages, compressedImage]);
  };
  const deleteitem = (id) => {
    const idToRemove = id; // Replace with the actual 'id' you want to remove
    const updatedFiles = compressedImages.filter((file, index) => index !== idToRemove);
    setCompressedImages(updatedFiles);
  };
  return (
    <div>
      <form>
        {/* <input
            className="form-control"
            type="file"
            onChange={(e) => uploadImage(e.target.files)}
          /> */}
        <input type="file" id="upload" onChange={(e) => uploadImage(e.target.files)} style={{ display: 'none' }} />
        <label htmlFor="upload" className="custom-file-upload">
          <img src={upload} alt="upload" className="w-100 h-100" />
        </label>
      </form>
      <div className='row m-0 py-3'>
        {/* {previewUrls.map((previewUrl, index) => (
          <div className='col-4 mb-2'>
            <img key={index} src={previewUrl} alt="preview" className='w-100 card-views p-0' />
            <button type="button" className="close position-absolute border-0 bg-none close-btn" onClick={() => deleteitem(index)}>
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
        ))} */}
        <div className='col-6 mb-2'>
          {compressedImages.map((image, index) => (
            <>
              {/* <p>Compressed Image {index + 1}:</p> */}
              <img src={URL.createObjectURL(image)} alt={`Compressed ${index + 1}`} className="w-100"/>
              {/* <p>Size: {niceBytes(image.size)}</p> */}
              <button type="button" className="close position-absolute border-0 bg-none close-btn" onClick={() => deleteitem(index)}>
                <FontAwesomeIcon icon={faClose} />
              </button>
              </>
          ))}
        </div>
      </div>
      {/* <div className='proof-verified mt-4'>
        {compressedImages.length > 1 ? <><img src={verify} /><span className='mx-2'>Verified</span><div className='text-center save-btn'><button type='button' onClick={() => proofupdate()}>Upload</button></div></> : ""}
      </div> */}

    </div>
  );
};

export default ImageCompressor;
