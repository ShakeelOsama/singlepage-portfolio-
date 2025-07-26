'use client';

import Lottie from 'lottie-react';
import { useRef, useEffect, useState } from 'react';

const EmailSentAnimation = ({ isVisible, onComplete }) => {
  const lottieRef = useRef(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/animations/Email Sent.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading email sent animation:', error));
  }, []);

  useEffect(() => {
    if (isVisible && lottieRef.current && animationData) {
      lottieRef.current.play();
    }
  }, [isVisible, animationData]);

  if (!isVisible || !animationData) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 max-w-md w-full mx-4">
        {/* Lottie Animation */}
        <div className="w-full h-64 flex items-center justify-center">
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop={false}
            autoplay={true}
            className="w-full h-full"
            style={{ backgroundColor: 'transparent' }}
            onComplete={onComplete}
          />
        </div>
        
        {/* Success Message */}
        <div className="text-center mt-4">
          <h3 className="text-2xl font-bold text-white mb-2">
            <span className="bg-gradient-to-r from-[#a29bfe] via-[#fd79a8] to-[#00cec9] text-transparent bg-clip-text">
              Email Sent Successfully!
            </span>
          </h3>
          <p className="text-gray-300 text-sm">
            Thank you for your message. I'll get back to you soon!
          </p>
        </div>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 pointer-events-none rounded-3xl" 
             style={{
               background: 'linear-gradient(120deg,rgba(162,155,254,0.1) 0%,rgba(0,206,201,0.08) 100%)',
               zIndex: -1
             }} />
      </div>
    </div>
  );
};

export default EmailSentAnimation; 