// src/components/Image.js
import React from 'react';

const Image = ({ imageUrl, onClick }) => {
  return (
    <div className="image-container" onClick={() => onClick(imageUrl)}>
      <img src={imageUrl} alt="thumbnail" className="thumbnail" />
    </div>
  );
};

export default Image;
