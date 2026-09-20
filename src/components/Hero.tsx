import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 bg-transparent relative overflow-hidden pt-28 pb-16">
      {/* Subtle Hardware-accelerated Ambient Glow */}
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40 gpu-accelerated"
        style={{
          background: 'radial-gradient(circle, rgba(136, 189, 242, 0.15) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 md:space-y-8"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to Opportunities • Product Engineering & AI Systems</span>
          </div>

          <div className="overflow-hidden">
            <h2 className="text-white font-display text-4xl md:text-6xl font-semibold tracking-tight mb-3">
              Anurag Anand<span className="text-brand-main">.</span>
            </h2>
            <div className="flex flex-wrap items-center gap-2 text-brand-light/80 font-mono text-xs md:text-sm uppercase tracking-widest">
              <span>Software Engineer</span>
              <span className="text-brand-main">•</span>
              <span>Product Engineering</span>
              <span className="text-brand-main">•</span>
              <span>Backend & Full Stack</span>
            </div>
          </div>

          <h1 className="text-display-md md:text-display-lg font-bold text-white leading-[0.92] tracking-tighter opacity-95">
            Building<br />
            Scalable<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-light to-brand-main">AI & Systems.</span>
          </h1>

          <div className="max-w-xl mt-6 md:mt-8">
            <p className="text-lg md:text-xl text-brand-muted leading-relaxed font-light">
              Architecting high-concurrency backend pipelines, AI platform features, and production-grade software serving tens of thousands of users.
            </p>
          </div>

          {/* Action CTAs & Social Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#portfolio"
              className="px-6 py-3.5 bg-brand-main text-background font-medium text-sm rounded-lg hover:bg-brand-light transition-all shadow-lg shadow-brand-main/20 flex items-center gap-2"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#experience"
              className="px-6 py-3.5 bg-white/5 border border-white/10 text-white font-medium text-sm rounded-lg hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2"
            >
              <span>View Experience</span>
              <ArrowUpRight className="w-4 h-4 text-brand-main" />
            </a>

            <div className="flex items-center gap-2 ml-1">
              <a
                href="https://github.com/anuragged"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/anurag-anand-b77797269/"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:anuragpandey.aryan@gmail.com"
                className="p-3.5 bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute bottom-12 right-6 md:right-24 hidden md:flex items-center gap-4 pointer-events-none"
      >
        <span className="text-xs font-mono text-secondary/60 uppercase tracking-widest">Scroll</span>
        <div className="h-[1px] w-12 bg-white/10" />
      </motion.div>
    </section>
  );
};

export default Hero;