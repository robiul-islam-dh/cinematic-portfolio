import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const bentoCategories = [
  {
    title: '.NET FINANCIAL ENGINEERING',
    badge: 'CORE PILLAR',
    items: ['C#', '.NET Core', 'ASP.NET Core MVC', 'SQL Server', 'Microsoft Playwright'],
    description: 'Backend development for financial portals, internal workflows, financial data operations, feature implementation, system updates, and automated research reporting.',
    stat: 'PRODUCTION',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'FINANCIAL DATA & REPORTING',
    badge: 'MARKET INTELLIGENCE',
    items: ['Market Data', 'PDF Reporting', 'Data Integration', 'Index Performance', 'Turnover', 'Valuation'],
    description: 'Structured reporting workflows spanning market activity, exchange rates, commodities, corporate events, IPO information, and daily financial-news recaps.',
    stat: 'SQL + PDF',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'MACHINE LEARNING & NLP',
    badge: 'RESEARCH TOOLKIT',
    items: ['Python', 'TF-IDF', 'CatBoost', 'TabNet', 'SHAP', 'Classical ML', 'Cross-validation'],
    description: 'Research-oriented model development, preprocessing, feature extraction, validation, comparative evaluation, and explainability for software-engineering problems.',
    stat: 'ML + XAI',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'FINANCE DOMAIN',
    badge: 'BUSINESS CONTEXT',
    items: ['Capital Markets', 'Financial Analysis', 'Technical Analysis', 'Exchange Rates', 'Commodities', 'Corporate Events', 'IPOs'],
    description: 'Domain understanding that connects software implementation with the financial information, market structure, and reporting needs of securities research workflows.',
    stat: 'CAPITAL MARKETS',
    colSpan: 'lg:col-span-5',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative flex w-screen flex-col justify-center overflow-hidden bg-black px-6 pb-24 pt-8 text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black sm:px-12 lg:px-20">
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-[34rem] w-[34rem] rounded-full bg-[#D4AF37]/5 blur-[170px]" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 h-[28rem] w-[28rem] rounded-full bg-[#8C6D4F]/5 blur-[160px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-7 flex items-center space-x-4">
          <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#D4AF37]">03 / TECH MATRIX</span>
          <div className="h-px w-20 bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="mb-10">
          <h2 className="select-none text-5xl uppercase leading-[0.85] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <span className="block bg-gradient-to-b from-white via-[#D5CBC0] to-[#605448] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">ENGINEERING DEPTH.</span>
            <span className="block bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] bg-clip-text text-transparent drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">DOMAIN INTELLIGENCE.</span>
          </h2>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {bentoCategories.map((block) => (
            <motion.div key={block.title} variants={cardVariants} whileHover={{ y: -5, transition: { duration: 0.25 } }} className={`${block.colSpan} group relative cursor-pointer overflow-hidden rounded-sm border border-[#8C6D4F]/35 bg-[#100D0B]/85 p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#D4AF37]/80 hover:shadow-[0_16px_45px_rgba(212,175,55,0.14)] sm:p-9`}>
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute left-0 top-0 h-3 w-3 border-l border-t border-[#D4AF37]/40 transition-colors group-hover:border-[#D4AF37]" />
              <div className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-[#D4AF37]/40 transition-colors group-hover:border-[#D4AF37]" />

              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] transition-colors group-hover:text-[#F3DBB3]">{block.badge}</span>
                <span className="border border-[#8C6D4F]/40 bg-[#17130F] px-2.5 py-0.5 font-mono text-[10px] text-[#C4B5A5] transition-all group-hover:border-[#D4AF37]/50 group-hover:text-white">{block.stat}</span>
              </div>

              <h3 className="mb-3 text-3xl font-normal tracking-wide text-white transition-colors group-hover:text-[#F7E7C4] sm:text-4xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>{block.title}</h3>
              <p className="mb-7 max-w-xl text-xs font-light leading-relaxed text-[#A8988B] transition-colors group-hover:text-[#D5CBC0] sm:text-sm">{block.description}</p>
              <div className="flex flex-wrap gap-2 border-t border-[#8C6D4F]/20 pt-4">
                {block.items.map((tech) => (
                  <span key={tech} className="rounded-sm border border-[#8C6D4F]/35 bg-[#171310] px-3.5 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.13em] text-[#E8D7C5] transition-all duration-300 group-hover:border-[#D4AF37]/50 group-hover:bg-[#1F1914] group-hover:text-white">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 grid gap-3 border border-[#8C6D4F]/25 bg-[#0B0907] p-5 text-[10px] uppercase tracking-[0.14em] text-[#AA9988] md:grid-cols-3">
          <span><strong className="text-[#D4AF37]">CERT //</strong> jQuery for Absolute Beginners: From Beginning to Advanced</span>
          <span><strong className="text-[#D4AF37]">CERT //</strong> Fundamentals of Trading and Technical Analysis</span>
          <span><strong className="text-[#D4AF37]">CERT //</strong> HackerRank C# (Basic)</span>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
