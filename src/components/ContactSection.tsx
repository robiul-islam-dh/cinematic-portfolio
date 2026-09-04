import { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );
    window.location.href = `mailto:monikahosssain25@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="contact" className="relative w-full overflow-hidden bg-black px-6 pb-16 pt-16 text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black sm:px-12 lg:px-20">
      <div className="pointer-events-none absolute bottom-[-12rem] left-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[#8C6D4F]/5 blur-[160px]" />
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-5 flex items-center space-x-4">
                <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#D4AF37]">05 / CONTACT</span>
                <div className="h-px w-16 bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-8">
                <h2 className="select-none text-5xl uppercase leading-[0.85] tracking-tight sm:text-6xl md:text-7xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  <span className="block bg-gradient-to-b from-white via-[#D5CBC0] to-[#605448] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">INITIALIZE</span>
                  <span className="block bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] bg-clip-text text-transparent drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">TRANSMISSION.</span>
                </h2>
              </motion.div>

              <p className="max-w-md text-xs font-light leading-relaxed text-[#A8988B] sm:text-[13px]">
                Open to backend engineering, financial software, research collaboration, and software-engineering opportunities. Use the terminal form or contact me directly.
              </p>

              <div className="mt-8 space-y-3 text-[11px] tracking-[0.08em]">
                <a href="mailto:monikahosssain25@gmail.com" className="group flex items-center justify-between border-b border-[#8C6D4F]/25 py-3 text-[#D8C8B9] transition-colors hover:text-[#F7E7C4]">
                  <span><span className="mr-3 font-mono text-[9px] text-[#8C6D4F]">EMAIL //</span> monikahosssain25@gmail.com</span><span className="text-[#D4AF37]">↗</span>
                </a>
                <a href="https://www.linkedin.com/in/monika-hossain-19550a24a" target="_blank" rel="noreferrer" className="group flex items-center justify-between border-b border-[#8C6D4F]/25 py-3 text-[#D8C8B9] transition-colors hover:text-[#F7E7C4]">
                  <span><span className="mr-3 font-mono text-[9px] text-[#8C6D4F]">LINKEDIN //</span> monika-hossain-19550a24a</span><span className="text-[#D4AF37]">↗</span>
                </a>
                <div className="flex items-center justify-between border-b border-[#8C6D4F]/25 py-3 text-[#D8C8B9]">
                  <span><span className="mr-3 font-mono text-[9px] text-[#8C6D4F]">BASE //</span> Dhaka, Bangladesh</span><span className="text-[#D4AF37]">●</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative w-full overflow-hidden rounded-sm border border-[#8C6D4F]/40 bg-[#0A0806] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.9)] lg:col-span-7 sm:p-10">
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
            <div className="absolute left-0 top-0 h-3 w-3 border-l border-t border-[#D4AF37]/60" />
            <div className="absolute right-0 top-0 h-3 w-3 border-r border-t border-[#D4AF37]/60" />
            <div className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-[#D4AF37]/60" />
            <div className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-[#D4AF37]/60" />

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label>
                  <span className="mb-2 block font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#8C6D4F]">// SENDER</span>
                  <input type="text" required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} placeholder="Enter name" className="w-full rounded-sm border border-[#8C6D4F]/30 bg-[#120F0C] px-4 py-3 text-xs text-white outline-none transition-colors placeholder:text-[#8C6D4F]/50 focus:border-[#D4AF37]" />
                </label>
                <label>
                  <span className="mb-2 block font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#8C6D4F]">// CHANNEL</span>
                  <input type="email" required value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder="Enter email" className="w-full rounded-sm border border-[#8C6D4F]/30 bg-[#120F0C] px-4 py-3 text-xs text-white outline-none transition-colors placeholder:text-[#8C6D4F]/50 focus:border-[#D4AF37]" />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#8C6D4F]">// PAYLOAD</span>
                <textarea required rows={5} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder="Enter transmission payload..." className="w-full resize-none rounded-sm border border-[#8C6D4F]/30 bg-[#120F0C] p-4 text-xs text-white outline-none transition-colors placeholder:text-[#8C6D4F]/50 focus:border-[#D4AF37]" />
              </label>

              <button type="submit" className="w-full border border-[#8C6D4F]/50 bg-[#14100D] py-3.5 text-xs font-medium uppercase tracking-[0.25em] text-[#E8DFD8] shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#1A1510] hover:text-[#F7E7C4]">
                OPEN EMAIL CLIENT ↗
              </button>
              <p className="text-center font-mono text-[8px] uppercase tracking-[0.14em] text-[#685748]">No backend required — suitable for GitHub Pages.</p>
            </form>
          </motion.div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#8C6D4F]/15 pt-16 text-center sm:flex-row sm:text-left">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#8C6D4F]">MONIKA HOSSAIN // PORTFOLIO EDITION 2026</span>
          <span className="font-mono text-[10px] text-[#8C6D4F]">© {new Date().getFullYear()} • ENGINEERED WITH PRECISION</span>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
