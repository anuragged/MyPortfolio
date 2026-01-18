import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 md:py-48 bg-background relative overflow-hidden">
      {/* Decorative Splash */}
      <div className="absolute top-0 left-12 w-64 h-64 bg-brand-light/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-luxury relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
          <div className="lg:w-1/3">
            <span className="text-sm font-mono text-brand-main uppercase tracking-widest border-b border-brand-main/20 pb-2 block">
              01 / Philosophy
            </span>
          </div>

          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-4xl md:text-6xl font-display font-medium text-white mb-12 leading-tight">
                An engineer who ships <span className="text-brand-main">production-grade systems</span>, obsesses over performance, and enjoys building products from scratch<span className="text-brand-light">.</span>
              </h3>

              <div className="prose prose-xl prose-invert text-secondary font-light max-w-none space-y-8">
                <p>
                  I am a results-oriented software engineer with strong foundations in backend engineering, secure system design, and full-stack development.
                  I have built and audited systems serving <strong className="text-white">10,000+ users</strong>, implemented <strong className="text-white">AES-secured authentication</strong>, and designed <strong className="text-white">low-latency APIs</strong>.
                </p>
                <p>
                  Beyond engineering, I have led teams in fast-moving environments and built <strong className="text-white">LinkRow</strong>, a platform aimed at digitising 10M+ Indian SMBs.
                  I believe in blending deep technical execution with clear business strategy to create work that matters.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
