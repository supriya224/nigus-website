/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'http://www.nigussystems.com/images/slider1.png',
    'http://www.nigussystems.com/images/slider2.png',
    'http://www.nigussystems.com/images/slider1.png',
  ];

  const handleSlideChange = (index: React.SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  return (
    <div className="container mx-auto">
      <div className="relative">
        <img
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className=" rounded-md "
          width={1000}
        />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`h-3 w-3  mx-2 cursor-pointer rounded-full ${
                index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
