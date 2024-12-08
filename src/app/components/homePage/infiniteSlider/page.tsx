'use client'
import React, { useState, useEffect, useRef } from 'react';

// Sample image data - replace with your own images
const images = [
  'https://i.pinimg.com/736x/7f/7a/51/7f7a51a6f2a1ec2811d45c19b613af4b.jpg',
  'https://i.pinimg.com/736x/70/d4/18/70d41854a7791319c0edcfd7c7677e9b.jpg',
  'https://i.pinimg.com/736x/e0/17/43/e01743b8f584f891140db7a8f637ac0d.jpg',
  'https://i.pinimg.com/736x/4d/32/08/4d3208499dcf97620f23ce2c32dd1589.jpg',
  'https://i.pinimg.com/736x/8b/2c/95/8b2c95cd21a09f3df4bff00bb763366c.jpg',
  'https://i.pinimg.com/736x/d6/2b/ca/d62bca4d4e432a28e0b27539cdd2fb54.jpg',
  'https://i.pinimg.com/736x/20/f8/3d/20f83d28137b11cc324ec67cf3923223.jpg',
];

const InfiniteSlider = () => {
  const [translateX, setTranslateX] = useState(0);
  const [width, setWidth] = useState(200); // Default width of each image
  const slideSpeed = 2; // Speed of the slider

  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  // Function to animate the slider
  const animateSlider = () => {
    setTranslateX((prev) => {
      const sliderWidth = images.length * (width + 16); // 16 is margin
      const newPosition = prev - slideSpeed;
      return newPosition <= -sliderWidth ? 0 : newPosition;
    });
  };

  useEffect(() => {
    // Set up animation interval
    const intervalId = setInterval(animateSlider, 16); // ~60fps

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [width, slideSpeed]);

  // Duplicate images to create infinite loop
  const displayImages = [...images, ...images];

  return (
    <div ref={containerRef} className="overflow-hidden w-full relative mt-20">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-0 ease-linear"
        style={{
          transform: `translateX(${translateX}px)`,
        }}
      >
        {displayImages.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0  relative"
            style={{
              width: `${width}px`,
              height: `${width}px`, // Assuming square images
            }}
          >
            <img
              src={src}
              alt={`Slider image ${index + 1}`}
              className="w-full h-full object-cover "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
