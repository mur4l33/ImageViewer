// src/App.js
import React from 'react';
import './../App.css';

import ImageList from '../ImageList';

const imageUrls = [
  'https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5366.JPG',
  "https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5366.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5367.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5368.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5369.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5370.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5371.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5372.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5373.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5374.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5375.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5376.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5377.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5378.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5379.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5380.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5381.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5382.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5383.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5384.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5385.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5386.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5387.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5388.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5389.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5390.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5391.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5392.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5393.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5394.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5395.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5396.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5397.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5398.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5399.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5400.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5401.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5402.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5403.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5404.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5405.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5406.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5407.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5408.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5409.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5410.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5411.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5412.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5413.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5414.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5415.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5416.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5417.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5418.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5419.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5420.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5421.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5422.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5423.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5424.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5425.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5426.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5427.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5428.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5429.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5430.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5431.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5432.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5433.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5434.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5435.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5436.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5437.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5438.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5439.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5440.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5441.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5442.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5443.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5444.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5445.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5446.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5447.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5448.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5449.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5450.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5451.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5452.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5453.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5454.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5455.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5456.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5457.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5458.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5459.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5460.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5461.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5462.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5463.JPG",
"https://www.annauniv.edu/Graduation_Day_2023/201/a/218NC_D4/DSC_5464.JPG"
  // Add other image URLs here
];

const Twoc = () => {
  const handleImageClick = (imageUrl) => {
    window.location.href = imageUrl;
  };

  return (
    <div className="App">
      <h1>Image Gallery - </h1>
      
      <ImageList imageUrls={imageUrls} onImageClick={handleImageClick} />
    </div>
  );
};

export default Twoc;
