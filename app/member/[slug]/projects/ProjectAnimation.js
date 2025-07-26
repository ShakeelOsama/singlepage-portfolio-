'use client';

import Lottie from 'lottie-react';
import { useRef, useEffect, useState } from 'react';

const ProjectAnimation = ({ projectIndex }) => {
  const lottieRef = useRef(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Load different animations based on project index
    const animationFile = projectIndex === 0 ? 'first-project.json' : 'second-project.json';
    
    fetch(`/animations/${animationFile}`)
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading project animation:', error));
  }, [projectIndex]);

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
    <div className="w-full h-full flex items-center justify-center">
      {/* Lottie Animation - No background, transparent */}
      <div className="w-full max-w-md">
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={true}
          autoplay={true}
          className="w-full h-auto"
          style={{ backgroundColor: 'transparent' }}
        />
      </div>
    </div>
  );
};

export default ProjectAnimation; 