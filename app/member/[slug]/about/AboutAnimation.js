'use client';

import Lottie from 'lottie-react';
import { useRef, useEffect, useState } from 'react';

const AboutAnimation = () => {
  const lottieRef = useRef(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/animations/about-animation.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading about animation:', error));
  }, []);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  }, []);

  if (!animationData) {
    return (
      <div className="flex items-center justify-center w-full h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00cec9]"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Lottie Animation Container */}
      <div className="relative z-10 w-full max-w-md">
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={true}
          autoplay={true}
          className="w-full h-auto"
        />
      </div>
      
      {/* Subtle background glow to match the page theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#a29bfe]/5 via-[#fd79a8]/3 to-[#00cec9]/5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default AboutAnimation; 