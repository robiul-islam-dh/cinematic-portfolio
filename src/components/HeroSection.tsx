import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import watermarkImg from '../assets/watermark.png';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.16, delayChildren: 0.2 },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] },
  },
};

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'WORK', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export const HeroSection = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => setCursorPos({ x: event.clientX, y: event.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="top" className="relative h-screen w-screen overflow-hidden bg-black text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black md:cursor-none">
      {cursorPos.x >= 0 && (
        <motion.div
          className="cinematic-cursor pointer-events-none fixed left-0 top-0 z-50 flex items-center justify-center rounded-full border border-[#D4AF37]/40 backdrop-blur-[1px]"
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 5),
            y: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered ? 'rgba(212,175,55,0.10)' : 'rgba(235,215,195,0.95)',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.5 }}
        />
      )}

      <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-end overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="h-screen w-auto max-w-none origin-right scale-95 object-contain opacity-35 grayscale contrast-125 brightness-75 md:scale-[0.98] lg:scale-100"
        >
          <source src={`${base}videos/hero.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-y-0 left-0 w-[72%] bg-gradient-to-r from-black via-black/95 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25" />
        <div className="absolute right-[4%] top-[15%] h-[55%] w-[35%] rounded-full bg-[#D4AF37]/5 blur-[120px]" />

        <div className="absolute bottom-6 right-6 z-10 flex items-center justify-center lg:bottom-10 lg:right-12">
          <div className="relative flex items-center justify-center">
            <div className="absolute h-36 w-36 rounded-full bg-black/85 blur-xl" />
            <motion.div
              animate={{ y: [-3, 3, -3], scale: [1, 1.03, 1] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative flex items-center justify-center"
            >
              <img src={watermarkImg} alt="Code emblem" className="h-28 w-28 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.25)] lg:h-32 lg:w-32" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none relative z-10 flex h-full w-full flex-col justify-between px-6 pb-8 pt-6 sm:px-12 lg:px-16">
        <header className="pointer-events-auto relative flex w-full items-center justify-between">
          <a
            href="#top"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-xs font-semibold uppercase tracking-[0.35em] text-[#EAD8C7] transition-opacity hover:opacity-75 sm:text-sm"
          >
            MONIKA.H
          </a>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center space-x-8 text-[11px] font-light uppercase tracking-[0.28em] text-[#C4B5A5] md:flex lg:space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative py-1 transition-colors duration-300 hover:text-[#FFF5EB]"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#D4AF37]/50 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="mailto:monikahosssain25@gmail.com"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="ml-auto flex items-center space-x-2 border border-[#8C6D4F]/50 px-4 py-2 text-[11px] font-light uppercase tracking-[0.24em] text-[#EAD8C7] backdrop-blur-sm transition-all duration-300 hover:border-[#D4AF37] md:ml-0"
          >
            <span>LET&apos;S TALK</span><span>↗</span>
          </a>
        </header>

        <div className="relative my-auto flex w-full flex-col items-center justify-between pb-2 pt-4 md:flex-row">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="pointer-events-auto z-20 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[41rem] xl:max-w-[44rem]"
          >
            <motion.div variants={fadeUpVariants} className="relative mb-3.5 select-none">
              <h1 className="text-6xl uppercase leading-[0.83] tracking-tight sm:text-7xl md:text-8xl lg:text-[7.1rem] xl:text-[7.7rem]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                <span className="block bg-gradient-to-b from-white via-[#D5CBC0] to-[#605448] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">I BUILD</span>
                <span className="block bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] bg-clip-text text-transparent drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">FINANCIAL</span>
                <span className="block bg-gradient-to-b from-[#DFBE8A] via-[#9B7640] to-[#342410] bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(155,118,64,0.4)]">SYSTEMS</span>
              </h1>
            </motion.div>

            <motion.p variants={fadeUpVariants} className="mb-4 text-[10px] font-normal uppercase tracking-[0.25em] text-[#C4B29E] sm:text-[11px] md:text-xs">
              C# &amp; .NET BACKEND <span className="mx-1 text-[#8C6D4F]">•</span> FINANCIAL AUTOMATION <span className="mx-1 text-[#8C6D4F]">•</span> PYTHON / ML RESEARCH
            </motion.p>

            <motion.div variants={fadeUpVariants} className="mb-6 max-w-xl space-y-1 text-xs font-light leading-[1.8] tracking-wide text-[#A8988B] sm:text-sm md:text-[13.5px]">
              <p>
                I&apos;m Monika Hossain, a financial software developer building ASP.NET Core and SQL Server workflows for market data, reporting, and portal operations.
                <br />
                Alongside production engineering, I research machine learning, NLP, explainable AI, and software quality.
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariants} className="flex flex-row flex-wrap items-center gap-4 sm:gap-6">
              <motion.a
                href="#work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-3 border border-[#8C6D4F] bg-[#120F0C]/80 px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.24em] text-[#EAD8C7] shadow-[0_0_25px_rgba(212,175,55,0.18)] transition-all duration-300 hover:border-[#D4AF37] hover:text-[#FFF5EB] sm:px-7"
              >
                <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#E8D7C5]/40 to-transparent" />
                <span>EXPLORE MY WORK</span><span>↗</span>
              </motion.a>

              <motion.a
                href={`${base}resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-2 border border-[#8C6D4F]/40 px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.24em] text-[#BFA895] transition-all duration-300 hover:border-[#8C6D4F] hover:text-[#EAD8C7] sm:px-7"
              >
                <span>DOWNLOAD PROFILE</span><span>↓</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto z-20 mr-4 hidden select-none flex-col items-start pr-24 lg:flex xl:pr-36"
          >
            <span className="mb-2 font-serif text-xl leading-none text-[#C99E5D]">“</span>
            <div className="mb-3 space-y-1 text-[9.5px] font-medium uppercase tracking-[0.24em] text-[#E0D3C5]">
              <p>FINANCE IS THE DOMAIN.</p>
              <p>SOFTWARE IS THE ENGINE.</p>
            </div>
            <div className="mb-2 h-px w-28 bg-gradient-to-r from-[#D4AF37] via-[#E8D7C5]/70 to-transparent shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
            <div className="-ml-0.5 text-[2.2rem] font-normal leading-none text-[#D8AB64]" style={{ fontFamily: "'Herr Von Muellerhoff', cursive", letterSpacing: '0.04em' }}>
              Monika
            </div>
          </motion.div>
        </div>

        <div className="h-2" />
      </div>
    </section>
  );
};

export default HeroSection;
