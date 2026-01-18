import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8 }}
      className="group relative border-b border-white/10 py-16 md:py-24"
    >
      {/* Hover Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/20 to-brand-muted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl" />

      <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-mono text-brand-main uppercase tracking-widest bg-brand-main/10 px-3 py-1 rounded-full border border-brand-main/20">
              {project.category}
            </span>
            {project.stats && (
              <span className="text-sm font-mono text-secondary">
                {project.stats}
              </span>
            )}
          </div>

          <h3 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-light transition-all duration-300">
            {project.title}<span className="text-brand-main hidden group-hover:inline">.</span>
          </h3>

          <p className="text-xl text-secondary font-light max-w-2xl leading-relaxed mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
            {project.tech.map((t: string) => (
              <span key={t} className="text-sm font-mono text-secondary/60">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6">
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-brand-main transition-colors group/link">
                <span className="text-lg font-medium">View Code</span>
                <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            )}
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-brand-main transition-colors group/link">
                <span className="text-lg font-medium">Live Demo</span>
                <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            )}
          </div>
        </div>

        {/* Project Preview Image */}
        <div className="lg:col-span-4 hidden lg:block opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
          <div className="relative rounded-lg overflow-hidden border border-white/10 aspect-[4/3] bg-surface">
            <div className="absolute inset-0 bg-brand-main/10 animate-pulse" />
            {/* Replace src with your actual project screenshots */}
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-dark/20 to-brand-main/20">
                <span className="font-mono text-xs text-brand-main uppercase tracking-widest">Preview Coming Soon</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'SecureFit',
      category: 'Health Tech',
      description: 'AI-Integrated Fitness Platform serving 10,000+ concurrent users. Implemented AES-encrypted authentication and <2s Gemini AI responses. Recognized by Care Insurance.',
      tech: ['React', 'Firebase', 'Gemini AI', 'AES'],
      links: { github: 'https://github.com/anuragged/SecureFIt.git', live: 'https://securefitdemo.netlify.app/' },
      stats: '10k+ Users',
      image: '/projects/securefit-preview.png' // Add your image to public/projects/
    },
    {
      title: 'Doc-Talk-AI',
      category: 'AI / RAG',
      description: 'Grounded document assistant supporting 5+ formats. Reduced information retrieval time by 95% using context-aware top-5 grounded responses.',
      tech: ['Django', 'Python', 'LangChain', 'pgvector'],
      links: { github: 'https://github.com/anuragged/doc-talk-ai.git' },
      stats: '<200ms Latency',
      image: '/projects/doctalk-preview.png'
    },
    {
      title: 'SecureBank',
      category: 'Security Lab',
      description: 'Banking & Forensics Security Lab simulating 12+ OWASP vulnerabilities. Automated forensic analysis of 500MB logs in under 30 seconds.',
      tech: ['React', 'Node.js', 'Python'],
      links: { github: 'https://github.com/anuragged/SecureBank-VulnerabilityTest.git' },
      image: '/projects/securebank-preview.png'
    },
    {
      title: 'LinkRow',
      category: 'SaaS Platform',
      description: 'SMB Digitalisation Platform targeting 10M+ Indian businesses. Authored 60%+ of the business model and engineering architecture.',
      tech: ['Node.js', 'React', 'Firebase'],
      links: { github: 'https://github.com/anuragged/linkrow-smart-shops-grow.git' },
      image: '/projects/linkrow-preview.png'
    }
  ];

  return (
    <section id="portfolio" className="bg-background py-32">
      <div className="container-luxury">
        <div className="mb-24">
          <span className="text-xs font-mono text-secondary uppercase tracking-widest border-b border-subtle pb-2 block w-fit">
            03 / Selected Works
          </span>
        </div>

        <div>
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;