import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Cropper from 'react-easy-crop';
import imageCompression from 'browser-image-compression';

const Resizeimage = () => {
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [cropper, setCropper] = useState();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [cropImage, setCropImage] = useState([]);

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const imageDimensions = await imageSize(file);

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: imageDimensions?.width > 1300 ? 1300 : imageDimensions?.width,
      useWebWorker: true,
    };

    try {
      const compressedImg = await imageCompression(file, options);
      const base64String = await convertToBase64(compressedImg);

      setImage(base64String);
    //   setErrorMessage('');
    } catch (error) {
      console.error('Error compressing image:', error);
    //   setErrorMessage('Error compressing image');
    }
  }, []);

  const handleCrop = useCallback(async () => {
    if (typeof cropper !== 'undefined') {
      const croppedDataUrl = cropper.getCroppedCanvas().toDataURL();
      const options = {
        maxSizeMB: 1,
        useWebWorker: true,
      };

      try {
        const compressedImg = await imageCompression(croppedDataUrl, options);

        setCroppedImage(croppedDataUrl);
        setCropImage([...cropImage, croppedDataUrl]);
      } catch (error) {
        console.error('Error compressing cropped image:', error);
      }
    }
    setImage(null);
  }, [cropper, cropImage]);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const imageSize = async (file) => {
    // Implement the imageSize function as per your requirements
    // This function should return an object with width and height properties
    // Example: return { width: 500, height: 300 };
  };

  const niceBytes = (size) => {
    // Implement the niceBytes function as per your requirements
    // This function should return a human-readable size format
    // Example: return '5.2 MB';
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
  });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop an image here, or click to select an image</p>
      </div>

      {image && (
        <div>
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={4 / 3}
            onCropChange={setCrop}
            onZoomChange={setZoom}
          />
          <button onClick={handleCrop}>Crop and Compress Image</button>
        </div>
      )}

      {croppedImage && <img src={croppedImage} alt="Cropped Image" />}
    </div>
  );
};

export default Resizeimage;
