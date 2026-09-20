import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  bullets?: string[];
  tech: string[];
  links: { github?: string; live?: string; apk?: string };
  stats?: string;
  image?: string;
  imageFit?: string; // 'object-cover' | 'object-contain'
  gallery?: string[]; // Array of image paths for the modal gallery
}

const ProjectCard = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="group relative border-b border-white/10 py-12 md:py-20 cursor-pointer transition-colors duration-300 hover:bg-white/[0.015] px-4 md:px-6 rounded-2xl"
    >
      <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Text Section */}
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-brand-main uppercase tracking-widest bg-brand-main/10 px-3 py-1 rounded-full border border-brand-main/20">
              {project.category}
            </span>
            {project.stats && (
              <span className="text-xs font-mono text-secondary">
                {project.stats}
              </span>
            )}
          </div>

          <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 group-hover:text-brand-main transition-colors duration-300">
            {project.title}
            <span className="text-brand-main">.</span>
          </h3>

          <p className="text-base md:text-lg text-secondary font-light max-w-2xl leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t: string) => (
              <span key={t} className="text-xs font-mono text-brand-light/70 bg-white/5 px-2.5 py-1 rounded border border-white/5">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-brand-light group-hover:text-white transition-colors">
            <span className="text-sm font-mono uppercase tracking-wider">View Project Architecture</span>
            <ArrowUpRight className="w-4 h-4 text-brand-main group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>

        {/* Project Preview Image */}
        <div className="lg:col-span-6 hidden lg:block opacity-90 group-hover:opacity-100 transition-all duration-300">
          <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[16/10] bg-surface/90 shadow-2xl group-hover:border-brand-main/40 transition-colors">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className={`w-full h-full ${project.imageFit || 'object-cover'} group-hover:scale-102 transition-transform duration-500`}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-white/[0.02]">
                <span className="text-3xl mb-2 opacity-40">⚡</span>
                <span className="font-mono text-xs text-brand-main uppercase tracking-widest">
                  Architecture Specs Available
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const gallery = project.gallery?.length ? project.gallery : project.image ? [project.image] : [];

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (gallery.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (gallery.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-background/90 backdrop-blur-md"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-6xl max-h-[90vh] bg-surface border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Gallery Section */}
        <div className="w-full md:w-7/12 bg-black relative flex items-center justify-center p-4 md:p-8 overflow-hidden h-[40vh] md:h-auto">
          {gallery.length > 0 ? (
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode='wait'>
                <motion.img
                  key={currentImageIndex}
                  src={gallery[currentImageIndex]}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  alt={`${project.title} view ${currentImageIndex + 1}`}
                  className={`max-w-full max-h-full ${project.imageFit || 'object-contain'} shadow-lg rounded-md`}
                />
              </AnimatePresence>

              {gallery.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-2 p-2 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button onClick={nextImage} className="absolute right-2 p-2 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {gallery.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-brand-main' : 'bg-white/30'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-white/30">
              <span className="text-4xl mb-2">⚡</span>
              <span className="font-mono text-sm uppercase tracking-widest text-center">Engineered Architecture</span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="w-full md:w-5/12 p-8 md:p-12 overflow-y-auto bg-surface">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-brand-main uppercase tracking-widest px-2 py-1 bg-brand-main/10 rounded border border-brand-main/20">
                {project.category}
              </span>
              {project.stats && (
                <span className="text-xs font-mono text-secondary/60">
                  {project.stats}
                </span>
              )}
            </div>
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              {project.title}
            </h2>
            <p className="text-secondary leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Resume Bullets / Key Highlights */}
            {project.bullets && project.bullets.length > 0 && (
              <div className="mb-6 pt-4 border-t border-white/5">
                <h5 className="text-xs font-mono text-brand-muted uppercase tracking-widest mb-3">Key Highlights</h5>
                <ul className="space-y-2.5">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-secondary/80 text-sm font-light flex items-start gap-2.5 leading-relaxed">
                      <span className="text-brand-main mt-1 text-xs select-none">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mb-8">
            <h4 className="text-sm font-mono text-white/50 uppercase tracking-widest mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-brand-light border border-white/5">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-auto">
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-4 bg-brand-main text-background font-medium rounded hover:bg-brand-light transition-colors">
                <span>Live Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            {project.links.apk && (
              <a href={project.links.apk} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-4 bg-brand-main text-background font-medium rounded hover:bg-brand-light transition-colors">
                <span>Download APK</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-4 bg-white/5 text-white font-medium rounded hover:bg-white/10 transition-colors border border-white/10">
                <span>View Source Code</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'GestureApp',
      category: 'Android Accessibility & Automation',
      description:
        'A Flutter + native Kotlin application for system-level gesture automation using accessibility services, foreground services, overlays, and background execution with responsive gesture recognition.',
      bullets: [
        'Built a Flutter + native Kotlin application for system-level gesture automation using accessibility services, foreground services, overlays, and background execution, with gesture recognition optimized for responsive interaction.',
        'Implemented a 1-Dollar Unistroke Recognizer achieving 95%+ accuracy with sub-10ms latency; added Hive offline storage and a Laravel admin panel.'
      ],
      tech: ['Flutter', 'Native Kotlin', 'Android Accessibility', '1$ Unistroke', 'Hive', 'Laravel'],
      links: {
        github: 'https://github.com/anuragged/GestureApp',
        apk: 'https://github.com/anuragged/GestureApp/releases'
      },
      stats: '95%+ Acc • <10ms',
    },
    {
      title: 'DocTalk AI',
      category: 'Grounded Document Intelligence',
      description:
        'A high-performance RAG platform built using Django and pgvector for grounded question answering across 5 document formats, utilizing context-aware vector retrieval.',
      bullets: [
        'Built a RAG platform using Django and pgvector for grounded question answering across 5 document formats, with vector search for context-aware retrieval.',
        'Reduced retrieval and inference costs by approximately 40% by optimizing document chunking and embedding pipelines.'
      ],
      tech: ['Django', 'pgvector', 'Python', 'RAG', 'Vector Search', 'Embeddings'],
      links: {
        github: 'https://github.com/anuragged/doc-talk-ai.git',
        live: 'https://github.com/anuragged/doc-talk-ai.git'
      },
      stats: '-40% Costs • 5 Formats',
      image: '/Images/doc-talk-1.png',
      imageFit: 'object-contain',
      gallery: ['/Images/doc-talk-1.png', '/Images/doc-talk-2.png'],
    },
    {
      title: 'SecureFit',
      category: 'Health Tech & Security',
      description:
        'Enterprise healthcare and fitness application serving 10,000+ users. Optimized APIs to sub-200ms latency using AES encryption for secure handling of sensitive healthcare information.',
      bullets: [
        'Developed backend and frontend components for SecureFit, aimed at serving 10,000+ users, and optimized APIs to sub-200ms latency using AES encryption for secure handling of sensitive healthcare information.',
        'Integrated Gemini AI for rapid intelligent health insights with <2s response times, recognized by Care Health Insurance.'
      ],
      tech: ['React', 'Node.js', 'Firebase', 'AES Encryption', 'Gemini AI', 'REST APIs'],
      links: {
        github: 'https://github.com/anuragged/SecureFIt.git',
        live: 'https://securefitdemo.netlify.app/',
      },
      stats: '10k+ Users • <200ms',
      image: '/Images/secure-fit.png',
      imageFit: 'object-contain',
      gallery: ['/Images/secure-fit.png'],
    },
    {
      title: 'Invoice QC',
      category: 'Automation Service',
      description:
        'Automated Invoice Quality Control Service designed to process and validate invoices. Uses OCR and PDF processing to extract key data points, validating against predefined rules to ensure compliance and accuracy.',
      tech: ['Python', 'Docker', 'OCR', 'PDF Processing'],
      links: { github: 'https://github.com/anuragged/Invoice-QC-Service' },
    },
    {
      title: 'CS Messaging',
      category: 'Web App',
      description:
        'High-performance Customer Support Messaging Application. Features real-time multi-agent chat, urgency prioritization, canned replies, and robust search capabilities, enabling efficient handling of high message volumes.',
      tech: ['React', 'Node.js', 'REST API'],
      links: { github: 'https://github.com/anuragged/CS-Messaging-App' },
      stats: 'Multi-Agent',
    },
    {
      title: 'LinkRow',
      category: 'SaaS Platform',
      description:
        'SMB Digitalisation Platform targeting 10M+ Indian businesses. Authored 60%+ of the business model and engineering architecture.',
      tech: ['Node.js', 'React', 'Firebase'],
      links: {
        github: 'https://github.com/anuragged/linkrow-smart-shops-grow.git',
      },
    },
  ];

  return (
    <section id="portfolio" className="bg-background py-32 relative">
      <div className="container-luxury">
        <div className="mb-24">
          <span className="text-xs font-mono text-secondary uppercase tracking-widest border-b border-subtle pb-2 block w-fit">
            03 / Selected Works
          </span>
        </div>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              project={p}
              onClick={() => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;