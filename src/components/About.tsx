import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Shield, Brain, Code, Award, MapPin, Calendar, User } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent neon-text"
          >
            About Me
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass-card p-8 rounded-2xl border border-cyber-500/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyber-600 to-cyber-700 rounded-full flex items-center justify-center border border-neon-blue/20">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Anurag Anand</h3>
                    <p className="text-neon-blue">Aspiring Security Research Intern</p>
                    <p className="text-gray-400">CGPA: 7.3/10</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="w-5 h-5 text-neon-blue mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">B.Tech in Computer Science Engineering</p>
                      <p className="text-gray-400">BML Munjal University (2022-2026)</p>
                      <p className="text-gray-400">CGPA: 7.6/10</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-neon-blue mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-gray-400">Gurgaon, Haryana, India</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-neon-blue mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Specializing in Cybersecurity, Blockchain Technology, and Full-Stack Development</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-cyber-500/10">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="w-6 h-6 text-neon-blue" />
                  <h4 className="text-lg font-semibold text-white">Achievements & Scholarships</h4>
                </div>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                    <span>75% Merit-based Scholarship at BML Munjal University</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                    <span>Recognized by Care Insurance seniors for innovative fitness app proposal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                    <span>Led design team for 10+ major university events (TEDx, Club Sierra)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Contributed 2,000+ lines of secure code at Care Insurance</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-card p-6 rounded-2xl border border-cyber-500/10">
                <div className="flex items-center space-x-3 mb-4">
                  <Brain className="w-6 h-6 text-neon-blue" />
                  <h4 className="text-lg font-semibold text-white">Core Expertise</h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Cybersecurity',
                    'Blockchain',
                    'Frontend',
                    'Design',
                    'Arduino',
                    'Penetration Testing'
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 212, 255, 0.1)' }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-r from-cyber-600/10 to-cyber-700/10 rounded-lg p-3 text-center border border-cyber-500/20 cursor-pointer"
                    >
                      <span className="text-neon-cyan text-sm font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-cyber-500/10">
                <div className="flex items-center space-x-3 mb-4">
                  <Code className="w-6 h-6 text-neon-blue" />
                  <h4 className="text-lg font-semibold text-white">Certifications & Skills</h4>
                </div>
                <div className="space-y-3">
                  {[
                    { category: 'IBM Cybersecurity', skills: 'IBM Cybersecurity Analyst Professional Certificate' },
                    { category: 'Google Cybersecurity', skills: 'Google Cybersecurity Professional Certificate' },
                    { category: 'IBM Security', skills: 'IBM Introduction to Cybersecurity' },
                    { category: 'Cryptography', skills: 'Number Theory and Cryptography (UCSD)' },
                    { category: 'IoT Cloud Services', skills: 'Internet of Things V2: Cloud Services (UCSD)' }
                  ].map((item, index) => (
                    <div key={index} className="border-l-2 border-neon-blue/30 pl-4">
                      <h5 className="text-white font-medium">{item.category}</h5>
                      <p className="text-gray-400 text-sm">{item.skills}</p>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 rounded-2xl border border-cyber-500/10 bg-gradient-to-r from-black/40 to-black/60 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/3 to-neon-cyan/3"></div>
                <p className="text-gray-300 text-lg leading-relaxed relative z-10 text-center">
                  <span className="text-neon-blue font-medium">"Know something about everything and everything about something"</span> - I follow that.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;