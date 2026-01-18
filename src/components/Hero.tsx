import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
      {/* Brand Color Splashes */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-main/20 rounded-full blur-[80px] pointer-events-none mix-blend-screen animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-dark/30 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      {/* Decorative Dots */}
      <div className="absolute top-1/2 left-12 w-3 h-3 bg-brand-light/40 rounded-full hidden md:block" />
      <div className="absolute bottom-1/3 right-24 w-4 h-4 bg-brand-main/60 rounded-full hidden md:block blur-[2px]" />

      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 md:space-y-8"
        >
          <div className="overflow-hidden">
            <h2 className="text-white font-display text-4xl md:text-6xl font-semibold tracking-tight mb-2">
              Anurag Anand<span className="text-brand-main">.</span>
            </h2>
            <span className="text-brand-light/80 font-mono text-sm md:text-base uppercase tracking-widest">
              Software Engineer
            </span>
          </div>

          <h1 className="text-display-md md:text-display-lg font-bold text-white leading-[0.9] tracking-tighter opacity-90">
            Building<br />
            Digital<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-light to-brand-main">Experience.</span>
          </h1>

          <div className="max-w-xl mt-12 md:mt-16">
            <p className="text-lg md:text-xl text-brand-muted leading-relaxed font-light">
              Designing secure, scalable systems with a touch of elegance.
              Backend architecture meets premium frontend engineering.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 right-6 md:right-24 flex items-center gap-4"
      >
        <span className="text-xs font-mono text-subtle uppercase tracking-widest">Scroll</span>
        <div className="h-[1px] w-12 bg-subtle" />
      </motion.div>
    </section>
  );
};

export default Hero;