import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
};

const profileRows = [
  ['ROLE', 'C# / .NET BACKEND DEVELOPER'],
  ['DOMAIN', 'CAPITAL MARKETS & FINANCIAL DATA'],
  ['STACK', 'ASP.NET CORE MVC / SQL SERVER'],
  ['RESEARCH', 'PYTHON / ML / NLP / XAI'],
];

export const AboutSection = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [13, -13]), { damping: 18, stiffness: 220 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-13, 13]), { damping: 18, stiffness: 220 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsCardHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="about" className="relative flex min-h-screen w-screen items-center overflow-hidden bg-black px-6 py-24 text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black sm:px-12 lg:px-20 lg:py-32">
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="pointer-events-none absolute left-1/6 top-1/4 h-[32rem] w-[32rem] rounded-full bg-[#D4AF37] blur-[160px]" />
      <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.12, 0.05] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} className="pointer-events-none absolute bottom-1/6 right-1/4 h-[28rem] w-[28rem] rounded-full bg-[#8C6D4F] blur-[170px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="mb-10 flex items-center space-x-4">
          <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#D4AF37]">01 / ABOUT ME</span>
          <div className="h-px w-20 bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="flex flex-col justify-center lg:col-span-7">
            <motion.div variants={fadeUpVariants} className="relative mb-6 select-none">
              <h2 className="text-5xl uppercase leading-[0.88] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.4rem]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                <span className="block bg-gradient-to-b from-white via-[#D5CBC0] to-[#605448] bg-clip-text text-transparent drop-shadow-[0_4px_10px_rgba(0,0,0,0.85)]">I DON&apos;T JUST WRITE CODE.</span>
                <span className="block bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] bg-clip-text text-transparent drop-shadow-[0_8px_25px_rgba(201,158,93,0.3)]">I ENGINEER FINANCIAL WORKFLOWS.</span>
              </h2>
            </motion.div>

            <motion.p variants={fadeUpVariants} className="mb-10 max-w-xl text-xs font-light leading-[1.85] tracking-wide text-[#B3A497] sm:text-sm md:text-[14.5px]">
              I&apos;m <span className="font-medium text-[#F3DBB3]">Monika Hossain</span>, a C#/.NET backend developer with more than three years of experience across financial platforms, web applications, data operations, and reporting automation. At LankaBangla Securities, I work with ASP.NET Core MVC and SQL Server on workflows that bring market news, index performance, turnover, valuation, exchange rates, commodities, corporate events, and IPO information into structured daily research reporting. Alongside industry work, I pursue software engineering research in machine learning, NLP, explainable AI, LLM safety, and software quality.
            </motion.p>

            <motion.div variants={fadeUpVariants} className="grid grid-cols-2 gap-6 border-t border-[#8C6D4F]/25 pb-2 pt-6 sm:grid-cols-4">
              {[
                ['3+', 'Years in Industry'],
                ['3', 'Research Papers'],
                ['MSc', 'Software Engineering'],
                ['FIN + AI', 'Core Focus'],
              ].map(([value, label], index) => (
                <div className="flex flex-col" key={label}>
                  <span className={`text-3xl font-light tracking-tight sm:text-4xl ${index % 2 ? 'text-[#D4AF37]' : 'text-[#F4EBE2]'}`} style={{ fontFamily: "'Bebas Neue', sans-serif" }}>{value}</span>
                  <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#A8988B]">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="relative flex items-center justify-center lg:col-span-5 [perspective:1400px]">
            <motion.div animate={{ scale: isCardHovered ? 1.15 : 1, opacity: isCardHovered ? 0.35 : 0.15, rotate: isCardHovered ? 180 : 0 }} transition={{ duration: 3, ease: 'easeOut' }} className="pointer-events-none absolute -inset-6 rounded-3xl bg-[conic-gradient(from_0deg,#D4AF37_0%,#8C6D4F_30%,transparent_60%,#D4AF37_100%)] blur-2xl" />

            <motion.div
              ref={cardRef}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsCardHovered(true)}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative w-full max-w-[410px] cursor-pointer rounded-sm border border-[#8C6D4F]/40 bg-[#120F0C]/90 p-3.5 shadow-[0_25px_70px_rgba(0,0,0,0.95)] backdrop-blur-xl transition-colors duration-500 hover:border-[#D4AF37]/80"
            >
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-sm">
                <motion.div animate={{ x: isCardHovered ? ['-100%', '200%'] : '-100%' }} transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }} className="h-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
              </div>
              <div className="pointer-events-none absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-[#D4AF37]" />
              <div className="pointer-events-none absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-[#D4AF37]" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-[#D4AF37]" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-[#D4AF37]" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-black p-6 sm:p-7">
                <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(212,175,55,.13)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,.10)_1px,transparent_1px)] [background-size:34px_34px]" />
                <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#D4AF37]/10 blur-[80px]" />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-5 flex items-start justify-between border-b border-[#8C6D4F]/30 pb-4">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#8C6D4F]">PROFILE MATRIX</p>
                      <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#F1DFC9]">MONIKA HOSSAIN</p>
                    </div>
                    <motion.span animate={{ opacity: [0.35, 1, 0.35] }} transition={{ duration: 2, repeat: Infinity }} className="mt-1 h-2.5 w-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_16px_rgba(212,175,55,.8)]" />
                  </div>

                  <div className="mb-6 flex items-center justify-center py-3">
                    <motion.div animate={{ boxShadow: isCardHovered ? '0 0 60px rgba(212,175,55,.22)' : '0 0 25px rgba(212,175,55,.08)' }} className="flex h-28 w-28 items-center justify-center rounded-full border border-[#D4AF37]/45 bg-[#0B0907]">
                      <span className="bg-gradient-to-b from-[#FFF4DA] via-[#D4AF37] to-[#6F4E1E] bg-clip-text text-6xl text-transparent" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>MH</span>
                    </motion.div>
                  </div>

                  <div className="space-y-2.5">
                    {profileRows.map(([label, value]) => (
                      <div key={label} className="grid grid-cols-[68px_1fr] gap-3 border border-[#8C6D4F]/20 bg-[#110E0B]/90 px-3 py-2.5">
                        <span className="font-mono text-[8px] tracking-[0.18em] text-[#96775A]">{label}</span>
                        <span className="text-[9px] font-medium tracking-[0.08em] text-[#E7D8C8] sm:text-[10px]">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto border-t border-[#8C6D4F]/25 pt-4">
                    <div className="mb-2 flex justify-between font-mono text-[8px] tracking-[0.15em] text-[#806B55]"><span>ENGINEERING SIGNAL</span><span className="text-[#D4AF37]">ACTIVE</span></div>
                    <svg viewBox="0 0 360 55" className="w-full" aria-hidden="true">
                      <polyline points="0,42 35,36 70,39 105,25 140,29 175,20 210,27 245,15 285,22 325,8 360,13" fill="none" stroke="#D4AF37" strokeWidth="2" />
                      <polyline points="0,50 360,50" fill="none" stroke="#8C6D4F" strokeOpacity=".35" strokeWidth="1" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
