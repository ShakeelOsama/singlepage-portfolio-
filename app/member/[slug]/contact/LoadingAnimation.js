'use client';

import Lottie from 'lottie-react';
import { useRef, useEffect, useState } from 'react';

const LoadingAnimation = ({ isVisible }) => {
  const lottieRef = useRef(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    if (isVisible) {
      fetch('/animations/Loading.json')
        .then(response => response.json())
        .then(data => setAnimationData(data))
        .catch(error => console.error('Error loading loading animation:', error));
    }
  }, [isVisible]);

  useEffect(() => {
    if (isVisible && lottieRef.current && animationData) {
      lottieRef.current.play();
    }
  }, [isVisible, animationData]);

  if (!isVisible || !animationData) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 max-w-xs w-full mx-4 flex flex-col items-center">
        <div className="w-40 h-40 flex items-center justify-center">
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop={true}
            autoplay={true}
            className="w-full h-full"
            style={{ backgroundColor: 'transparent' }}
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold text-white mb-1">
            <span className="bg-gradient-to-r from-[#a29bfe] via-[#fd79a8] to-[#00cec9] text-transparent bg-clip-text">
              Sending Email...
            </span>
          </h3>
          <p className="text-gray-300 text-xs">Please wait while we send your message.</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation; 