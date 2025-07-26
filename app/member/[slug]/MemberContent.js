"use client";
import Image from 'next/image';
import Link from 'next/link';
import LottieAnimation from './LottieAnimation';
import { FaCode, FaMobileAlt, FaBrain, FaRegStar, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import AboutAnimationWrapper from './about/AboutAnimationWrapper';
import SkillsFilter from './skills/SkillsFilter';
import ProjectCard from '../../components/ProjectCard';
import ProjectAnimationWrapper from './projects/ProjectAnimationWrapper';
import ContactForm from './contact/ContactForm';

// Map icon names to react-icons
const iconMap = {
  web: <FaCode className="text-2xl text-[#a29bfe]" />,
  android: <FaMobileAlt className="text-2xl text-[#00cec9]" />,
  ai: <FaBrain className="text-2xl text-[#fd79a8]" />,
};

export default function MemberContent({ member, slug }) {
  // Get member data for different sections
  const aboutTitle = member.aboutTitle || 'Software Engineering Student & Developer';
  const aboutSummary = member.aboutSummary || `As a passionate software engineering student, I'm dedicated to crafting innovative digital solutions that solve real-world problems. I believe in clean code, elegant design, and user-centered thinking. Whether building web applications, mobile apps, or exploring AI possibilities, I approach each project with creativity and precision.`;
  const aboutTags = member.aboutTags || ['React', 'Node.js', 'MongoDB', 'Express', 'Flutter', 'Python'];
  const aboutHighlights = member.aboutHighlights || [
    {
      icon: 'web',
      title: 'Web Development',
      description: 'Full-stack development with MERN stack, creating scalable web applications.'
    },
    {
      icon: 'android',
      title: 'Android Development',
      description: 'Native Android apps using Flutter and Dart with modern UI/UX principles.'
    },
    {
      icon: 'ai',
      title: 'AI/ML Enthusiast',
      description: 'Implementing intelligent solutions with cutting-edge AI technologies.'
    }
  ];

  const projects = member.projects || [];
  const contact = member.contact || {};
  const categories = ['all', ...new Set(member.skills.map((s) => s.category.toLowerCase()).filter(Boolean))];

  return (
    <div className="max-w-6xl w-full mx-auto space-y-24">
      {/* Hero Section */}
      <section
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-24"
      >
        {/* Left Section */}
        <div className="flex-1">
          <p className="text-sm text-[#ffa500] mb-3">
            👋 Hello, I'm
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-1">
            <span className="bg-gradient-to-r from-[#a29bfe] via-[#fd79a8] to-[#00cec9] text-transparent bg-clip-text">
              {member.name.split(' ')[0]}
            </span>{' '}
            <span className="text-[#fd79a8]">{member.name.split(' ')[1]}</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-[#00b894] mb-4">
            {member.role}
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed max-w-xl">
            {member.description}
          </p>

          {/* Skills Tags (show only top 4) */}
          <div className="flex flex-wrap gap-3 mb-8 max-w-xl">
            {member.skills.slice(0, 4).map((skill, i) => (
              <span
                key={i}
                className="text-sm font-semibold px-5 py-2 rounded-full text-white transition-all duration-200
                   bg-white/10 backdrop-blur-md border border-white/20 shadow-[inset_0_0_8px_#ffffff22]
                   hover:border-[#00cec9] hover:shadow-[0_0_10px_#00cec9aa]"
              >
                {skill.icon} {typeof skill === 'string' ? skill : skill.name}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={() => document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#6c5ce7] to-[#00cec9] px-6 py-2 rounded-full font-semibold shadow-md hover:opacity-90 transition-all duration-200"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}
              className="border border-[#6c5ce7] px-6 py-2 rounded-full font-semibold hover:bg-[#1e1e40] transition-all duration-200 text-center flex items-center justify-center"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right Section - Large Profile Image */}
        <div className="relative w-[280px] md:w-[340px] flex-shrink-0 -ml-10 md:-ml-16">
          <div className="absolute -top-4 -right-4 w-3 h-3 bg-[#fd79a8] rounded-full" />
          <div className="absolute bottom-0 left-0 w-3 h-3 bg-[#00cec9] rounded-full" />
          <div className="p-[5px] bg-gradient-to-tr from-[#6c5ce7] via-[#fd79a8] to-[#00cec9] rounded-full w-full h-[460px]">
            <Image
              src={member.image}
              alt={member.name}
              width={340}
              height={460}
              className="w-full h-full object-cover rounded-full border-4 border-[#0f0c29]"
              priority={true}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="space-y-16">
        {/* Services Header */}
        <div className="text-center animate-fade-in">
          <div className="flex items-center gap-2 text-[#a29bfe] font-semibold text-base md:text-lg mb-2">
            <FaRegStar className="text-[#fd79a8] animate-pulse" />
            <span className="tracking-wide uppercase">What I Offer</span>
            <FaRegStar className="text-[#00cec9] animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-2">
            <span className="bg-gradient-to-r from-[#a29bfe] via-[#fd79a8] to-[#00cec9] text-transparent bg-clip-text">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-2">
            Crafting digital experiences that transcend expectations and deliver unparalleled results
          </p>
          <span className="block h-1 w-28 animated-underline rounded-full mt-2 mb-2" />
        </div>

        {/* Frontend Development Service */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 animate-slide-in-left">
          {/* Left - Content */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#6c5ce7] to-[#00cec9] rounded-full flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-3xl font-bold text-[#a29bfe]">Frontend Excellence</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              I transform ideas into breathtaking digital interfaces that captivate and engage. With cutting-edge technologies like React, Next.js, and modern CSS frameworks, I craft responsive, lightning-fast applications that provide seamless user experiences across all devices.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00cec9] rounded-full"></span>
                <span className="text-gray-300">Pixel-perfect responsive designs</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00cec9] rounded-full"></span>
                <span className="text-gray-300">Optimized performance and accessibility</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00cec9] rounded-full"></span>
                <span className="text-gray-300">Modern animations and micro-interactions</span>
              </div>
            </div>
          </div>

          {/* Right - Frontend Lottie Animation */}
          <div className="flex-1 flex justify-center">
            <div className="w-80 h-80 flex items-center justify-center relative">
              <LottieAnimation 
                animationPath="/animations/frontend.json"
                className="w-full h-full animate-float"
              />
            </div>
          </div>
        </div>

        {/* Backend & API Development Service */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16 animate-slide-in-right">
          {/* Right - Content */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#fd79a8] to-[#6c5ce7] rounded-full flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-3xl font-bold text-[#fd79a8]">Backend & API Mastery</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Building robust, scalable backend systems that power your applications with lightning-fast performance. From RESTful APIs to GraphQL endpoints, I architect solutions that handle complex data operations, ensure security, and provide seamless integration capabilities.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#fd79a8] rounded-full"></span>
                <span className="text-gray-300">Scalable server architecture</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#fd79a8] rounded-full"></span>
                <span className="text-gray-300">Secure API development & authentication</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#fd79a8] rounded-full"></span>
                <span className="text-gray-300">Database optimization & data modeling</span>
              </div>
            </div>
          </div>

          {/* Left - Backend Lottie Animation */}
          <div className="flex-1 flex justify-center">
            <div className="w-80 h-80 flex items-center justify-center relative">
              <LottieAnimation 
                animationPath="/animations/backend.json"
                className="w-full h-full animate-float"
              />
            </div>
          </div>
        </div>

        {/* UI/UX Design Service */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 animate-slide-in-left">
          {/* Left - Content */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#00cec9] to-[#fd79a8] rounded-full flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-3xl font-bold text-[#00cec9]">UI/UX Design Innovation</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Creating intuitive, user-centered designs that not only look stunning but also provide exceptional user experiences. I blend creativity with functionality, ensuring every interaction feels natural and every visual element serves a purpose.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00cec9] rounded-full"></span>
                <span className="text-gray-300">User-centered design thinking</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00cec9] rounded-full"></span>
                <span className="text-gray-300">Interactive prototypes & wireframes</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00cec9] rounded-full"></span>
                <span className="text-gray-300">Brand consistency & visual identity</span>
              </div>
            </div>
          </div>

          {/* Right - UI/UX Lottie Animation */}
          <div className="flex-1 flex justify-center">
            <div className="w-80 h-80 flex items-center justify-center relative">
              <LottieAnimation 
                animationPath="/animations/uiux.json"
                className="w-full h-full animate-float"
              />
            </div>
          </div>
        </div>

        {/* DevOps & Deployment Service */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16 animate-slide-in-right">
          {/* Right - Content */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#ffa500] to-[#6c5ce7] rounded-full flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-3xl font-bold text-[#ffa500]">DevOps & Deployment</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Ensuring your applications are deployed seamlessly and run flawlessly in production. From CI/CD pipelines to cloud infrastructure management, I handle the entire deployment lifecycle to guarantee optimal performance and reliability.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#ffa500] rounded-full"></span>
                <span className="text-gray-300">Automated CI/CD pipelines</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#ffa500] rounded-full"></span>
                <span className="text-gray-300">Cloud infrastructure management</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#ffa500] rounded-full"></span>
                <span className="text-gray-300">Performance monitoring & optimization</span>
              </div>
            </div>
          </div>

          {/* Left - DevOps Lottie Animation */}
          <div className="flex-1 flex justify-center">
            <div className="w-80 h-80 flex items-center justify-center relative">
              <LottieAnimation 
                animationPath="/animations/Cloud.json"
                className="w-full h-full animate-float"
              />
            </div>
          </div>
        </div>

        {/* SEO Optimization & Static Generation Service */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 animate-slide-in-left">
          {/* Left - Content */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#00b894] to-[#6c5ce7] rounded-full flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-3xl font-bold text-[#00b894]">SEO & Static Generation Mastery</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Dominating search engine rankings through next-level SEO strategies and lightning-fast static generation. I architect websites that achieve 100/100 Lighthouse scores, pre-render content at build time, and deliver instant page loads that search engines love. Your digital presence will soar to the top of search results with my performance-first approach.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00b894] rounded-full"></span>
                <span className="text-gray-300">Static site generation & pre-rendering</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00b894] rounded-full"></span>
                <span className="text-gray-300">100/100 Lighthouse performance scores</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00b894] rounded-full"></span>
                <span className="text-gray-300">Advanced meta tags & structured data</span>
              </div>
            </div>
          </div>

          {/* Right - SEO Lottie Animation */}
          <div className="flex-1 flex justify-center">
            <div className="w-80 h-80 flex items-center justify-center relative">
              <LottieAnimation 
                animationPath="/animations/seo.json"
                className="w-full h-full animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="space-y-16">
        {/* About Header */}
        <div className="text-center animate-fade-in">
          <div className="flex items-center justify-center gap-2 text-[#a29bfe] font-semibold text-base md:text-lg mb-2">
            <FaRegStar className="text-[#fd79a8] animate-pulse" />
            <span className="tracking-wide uppercase">Get to know me</span>
            <FaRegStar className="text-[#00cec9] animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-2">
            About <span className="bg-gradient-to-r from-[#a29bfe] via-[#fd79a8] to-[#00cec9] text-transparent bg-clip-text">Me</span>
          </h2>
          <span className="block h-1 w-28 animated-underline rounded-full mt-2 mb-2 mx-auto" />
        </div>

        {/* Main Content Row */}
        <div className="flex flex-col gap-10 md:gap-16">
          {/* Top Row: Animation and Main Card (side by side) */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            {/* Left: Lottie Animation */}
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-md">
                <AboutAnimationWrapper />
              </div>
            </div>
            
            {/* Right: Main Card */}
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-lg">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10 flex flex-col justify-between relative overflow-hidden transition-transform duration-300 hover:scale-[1.015] hover:shadow-[0_8px_32px_#6c5ce7aa]">
                  <div>
                    <h3 className="text-lg font-semibold text-[#a29bfe] mb-2 flex items-center gap-2">
                      <span className="animate-pulse">•</span> {aboutTitle}
                    </h3>
                    <p className="mb-6 text-gray-200 leading-relaxed">
                      {aboutSummary}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {aboutTags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-white/10 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold border border-[#333] shadow shadow-[#6c5ce7]/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00cec9] hover:bg-[#6c5ce7]/20 hover:scale-105"
                          tabIndex={0}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <button 
                      onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}
                      className="bg-gradient-to-r from-[#6c5ce7] to-[#00cec9] px-6 py-2 rounded-full font-semibold shadow-md hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00cec9]"
                    >
                      Get In Touch
                    </button>
                    <Link href="#" className="border border-[#6c5ce7] px-6 py-2 rounded-full font-semibold hover:bg-[#1e1e40] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#a29bfe]">
                      Download CV
                    </Link>
                  </div>
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 pointer-events-none rounded-2xl" style={{background: 'linear-gradient(120deg,rgba(162,155,254,0.08) 0%,rgba(0,206,201,0.06) 100%)', zIndex: 0}} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Row: Horizontal Cards (under animation, left side) */}
          <div className="flex justify-start">
            <div className="w-full max-w-lg flex flex-col gap-6">
              {aboutHighlights.map((highlight, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl hover:scale-[1.025] transition-transform duration-200 relative overflow-hidden group">
                  <div className="flex-shrink-0">
                    {iconMap[highlight.icon] || <FaCode className="text-2xl text-[#a29bfe]" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-white group-hover:text-[#00cec9] transition-colors duration-200">{highlight.title}</h3>
                    <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-200">{highlight.description}</p>
                  </div>
                  {/* Card glass overlay */}
                  <div className="absolute inset-0 pointer-events-none rounded-2xl" style={{background: 'linear-gradient(120deg,rgba(253,121,168,0.07) 0%,rgba(0,206,201,0.05) 100%)', zIndex: 0}} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills-section" className="space-y-16">
        {/* Skills Header */}
        <div className="text-center animate-fade-in">
          <div className="flex items-center justify-center gap-2 text-[#a29bfe] font-semibold text-base md:text-lg mb-2">
            <FaRegStar className="text-[#fd79a8] animate-pulse" />
            <span className="tracking-wide uppercase">Technical Expertise</span>
            <FaRegStar className="text-[#00cec9] animate-pulse" />
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-2">
            <span className="bg-gradient-to-r from-[#a29bfe] via-[#fd79a8] to-[#00cec9] text-transparent bg-clip-text">My Skills</span>
          </h2>
          <span className="block h-1 w-28 animated-underline rounded-full mt-2 mb-2 mx-auto" />
        </div>
        
        <div className="w-full">
          <SkillsFilter skills={member.skills} categories={categories} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="space-y-16">
        {/* Projects Header */}
        <div className="text-center animate-fade-in">
          <div className="flex items-center justify-center gap-2 text-[#a29bfe] font-semibold text-base md:text-lg mb-2">
            <FaRegStar className="text-[#fd79a8] animate-pulse" />
            <span className="tracking-wide uppercase">My Work</span>
            <FaRegStar className="text-[#00cec9] animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-2">
            <span className="bg-gradient-to-r from-[#a29bfe] via-[#fd79a8] to-[#00cec9] text-transparent bg-clip-text">
              {member.name.split(' ')[0]}'s Projects
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl text-center text-gray-300 mt-2 mx-auto">
            <span className="text-[#a29bfe]">Explore</span> {member.name.split(' ')[0]}'s previous work, technologies, and live demos.
          </p>
          <span className="block h-1 w-28 animated-underline rounded-full mt-2 mb-2 mx-auto" />
        </div>
        
        {/* Projects Layout: Alternating positions */}
        <div className="flex flex-col gap-8 md:gap-12">
          {projects.length === 0 ? (
            <div className="text-center text-gray-400 text-lg">No projects found for this member.</div>
          ) : (
            projects.map((project, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                {/* First project: Card left, Animation right */}
                {/* Second project: Animation left, Card right */}
                {index === 0 ? (
                  <>
                    {/* Project Card */}
                    <ProjectCard project={project} index={index} memberSlug={slug} />
                    
                    {/* Lottie Animation */}
                    <div className="flex-1 flex items-center justify-center">
                      <ProjectAnimationWrapper projectIndex={index} />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Lottie Animation (moved down for second project) */}
                    <div className="flex-1 flex items-center justify-center mt-12">
                      <ProjectAnimationWrapper projectIndex={index} />
                    </div>
                    
                    {/* Project Card */}
                    <ProjectCard project={project} index={index} memberSlug={slug} />
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="space-y-16">
        {/* Contact Header */}
        <div className="text-center animate-fade-in">
          <div className="flex items-center justify-center gap-2 text-[#a29bfe] font-semibold text-base md:text-lg mb-2">
            <FaRegStar className="text-[#fd79a8] animate-pulse" />
            <span className="tracking-wide uppercase">Let's Connect</span>
            <FaRegStar className="text-[#00cec9] animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-2" style={{ textShadow: '0 2px 16px #6c5ce7cc, 0 1px 0 #fff' }}>
            Get In <span className="bg-gradient-to-r from-[#a29bfe] via-[#fd79a8] to-[#00cec9] text-transparent bg-clip-text">Touch</span>
          </h2>
          <p className="text-center text-gray-300 max-w-2xl mt-2 mb-4 mx-auto">
            Have a project in mind or want to collaborate? I'm always excited to discuss new opportunities and bring innovative ideas to life. Let's create something amazing together!
          </p>
          <span className="block h-1 w-28 animated-underline rounded-full mt-2 mb-2 mx-auto" />
        </div>

        {/* Main Content Row */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Left: Contact Info Card */}
          <div className="flex-1 flex flex-col">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10 flex flex-col gap-6 transition-transform duration-300 hover:scale-[1.015] hover:shadow-[0_8px_32px_#6c5ce7aa]">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-white">
                <FaRegStar className="text-[#a29bfe]" /> Contact Information
              </h3>
              <div className="flex flex-col gap-4">
                {/* Email */}
                {contact.email && (
                  <div className="flex items-center gap-4 bg-[#18192a] rounded-xl p-4 border border-white/10 shadow hover:shadow-[#a29bfe]/30 transition">
                    <div className="bg-gradient-to-br from-[#a29bfe] to-[#fd79a8] p-3 rounded-lg">
                      <FaEnvelope className="text-2xl text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white">Email</div>
                      <div className="text-gray-300 text-sm">{contact.email}</div>
                    </div>
                  </div>
                )}
                {/* Phone */}
                {contact.phone && (
                  <div className="flex items-center gap-4 bg-[#18192a] rounded-xl p-4 border border-white/10 shadow hover:shadow-[#00cec9]/30 transition">
                    <div className="bg-gradient-to-br from-[#00cec9] to-[#6c5ce7] p-3 rounded-lg">
                      <FaPhone className="text-2xl text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white">Phone</div>
                      <div className="text-gray-300 text-sm">{contact.phone}</div>
                    </div>
                  </div>
                )}
                {/* Location */}
                {contact.location && (
                  <div className="flex items-center gap-4 bg-[#18192a] rounded-xl p-4 border border-white/10 shadow hover:shadow-[#fd79a8]/30 transition">
                    <div className="bg-gradient-to-br from-[#fd79a8] to-[#a29bfe] p-3 rounded-lg">
                      <FaMapMarkerAlt className="text-2xl text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white">Location</div>
                      <div className="text-gray-300 text-sm">{contact.location}</div>
                    </div>
                  </div>
                )}
              </div>
              {/* Social Links */}
              {(contact.github || contact.linkedin || contact.facebook) && (
                <div className="mt-6">
                  <div className="font-semibold text-white mb-2 flex items-center gap-2">
                    <FaRegStar className="text-[#00cec9]" /> Connect With Me
                  </div>
                  <div className="flex gap-4 mt-2">
                    {contact.github && (
                      <a href={contact.github} target="_blank" rel="noopener noreferrer" className="bg-[#23234a] p-3 rounded-lg hover:bg-[#a29bfe] transition" aria-label="GitHub">
                        <FaGithub className="text-xl text-white" />
                      </a>
                    )}
                    {contact.linkedin && (
                      <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="bg-[#23234a] p-3 rounded-lg hover:bg-[#00cec9] transition" aria-label="LinkedIn">
                        <FaLinkedin className="text-xl text-white" />
                      </a>
                    )}
                    {contact.facebook && (
                      <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="bg-[#23234a] p-3 rounded-lg hover:bg-[#fd79a8] transition" aria-label="Facebook">
                        <FaFacebook className="text-xl text-white" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Right: Send a Message Card */}
          <div className="flex-1 flex flex-col">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10 flex flex-col gap-6 transition-transform duration-300 hover:scale-[1.015] hover:shadow-[0_8px_32px_#00cec9aa]">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-white">
                Send a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Animated underline style */}
      <style>{`
        .animated-underline {
          background: linear-gradient(90deg, #a29bfe, #fd79a8, #00cec9, #a29bfe);
          background-size: 200% 200%;
          animation: gradient-move 3s linear infinite;
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
} 