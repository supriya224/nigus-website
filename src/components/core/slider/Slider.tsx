/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/function-component-definition */
// Slider.tsx

import React, { useState } from 'react';
import slide1 from '../../../assets/slider1.png';
import slide2 from '../../../assets/slider2.png';
import slide3 from '../../../assets/slider3.png';

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const images: string[] = [slide1, slide2, slide3];

  const handleSlideChange = (index: number): void => {
    setCurrentSlide(index);
  };

  return (
    <div className=" mx-auto mt-10">
      <div className="relative">
        <img
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-auto rounded-md"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`h-3 w-3 mx-2 cursor-pointer rounded-full ${
                index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
