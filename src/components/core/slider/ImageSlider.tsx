/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

type ImageSliderProps = {
  imageUrls: string[];
};

function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div>
      <img src={imageUrls[imageIndex]} alt="hello" />
      <button type="button">click</button>
    </div>
  );
}

export default ImageSlider;
