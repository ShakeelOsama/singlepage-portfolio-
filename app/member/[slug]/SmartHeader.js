"use client";
import Link from 'next/link';
import AnimatedHeader from './AnimatedHeader';
import MemberNav from './MemberNav';
import LottieAnimation from './LottieAnimation';

export default function SmartHeader({ slug, navItems }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-[#0f0c29]/95 via-[#302b63]/95 to-[#24243e]/95 backdrop-blur-md border-b border-white/10">
      <div className="px-6 md:px-20 py-4">
        <div className="flex items-center justify-between">
          {/* Profile image + name as link to member home */}
          <Link href={`/member/${slug}`} className="group flex items-center cursor-pointer select-none" title="Go to Member Home">
            <span className="transition-transform group-hover:scale-105 group-hover:drop-shadow-lg">
              <AnimatedHeader slug={slug} />
            </span>
          </Link>

          {/* Navigation Buttons */}
          <MemberNav slug={slug} navItems={navItems} />

          {/* Right Circle Animation */}
          <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
            <LottieAnimation 
              animationPath="/animations/circle.json"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 