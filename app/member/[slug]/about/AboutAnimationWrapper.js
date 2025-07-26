'use client';

import dynamic from 'next/dynamic';

const AboutAnimation = dynamic(() => import('./AboutAnimation'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00cec9]"></div>
    </div>
  ),
});

export default function AboutAnimationWrapper() {
  return <AboutAnimation />;
} 