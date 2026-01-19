import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  links: { github?: string; live?: string };
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.8 }}
      onClick={onClick}
      className="group relative border-b border-white/10 py-16 md:py-24 cursor-pointer"
    >
      {/* Hover Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/20 to-brand-muted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl" />

      <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Text Section - Adjusted to 6 columns for balance */}
        <div className="lg:col-span-6">
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
            {project.title}
            <span className="text-brand-main hidden group-hover:inline">.</span>
          </h3>

          <p className="text-xl text-secondary font-light max-w-2xl leading-relaxed mb-8 line-clamp-3">
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
            <span className="flex items-center gap-2 text-brand-light hover:text-white transition-colors">
              <span className="text-lg font-medium">View Details</span>
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </div>
        </div>

        {/* Project Preview Image - Expanded to 6 columns */}
        <div className="lg:col-span-6 hidden lg:block opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
          <div className="relative rounded-lg overflow-hidden border border-white/10 aspect-[16/10] bg-surface shadow-2xl">
            <div className="absolute inset-0 bg-brand-main/10 animate-pulse" />
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className={`absolute inset-0 w-full h-full ${project.imageFit || 'object-cover'
                  } opacity-90 group-hover:scale-105 transition-transform duration-700`}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-dark/20 to-brand-main/20">
                <span className="font-mono text-xs text-brand-main uppercase tracking-widest">
                  Preview Coming Soon
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
              <span className="text-4xl mb-2">🖼️</span>
              <span className="font-mono text-sm uppercase tracking-widest">No Preview Available</span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="w-full md:w-5/12 p-8 md:p-12 overflow-y-auto bg-surface">
          <div className="mb-8">
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
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              {project.title}
            </h2>
            <p className="text-secondary leading-relaxed mb-8">
              {project.description}
            </p>
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
      title: 'SecureFit',
      category: 'Health Tech',
      description:
        'AI-Integrated Fitness Platform aimed to serve 10,000+ concurrent users. Implemented AES-encrypted authentication and <2s Gemini AI responses. Recognized by Care Insurance.',
      tech: ['React', 'Firebase', 'Gemini AI', 'AES'],
      links: {
        github: 'https://github.com/anuragged/SecureFIt.git',
        live: 'https://securefitdemo.netlify.app/',
      },
      stats: '10k+ Users',
      image: '/Images/secure-fit.png',
      imageFit: 'object-contain',
      gallery: ['/Images/secure-fit.png'], // Add more screenshots here if available
    },
    {
      title: 'Doc-Talk-AI',
      category: 'AI / RAG',
      description:
        'Grounded document assistant supporting 5+ formats. Reduced information retrieval time by 95% using context-aware top-5 grounded responses.',
      tech: ['Django', 'Python', 'LangChain', 'pgvector'],
      links: { github: 'https://github.com/anuragged/doc-talk-ai.git' },
      stats: '<200ms Latency',
      image: '/Images/doc-talk-1.png',
      gallery: ['/Images/doc-talk-2.png'],
    },
    {
      title: 'Invoice QC',
      category: 'Automation Service',
      description:
        'Automated Invoice Quality Control Service designed to process and validate invoices. Uses OCR and PDF processing to extract key data points, validating against predefined rules to ensure compliance and accuracy.',
      tech: ['Python', 'Docker', 'OCR', 'PDF Processing'],
      links: { github: 'https://github.com/anuragged/Invoice-QC-Service' }, // Placeholder link
      imageFit: 'object-contain',
      gallery: [], // Needs images
    },
    {
      title: 'CS Messaging',
      category: 'Web App',
      description:
        'High-performance Customer Support Messaging Application. Features real-time multi-agent chat, urgency prioritization, canned replies, and robust search capabilities, enabling efficient handling of high message volumes.',
      tech: ['React', 'Node.js', 'REST API'],
      links: { github: 'https://github.com/anuragged/CS-Messaging-App' }, // Placeholder link
      stats: 'Multi-Agent',
      imageFit: 'object-contain',
      gallery: [], // Needs images
    },
    {
      title: 'SecureBank',
      category: 'Security Lab',
      description:
        'Banking & Forensics Security Lab simulating 12+ OWASP vulnerabilities. Automated forensic analysis of 500MB logs in under 30 seconds.',
      tech: ['React', 'Node.js', 'Python'],
      links: {
        github: 'https://github.com/anuragged/SecureBank-VulnerabilityTest.git',
      },
      image: '/projects/securebank-preview.png',
      gallery: ['/projects/securebank-preview.png'],
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
      image: '/projects/linkrow-preview.png',
      gallery: ['/projects/linkrow-preview.png'],
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