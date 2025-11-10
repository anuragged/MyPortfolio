import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code, Database, Shield, Cloud, Globe, BookOpen, Cpu, Layers, Terminal, Lock, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'C/C++', color: 'from-blue-400 to-blue-600' },
        { name: 'Java', color: 'from-red-400 to-red-600' },
        { name: 'Python', color: 'from-green-400 to-green-600' },
        { name: 'JavaScript', color: 'from-yellow-300 to-yellow-500' },
        { name: 'SQL', color: 'from-blue-500 to-blue-700' },
        { name: 'HTML/CSS', color: 'from-orange-400 to-orange-600' },
        { name: 'Solidity (Learning)', color: 'from-purple-400 to-purple-600' },
        { name: 'Rust (Learning)', color: 'from-orange-500 to-orange-700' }
      ]
    },
    {
      icon: Cloud,
      title: 'Systems & Cloud',
      skills: [
        { name: 'Docker', color: 'from-blue-400 to-blue-600' },
        { name: 'Kubernetes', color: 'from-blue-500 to-blue-700' },
        { name: 'OpenShift', color: 'from-red-400 to-red-600' },
        { name: 'Linux', color: 'from-yellow-400 to-yellow-600' },
        { name: 'Serverless', color: 'from-purple-400 to-purple-600' },
        { name: 'Microservices', color: 'from-green-400 to-green-600' },
        { name: 'Firebase', color: 'from-orange-400 to-orange-600' },
        { name: 'CI/CD', color: 'from-cyan-400 to-cyan-600' }
      ]
    },
    {
      icon: Layers,
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', color: 'from-cyan-400 to-cyan-600' },
        { name: 'Node.js', color: 'from-green-400 to-green-600' },
        { name: 'Next.js', color: 'from-gray-400 to-gray-600' },
        { name: 'Flask', color: 'from-gray-500 to-gray-700' },
        { name: 'Django', color: 'from-green-500 to-green-700' },
        { name: 'Tailwind CSS', color: 'from-cyan-400 to-cyan-600' },
        { name: 'LangChain', color: 'from-purple-400 to-purple-600' }
      ]
    },
    {
      icon: Database,
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', color: 'from-blue-400 to-blue-600' },
        { name: 'MySQL', color: 'from-blue-500 to-blue-700' },
        { name: 'MongoDB', color: 'from-green-400 to-green-600' },
        { name: 'Firebase', color: 'from-orange-400 to-orange-600' }
      ]
    },
    {
      icon: Shield,
      title: 'Security & DevOps',
      skills: [
        { name: 'VAPT', color: 'from-red-400 to-red-600' },
        { name: 'Burp Suite', color: 'from-red-500 to-red-700' },
        { name: 'Nmap', color: 'from-orange-400 to-orange-600' },
        { name: 'Wireshark', color: 'from-blue-400 to-blue-600' },
        { name: 'OWASP Top 10', color: 'from-orange-500 to-orange-700' },
        { name: 'Cryptography (AES, SHA-512)', color: 'from-purple-400 to-purple-600' },
        { name: 'Git/GitHub', color: 'from-gray-400 to-gray-600' }
      ]
    },
    {
      icon: Brain,
      title: 'Core Concepts',
      skills: [
        { name: 'Distributed Systems', color: 'from-blue-400 to-blue-600' },
        { name: 'Cloud Automation', color: 'from-cyan-400 to-cyan-600' },
        { name: 'Cybersecurity', color: 'from-red-400 to-red-600' },
        { name: 'Blockchain', color: 'from-purple-400 to-purple-600' },
        { name: 'Cryptography', color: 'from-blue-500 to-blue-700' },
        { name: 'System Design', color: 'from-green-400 to-green-600' },
        { name: 'Threat Analysis', color: 'from-orange-400 to-orange-600' },
        { name: 'AI Integration', color: 'from-pink-400 to-pink-600' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      <div className="scan-line opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent neon-text">
            Technical Arsenal
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise in distributed systems, cloud-native development, cybersecurity, and modern full-stack technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card p-6 rounded-2xl border border-cyber-500/20 hover:border-neon-blue/40 transition-all duration-300 holo-border"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyber-600 to-cyber-700 rounded-xl flex items-center justify-center border border-neon-blue/30">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                    </div>
                    <div className="w-full bg-slate-800/50 rounded-full h-1 border border-cyber-500/20 mb-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.2 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 rounded-2xl border border-cyber-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Specialized Expertise</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-4 rounded-lg bg-black/40 border border-cyber-500/10"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-400/20">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Cybersecurity</h4>
                <p className="text-gray-300 text-sm">VAPT, OWASP Top 10, Security Audits, Penetration Testing</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-4 rounded-lg bg-black/40 border border-cyber-500/10"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-cyber-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-neon-blue/20">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Cloud Native</h4>
                <p className="text-gray-300 text-sm">Docker, Kubernetes, Microservices, Serverless Architecture</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-4 rounded-lg bg-black/40 border border-cyber-500/10"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-400/20">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Full Stack Development</h4>
                <p className="text-gray-300 text-sm">React, Node.js, Python, Modern JavaScript, RESTful APIs, Database Design</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;