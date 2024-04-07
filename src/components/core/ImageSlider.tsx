/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import WEB from '../../assests/web.gif';
import Web from '../../assests/industries.png';

export function ImageSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full relative px-5" onMouseUp={handleMouseUp}>
      <div
        className="relative w-full  max-w-[500px] aspect-[70/45] m-auto overflow-hidden select-none"
        onMouseMove={handleMove}
        onMouseDown={handleMouseDown}
      >
        <img alt="" src={Web} />

        <div
          className="absolute top-0 left-0 right-0 w-full max-w-[500px] aspect-[70/45] m-auto overflow-hidden select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img alt="" src={WEB} />
        </div>
        <div
          className="absolute top-32 bottom-0 w-32 bg-black/40 h-fit cursor-ew-resize"
          style={{
            left: `calc(${sliderPosition}% - 1px)`,
          }}
        >
          <div className="bg-black absolute rounded-full h-9 w-9 -left-5 top-[calc(50%-5px)]" />
        </div>
      </div>
    </div>
  );
}
