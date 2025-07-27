import React, { useState, useEffect } from 'react';

// Import your images here
import img1 from '../assets/img.jpg';
import img2 from '../assets/IMG_1468.jpg';
import img3 from '../assets/IMG_1491.jpg';
import img4 from '../assets/IMG_1518.jpg';
import img5 from '../assets/IMG_1549.jpg';
// Add as many as you want

const images = [
  img1, img2, img3, img4, img5,
  // ...more images
];

export default function Carousel3D() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Go to next/prev slide
  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  // Helper to get index with wrap-around
  const getIndex = (offset) => (current + offset + length) % length;

  // Auto-advance every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // 3000ms = 3s
    return () => clearInterval(interval); // Clean up on unmount
  }, [current]); // Re-run if current changes

  return (
    <div style={{
      perspective: '1000px',
      width: '420px',
      margin: '60px auto',
      position: 'relative',
      height: '360px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Left image */}
      <img
        src={images[getIndex(-1)]}
        alt=""
        style={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%) rotateY(30deg) scale(0.8)',
          zIndex: 1,
          transition: 'all 0.5s cubic-bezier(.5,-0.5,.5,1.5)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          borderRadius: '14px',
          opacity: 0.7,
          width: 320,
          height: 210,
          objectFit: 'cover'
        }}
      />

      {/* Center image */}
      <img
        src={images[current]}
        alt=""
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%) scale(1.1)',
          zIndex: 3,
          transition: 'all 0.5s cubic-bezier(.5,-0.5,.5,1.5)',
          boxShadow: '0 16px 36px rgba(0,0,0,0.3)',
          borderRadius: '16px',
          width: 340,
          height: 230,
          objectFit: 'cover'
        }}
      />

      {/* Right image */}
      <img
        src={images[getIndex(1)]}
        alt=""
        style={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%) rotateY(-30deg) scale(0.8)',
          zIndex: 1,
          transition: 'all 0.5s cubic-bezier(.5,-0.5,.5,1.5)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          borderRadius: '14px',
          opacity: 0.7,
          width: 320,
          height: 210,
          objectFit: 'cover'
        }}
      />

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '-50px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: 32,
          background: 'rgba(0,0,0,0.1)',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          zIndex: 4
        }}
        aria-label="Previous"
      >‹</button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '-50px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: 32,
          background: 'rgba(0,0,0,0.1)',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          zIndex: 4
        }}
        aria-label="Next"
      >›</button>
    </div>
  );
}
