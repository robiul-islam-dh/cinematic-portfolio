import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface RouteStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
}

const journey: RouteStop[] = [
  {
    id: '01',
    year: 'AUG 2023 — PRESENT',
    title: 'OFFICER / .NET FINANCIAL SOFTWARE',
    organization: 'LANKABANGLA SECURITIES LIMITED',
    description: 'Develop and maintain ASP.NET Core MVC and SQL Server workflows for the Daily News Recap and financial reporting portal, while supporting Lankabd.com with feature implementation, database operations, financial data management, system updates, and data integration.',
  },
  {
    id: '02',
    year: 'FEB 2025 — PRESENT',
    title: 'MSc IN COMPUTER SCIENCE',
    organization: 'AMERICAN INTERNATIONAL UNIVERSITY-BANGLADESH',
    description: 'Pursuing a Software Engineering focus while conducting research across software quality, machine learning, NLP, explainable AI, LLM safety, and requirements engineering.',
  },
  {
    id: '03',
    year: 'NOV 2022 — MAY 2023',
    title: 'HUMAN RESOURCES ADMINISTRATIVE SPECIALIST',
    organization: 'PRASHAD SHALILKUL / AL-JESOUR RESORT LTD.',
    description: 'Maintained employee records and supported benefits, salary processing, recruitment, interviews, onboarding, and new-hire documentation.',
  },
  {
    id: '04',
    year: 'MAY 2022 — AUG 2022',
    title: 'INTERN',
    organization: 'EXPORT IMPORT BANK OF BANGLADESH PLC.',
    description: 'Assisted with account opening, foreign exchange operations, customer requests, checkbook services, and client support in a banking environment.',
  },
  {
    id: '05',
    year: '2017 — 2021',
    title: 'BSc / COMPUTER SCIENCE & ENGINEERING',
    organization: 'EAST WEST UNIVERSITY',
    description: 'Completed undergraduate studies in Computer Science and Engineering, building the technical foundation for backend software development and later software-engineering research.',
  },
];

export const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 70%', 'end 90%'] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" ref={containerRef} className="relative w-full overflow-hidden bg-black px-6 pb-24 pt-4 text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black sm:px-12 lg:px-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.03] blur-[150px]" />

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-7 flex items-center space-x-4">
          <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#D4AF37]">04 / EXPERIENCE</span>
          <div className="h-px w-20 bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="mb-16">
          <h2 className="select-none text-5xl uppercase leading-[0.85] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <span className="block bg-gradient-to-b from-white via-[#D5CBC0] to-[#605448] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">EXPERIENCE &amp;</span>
            <span className="block bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] bg-clip-text text-transparent drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">ACADEMIC ROUTE.</span>
          </h2>
        </motion.div>

        <div className="relative w-full">
          <div className="absolute bottom-8 left-[19px] top-4 w-px bg-[#8C6D4F]/20 md:left-[140px]" />
          <motion.div style={{ height: lineHeight }} className="absolute left-[19px] top-4 w-[2px] origin-top bg-gradient-to-b from-[#D4AF37] via-[#C99E5D] to-[#8C6D4F]/10 shadow-[0_0_10px_#D4AF37] md:left-[140px]" />

          <div className="space-y-12">
            {journey.map((stop, index) => (
              <motion.div key={stop.id} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.7, delay: index * 0.08 }} className="group relative flex flex-col items-start md:flex-row">
                <div className="hidden w-[140px] shrink-0 pr-8 pt-0.5 text-right md:block">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-[#8C6D4F] transition-colors group-hover:text-[#D4AF37]">{stop.year}</span>
                </div>

                <div className="absolute left-[19px] top-1.5 flex -translate-x-1/2 items-center justify-center md:left-[140px]">
                  <div className="absolute h-6 w-6 rounded-full border border-[#D4AF37]/0 transition-all duration-700 ease-out group-hover:scale-150 group-hover:border-[#D4AF37]/40" />
                  <div className="h-2.5 w-2.5 rounded-full border border-[#8C6D4F] bg-[#120F0C] transition-colors duration-300 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:shadow-[0_0_12px_#D4AF37]" />
                </div>

                <div className="ml-14 pl-2 md:ml-12">
                  <div className="mb-1.5 md:hidden"><span className="font-mono text-[10px] tracking-[0.18em] text-[#D4AF37]">{stop.year}</span></div>
                  <h3 className="mb-1 text-3xl leading-none tracking-wide text-white transition-colors group-hover:text-[#F7E7C4] sm:text-4xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>{stop.title}</h3>
                  <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.18em] text-[#8C6D4F]">{stop.organization}</span>
                  <p className="max-w-lg text-xs font-light leading-[1.7] text-[#A8988B] transition-colors group-hover:text-[#D5CBC0] sm:text-[13px]">{stop.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
