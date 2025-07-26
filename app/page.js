import fs from 'fs/promises';
import path from 'path';
import LottieAnimation from './member/[slug]/LottieAnimation';

async function getTeamData() {
  const filePath = path.join(process.cwd(), 'app', 'data', 'team.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

export const metadata = {
  title: 'Hamza Noor | Full Stack Developer | Crafting Digital Excellence',
  description: 'Award-winning Full Stack Developer specializing in React.js, Next.js, and scalable solutions. Transform your ideas into stunning, high-performance digital products.',
};

export default async function Home() {
  const teamData = await getTeamData();
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center p-6 md:p-12">
        {/* Welcome Animation */}
        <div className="absolute top-10 right-10 md:top-20 md:right-20 w-32 h-32 md:w-48 md:h-48 z-20">
          <LottieAnimation 
            animationPath="/animations/welcome.json"
            className="w-full h-full"
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#fd79a8] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-[#00cec9] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-[#a29bfe] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-[#ffa500] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight animate-slide-up">
            <span className="bg-gradient-to-r from-[#a29bfe] via-[#fd79a8] to-[#00cec9] text-transparent bg-clip-text">
              Hamza Noor
            </span>
            <br />
            <span className="text-3xl md:text-5xl font-bold text-white">
              Full Stack Developer
            </span>
          </h1>

          {/* Compelling Subtitle */}
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300 leading-relaxed animate-slide-up-delay">
            Crafting <span className="text-[#00cec9] font-semibold">digital excellence</span> with cutting-edge technologies. 
            I transform your <span className="text-[#fd79a8] font-semibold">vision into reality</span>, 
            delivering <span className="text-[#a29bfe] font-semibold">stunning, high-performance</span> solutions that drive results.
          </p>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto animate-slide-up-delay-2">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold mb-2">Lightning Fast</h3>
              <p className="text-gray-400 text-sm">100/100 Lighthouse scores with optimized performance</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="text-lg font-bold mb-2">Beautiful Design</h3>
              <p className="text-gray-400 text-sm">Stunning UI/UX that captivates and converts</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-bold mb-2">Scalable Solutions</h3>
              <p className="text-gray-400 text-sm">Built to grow with your business needs</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-delay-3">
            <a 
              href={`/member/${teamData[0].slug}`}
              className="group bg-gradient-to-r from-[#6c5ce7] to-[#00cec9] px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-[#6c5ce7]/50 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                View My Portfolio
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
            <a 
              href={`/member/${teamData[0].slug}/contact`}
              className="group border-2 border-[#6c5ce7] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#6c5ce7]/20 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Get In Touch
                <span className="group-hover:rotate-12 transition-transform">📧</span>
              </span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#a29bfe] to-[#00cec9] text-transparent bg-clip-text">
                Ready to Build Something Amazing?
              </span>
            </h3>
            <p className="text-gray-300 mb-6">
              Let's transform your ideas into stunning digital reality
            </p>
            <a 
              href={`/member/${teamData[0].slug}/contact`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fd79a8] to-[#6c5ce7] px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
            >
              Start Your Project
              <span>🚀</span>
            </a>
          </div>
          
          <div className="text-gray-400 text-sm">
            <p className="mb-2">Built with ❤️ by Hamza Noor</p>
            <p>© {new Date().getFullYear()} Hamza Noor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
