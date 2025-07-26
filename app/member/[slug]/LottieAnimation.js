"use client";
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

export default function LottieAnimation({ animationPath, className = "" }) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(animationPath)
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));
  }, [animationPath]);

  if (!animationData) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="w-8 h-8 border-2 border-[#6c5ce7] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      className={className}
      style={{ backgroundColor: 'transparent' }}
    />
  );
} 