import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  url?: string;
  action?: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Daily News Recap & Financial Reporting Portal',
    category: 'FINTECH / BACKEND ENGINEERING',
    description:
      'ASP.NET Core MVC workflow developed for LankaBangla Securities that retrieves financial news and market data from SQL Server, supports review and selection, creates structured market summaries, and generates professional multi-page PDF reports with Microsoft Playwright. The reporting flow brings together index performance, market activity, turnover, valuation, exchange rates, commodities, corporate events, and IPO information.',
    url: 'https://lankabd.com/Research/ResearchReport?category=7&catName=Daily%20News%20Recap',
    action: 'VIEW DAILY NEWS RECAP',
    tech: ['C#', 'ASP.NET Core MVC', 'SQL Server', 'Microsoft Playwright', 'PDF Reporting', 'Financial Data', 'Market Research'],
    metrics: [
      { label: 'DATA SOURCE', value: 'SQL Server' },
      { label: 'OUTPUT', value: 'Multi-page PDF' },
      { label: 'DOMAIN', value: 'Capital Markets' },
    ],
  },
  {
    number: '02',
    title: 'Architecture Quality Prediction Using QMOOD Metrics and Machine Learning Models: CatBoost vs TabNet',
    category: 'RESEARCH / SOFTWARE QUALITY',
    description:
      'Software-engineering research focused on predicting architecture quality from QMOOD metrics and comparing CatBoost with TabNet. The work reflects hands-on experience in data preprocessing, model training, validation, performance evaluation, and explainable machine-learning analysis.',
    tech: ['Python', 'QMOOD', 'CatBoost', 'TabNet', 'Machine Learning', 'Model Evaluation', 'Software Quality'],
    metrics: [
      { label: 'SIGNALS', value: 'QMOOD Metrics' },
      { label: 'MODELS', value: 'CatBoost vs TabNet' },
      { label: 'DOMAIN', value: 'Software Architecture' },
    ],
  },
  {
    number: '03',
    title: 'Operationalizing LLM Safety in Requirements Engineering',
    category: 'RESEARCH / LLM SAFETY',
    description:
      'Research on writing and validating testable safety requirements for large language model systems. The work connects AI safety goals with requirements-engineering practice so safety expectations can be specified, reviewed, and evaluated in a more operational form.',
    tech: ['LLM Safety', 'Requirements Engineering', 'NLP', 'Validation', 'AI Safety', 'Software Engineering'],
    metrics: [
      { label: 'FOCUS', value: 'Testable Safety Requirements' },
      { label: 'SYSTEM', value: 'LLM-based Software' },
      { label: 'METHOD', value: 'Writing + Validation' },
    ],
  },
  {
    number: '04',
    title: 'Cross-Project Bug Severity Prediction Using TF-IDF and Classical Machine Learning Models',
    category: 'RESEARCH / ML FOR SOFTWARE ENGINEERING',
    description:
      'Cross-project bug severity prediction using TF-IDF representations and classical machine-learning models. The workflow covers preprocessing, feature extraction, cross-validation, comparative performance evaluation, and research-oriented analysis for software defect intelligence.',
    tech: ['Python', 'TF-IDF', 'Classical ML', 'Cross-validation', 'Bug Severity', 'NLP', 'Performance Evaluation'],
    metrics: [
      { label: 'FEATURES', value: 'TF-IDF' },
      { label: 'SCOPE', value: 'Cross-Project' },
      { label: 'TASK', value: 'Severity Prediction' },
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="work" className="relative w-full bg-black px-6 pb-32 pt-20 text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black sm:px-12 lg:px-20">
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-[36rem] w-[36rem] rounded-full bg-[#D4AF37]/5 blur-[180px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[30rem] w-[30rem] rounded-full bg-[#8C6D4F]/5 blur-[170px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-5 flex items-center space-x-4">
          <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#D4AF37]">02 / FEATURED WORK</span>
          <div className="h-px w-20 bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="mb-16 flex flex-col justify-between md:flex-row md:items-end">
          <h2 className="select-none text-5xl uppercase leading-[0.85] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <span className="block bg-gradient-to-b from-white via-[#D5CBC0] to-[#605448] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">SELECTED WORKS.</span>
            <span className="block bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] bg-clip-text text-transparent drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">ENGINEERING + RESEARCH.</span>
          </h2>
          <p className="mt-4 max-w-sm text-xs font-light leading-relaxed text-[#A8988B] sm:text-sm md:mt-0">
            Scroll to unfold production financial engineering and research work in software quality, LLM safety, and machine learning for software engineering.
          </p>
        </motion.div>

        <ScrollStack itemDistance={20} itemScale={0.035} itemStackDistance={28} stackPosition="15%" scaleEndPosition="6%" baseScale={0.88} useWindowScroll>
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <article className="group relative w-full overflow-hidden rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 shadow-[0_25px_70px_rgba(0,0,0,0.98)] transition-colors duration-500 hover:border-[#D4AF37] sm:p-12">
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />
                <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-[#D4AF37]/60" />
                <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-[#D4AF37]/60" />
                <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-[#D4AF37]/60" />
                <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-[#D4AF37]/60" />
                <span className="pointer-events-none absolute -bottom-6 -right-3 select-none text-8xl font-bold leading-none text-[#EAD8C7]/5 sm:text-9xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>{project.number}</span>

                <div className="relative z-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
                  <div className="flex flex-col justify-between lg:col-span-7">
                    <div>
                      <div className="mb-4 flex items-center space-x-3">
                        <span className="font-mono text-xs font-bold text-[#D4AF37]">{project.number} //</span>
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[#A8988B]">{project.category}</span>
                      </div>
                      <h3 className="mb-4 text-4xl font-normal uppercase leading-[0.9] tracking-tight text-white transition-colors group-hover:text-[#F7E7C4] sm:text-5xl lg:text-6xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>{project.title}</h3>
                      <p className="mb-8 max-w-2xl text-xs font-light leading-[1.85] tracking-wide text-[#BDB0A4] sm:text-sm md:text-[14px]">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 border-t border-[#8C6D4F]/25 pt-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#E8D7C5] transition-all duration-300 group-hover:border-[#D4AF37]/50">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex h-full flex-col lg:col-span-5">
                    <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.22em] text-[#7F6C5A]">// SYSTEM SIGNALS</p>
                    <div className="space-y-3">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="border border-[#8C6D4F]/25 bg-[#090705] p-4">
                          <p className="font-mono text-[8px] tracking-[0.16em] text-[#806D5B]">{metric.label}</p>
                          <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-[#F0DDC7]">{metric.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-6">
                      {project.url ? (
                        <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center border border-[#8C6D4F]/50 bg-[#15110E] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#EAD8C7] transition-all hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black">{project.action} ↗</a>
                      ) : (
                        <div className="flex items-center justify-between border border-[#8C6D4F]/25 bg-[#100D0A] px-4 py-3 font-mono text-[9px] uppercase tracking-[0.17em] text-[#A98E70]">
                          <span>ACADEMIC RESEARCH</span><span className="text-[#D4AF37]">PAPER</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default ProjectsSection;
