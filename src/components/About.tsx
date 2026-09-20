import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-36 bg-transparent relative overflow-hidden">
      <div className="container-luxury relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          <div className="lg:w-1/3">
            <span className="text-xs font-mono text-brand-main uppercase tracking-widest border-b border-brand-main/20 pb-2 block w-fit">
              01 / Philosophy
            </span>
          </div>

          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-3xl md:text-5xl font-display font-medium text-white mb-8 leading-tight">
                An engineer who ships <span className="text-brand-main">production-grade systems</span>, scales AI platforms, and obsesses over performance<span className="text-brand-light">.</span>
              </h3>

              <div className="prose prose-lg md:prose-xl prose-invert text-secondary font-light max-w-none space-y-6">
                <p>
                  I am a product-focused software engineer with deep foundations in backend engineering, AI pipelines, and high-concurrency systems. At <strong className="text-white">WeCatchAI</strong>, I architect and ship core features across human review, community voting, and automated payouts for an active base of <strong className="text-white">25,000+ users</strong>.
                </p>
                <p>
                  My engineering sweet spot lies at the intersection of robust backend architecture and scalable product execution, ranging from multi-queue payout engines processing thousands in monthly rewards, to 2-pass AI grammar correction pipelines, to sub-200ms latency APIs secured with AES encryption.
                </p>
              </div>

              {/* Education & Leadership Card */}
              <div className="mt-14 pt-10 border-t border-white/10">
                <span className="text-xs font-mono text-brand-light uppercase tracking-widest mb-4 block">
                  Education & Academic Honors
                </span>

                <div className="glass-card p-6 md:p-8 rounded-2xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-2xl md:text-3xl font-display font-medium text-white">
                        BML Munjal University
                      </h4>
                      <p className="text-brand-light font-mono text-sm mt-1">
                        Bachelor of Technology in Computer Science Engineering
                      </p>
                    </div>
                    <span className="font-mono text-sm text-brand-muted shrink-0">
                      2022 - 2026
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mt-4">
                    <span className="px-3 py-1 bg-brand-main/10 text-brand-main border border-brand-main/20 rounded-full text-xs font-mono">
                      75% Merit Scholarship
                    </span>
                    <span className="px-3 py-1 bg-white/5 text-secondary border border-white/10 rounded-full text-xs font-mono">
                      Head of Design
                    </span>
                    <span className="text-xs font-mono text-secondary/80">
                      Led creative teams for TEDx, Hult Prize & BMUMUN
                    </span>
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

export default About;
