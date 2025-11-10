import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github, Calendar, Code, Target, Trophy, X, ChevronRight, Shield, Cpu, Globe, Brain } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  duration: string;
  technologies: string[];
  overview: string;
  role: string;
  results: string;
  image: string;
  category: string;
  githubUrl?: string;
  liveUrl?: string;
}

const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Cloud-Native Microservices Deployment',
      duration: 'IBM/Coursera Certification',
      technologies: ['Docker', 'Kubernetes', 'OpenShift', 'Node.js', 'Python', 'CI/CD'],
      overview: 'Containerized a multi-tier application using Docker and deployed it with Kubernetes & OpenShift. Built and deployed multiple microservices on serverless infrastructure for scalability. Utilized Git & automation tools for cloud-native deployment and monitoring.',
      role: 'Cloud Native Developer - Designed and implemented containerized applications, automated deployments with CI/CD pipelines, and deployed rolling updates ensuring zero-downtime and cloud resilience.',
      results: 'Successfully containerized multi-tier app with Docker, deployed microservices on serverless infrastructure, and implemented automated cloud-native deployment with Git and CI/CD tools.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'cloud',
      githubUrl: 'https://github.com/anuragged'
    },
    {
      id: 2,
      title: 'Independent Security Audit: Helios E-Voting Platform',
      duration: 'Security Research Project',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Burp Suite', 'Threat Modeling'],
      overview: 'Restored and deployed a legacy Python web application, resolving 15+ critical dependency conflicts. Designed and implemented detailed threat model and risk assessment plan. Discovered 15+ vulnerabilities including logic flaws, improper authentication, and injection vectors.',
      role: 'Security Researcher & Auditor - Engineered stable build using isolated Python virtual environment, conducted comprehensive threat modeling and vulnerability assessment, authored detailed remediation reports.',
      results: 'Successfully resolved 15+ critical dependency conflicts and identified 15+ vulnerabilities including logic flaws, authentication issues, and injection vectors with comprehensive remediation guidance.',
      image: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'cybersecurity',
      githubUrl: 'https://github.com/anuragged'
    },
    {
      id: 3,
      title: 'SecureFit: AI-Powered Fitness Application',
      duration: 'Jun 2024 – Jul 2024 | Care Insurance',
      technologies: ['Java', 'React', 'Firebase', 'Gemini AI', 'AES Encryption', 'REST APIs'],
      overview: 'Built a secure full-stack system targeting 18-35 demographic, engineered for 10,000+ concurrent users with AES-encrypted Firebase backend and authentication. Integrated Gemini AI dashboard generating personalized diet plans analyzing 100+ metrics with 95% prediction accuracy. Engineered 5+ key features, contributed 2,000+ lines of code, and implemented offline-first architecture.',
      role: 'Full-Stack Developer & Security Engineer - Designed secure authentication, implemented AES encryption, integrated AI-powered dashboard, collaborated with senior engineers to debug critical issues and refine backend logic.',
      results: 'Built scalable app supporting 10,000+ concurrent users with sub-200ms API response times, AES encryption, AI-powered personalized insights with 95% accuracy, and comprehensive security testing.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'web',
      githubUrl: 'https://github.com/anuragged',
      liveUrl: '#'
    },
    {
      id: 4,
      title: 'Decentralized Secure Messaging Platform',
      duration: 'Dec 2024 – Present',
      technologies: ['Blockchain', 'Cryptography', 'PoW', 'SHA-512', 'Python'],
      overview: 'Created a blockchain-based messaging system ensuring complete data privacy, integrity, and censorship resistance. Implemented Proof-of-Work consensus with block times under 10 seconds and secured ledgers using SHA-512 encryption.',
      role: 'Blockchain Developer & Cryptographer - Designed decentralized architecture ensuring user data sovereignty, implemented SHA-512 hashing to secure communication ledger against cryptographic attacks, engineered efficient PoW consensus mechanism.',
      results: 'Built decentralized messaging platform with PoW consensus achieving sub-10 second block times and SHA-512 cryptographic security ensuring complete data privacy and censorship resistance.',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'blockchain',
      githubUrl: 'https://github.com/anuragged',
      liveUrl: '#'
    },
    {
      id: 5,
      title: 'OWASP Juice Shop Security Assessment',
      duration: 'Aug 2024 – Dec 2024',
      technologies: ['Cybersecurity', 'VAPT', 'Burp Suite', 'SQLi', 'XSS', 'OWASP'],
      overview: 'Conducted comprehensive Vulnerability Assessment and Penetration Testing (VAPT), identifying 21 vulnerabilities including 5 critical SQL injection and 8 high-risk XSS flaws. Authored detailed remediation reports with mitigation strategies to strengthen overall application security.',
      role: 'Security Analyst & Penetration Tester - Performed comprehensive vulnerability assessment using industry-standard tools, identified critical security flaws across authentication, authorization, and injection vectors, provided detailed remediation guidance with mitigation strategies.',
      results: 'Identified 21 vulnerabilities including 5 critical SQL injection and 8 high-risk XSS flaws with comprehensive remediation reports and actionable mitigation strategies.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'cybersecurity',
      githubUrl: 'https://github.com/anuragged'
    },
    {
      id: 5,
      title: 'Secure Authentication and Key Management in Fog-based WSNs',
      duration: 'Jan 2024 – May 2024',
      technologies: ['Cybersecurity', 'Fog Computing', 'Reverse Engineering', 'Cryptography'],
      overview: 'Implemented robust key management protocols for Fog-based wireless sensor networks, incorporating reverse engineering concepts for enhanced security analysis and protection.',
      role: 'Security Researcher & Developer - Designed key management protocols, implemented reverse engineering techniques for security analysis, and developed enhanced protection mechanisms.',
      results: 'Successfully implemented robust key management protocols with enhanced security analysis through reverse engineering concepts.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'cybersecurity',
      githubUrl: 'https://github.com/anurag-anand-dev'
    },
    {
      id: 6,
      title: 'Smart Wheelchair IoT System',
      duration: '5 months',
      technologies: ['ESP32', 'React', 'IoT', 'Arduino', 'Mobile App'],
      overview: 'Built an intelligent wheelchair with IoT controls, emergency features, and mobile app integration for enhanced accessibility.',
      role: 'IoT Developer & Mobile App Developer - Designed hardware integration, developed mobile application, and implemented emergency protocols.',
      results: 'Improved mobility assistance for 20+ users with 95% system reliability and emergency response time under 30 seconds.',
      image: 'https://images.pexels.com/photos/8847337/pexels-photo-8847337.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'iot',
      githubUrl: 'https://github.com/anurag-anand-dev',
      liveUrl: '#'
    },
    {
      id: 7,
      title: 'Driver Drowsiness Detection System',
      duration: 'Machine Learning Project',
      technologies: ['Machine Learning', 'Python', 'OpenCV', 'Arduino', 'Computer Vision', 'EAR Algorithm'],
      overview: 'Implemented a real-time blink detection model using facial landmarks & EAR (Eye Aspect Ratio) algorithm with less than 1 second latency. Integrated Arduino buzzer module for instant driver alerts.',
      role: 'ML Engineer & Hardware Developer - Built real-time detection algorithms using computer vision, trained blink detection models with facial landmarks, integrated Arduino-based alert system for immediate response.',
      results: 'Achieved real-time drowsiness detection with sub-1 second latency using facial landmarks & EAR algorithm, integrated Arduino buzzer for instant alerts.',
      image: 'https://images.pexels.com/photos/3954656/pexels-photo-3954656.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'ai',
      githubUrl: 'https://github.com/anuragged'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects', icon: Code },
    { key: 'cloud', label: 'Cloud Native', icon: Cpu },
    { key: 'cybersecurity', label: 'Cybersecurity', icon: Shield },
    { key: 'blockchain', label: 'Blockchain', icon: Cpu },
    { key: 'web', label: 'Web Development', icon: Code },
    { key: 'iot', label: 'IoT', icon: Globe },
    { key: 'ai', label: 'AI/ML', icon: Brain }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent neon-text">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative projects spanning cybersecurity, blockchain, IoT, and full-stack development
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center space-x-2 border ${
                filter === category.key
                  ? 'bg-gradient-to-r from-cyber-600 to-cyber-700 text-white border-neon-blue shadow-lg shadow-neon-blue/25'
                  : 'bg-slate-800/50 text-gray-300 border-cyber-500/30 hover:text-neon-blue hover:border-neon-blue/50'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card rounded-2xl overflow-hidden border border-cyber-500/20 hover:border-neon-blue/40 transition-all duration-300 group cursor-pointer holo-border"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-cyber-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize border border-neon-blue/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.duration}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.overview}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-cyber-900/30 text-neon-cyan px-2 py-1 rounded text-xs border border-cyber-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-neon-blue text-xs px-2 py-1">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neon-blue text-sm font-medium flex items-center">
                      View Details
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                    <div className="flex space-x-2">
                      {project.githubUrl && (
                        <Github className="w-4 h-4 text-gray-400 hover:text-neon-blue transition-colors duration-200" />
                      )}
                      {project.liveUrl && (
                        <ExternalLink className="w-4 h-4 text-gray-400 hover:text-neon-blue transition-colors duration-200" />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-cyber-500/20"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200 border border-cyber-500/30"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h3>
                    <div className="flex space-x-3">
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-slate-800/50 hover:bg-slate-700 text-white p-3 rounded-lg transition-colors duration-200 border border-cyber-500/30 hover:border-neon-blue/50"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-cyber-600 hover:bg-cyber-700 text-white p-3 rounded-lg transition-colors duration-200 border border-cyber-500/30 hover:border-neon-blue/50"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <Target className="w-5 h-5 text-neon-blue" />
                          <h4 className="text-lg font-semibold text-white">Overview & Objectives</h4>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {selectedProject.overview}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <Code className="w-5 h-5 text-neon-blue" />
                          <h4 className="text-lg font-semibold text-white">Technologies Used</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="bg-cyber-900/30 text-neon-cyan px-3 py-1 rounded-lg text-sm border border-cyber-500/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <Calendar className="w-5 h-5 text-neon-blue" />
                          <h4 className="text-lg font-semibold text-white">Duration</h4>
                        </div>
                        <p className="text-gray-300">{selectedProject.duration}</p>
                      </div>

                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <Trophy className="w-5 h-5 text-neon-blue" />
                          <h4 className="text-lg font-semibold text-white">Results & Impact</h4>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {selectedProject.results}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-cyber-500/20">
                    <h4 className="text-lg font-semibold text-white mb-3">Role & Contribution</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProject.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;