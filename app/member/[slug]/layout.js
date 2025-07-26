import Link from 'next/link';
import { Suspense } from 'react';
import AnimatedHeader from './AnimatedHeader';
import MemberNav from './MemberNav';
import SmartHeader from './SmartHeader';

export default async function MemberLayout({ children, params }) {
  const { slug } = await params;
  const navItems = ['Home', 'Services', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 md:px-20 py-10 pt-24">
      {/* Smart Header */}
      <SmartHeader slug={slug} navItems={navItems} />

      {/* Page-specific content with lazy loading */}
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00cec9]"></div>
        </div>
      }>
        {children}
      </Suspense>
    </main>
  );
}
