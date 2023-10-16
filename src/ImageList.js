// src/components/ImageList.js
import React from 'react';
import Image from './Image';

const ImageList = ({ imageUrls, onImageClick }) => {
  return (
    <div className="image-list">
      {imageUrls.map((imageUrl, index) => (
        <Image key={index} imageUrl={imageUrl} onClick={onImageClick} />
      ))}
    </div>
  );
};

export default ImageList;
