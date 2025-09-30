import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Shield, Blocks, Globe, Cpu, Code, Brain, Lock, Search, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Shield,
      title: 'Cybersecurity Audits & VAPT',
      description: 'Comprehensive security assessments including OWASP vulnerability analysis, penetration testing, and security protocol implementation.',
      gradient: 'from-red-500 to-red-600',
      features: ['Vulnerability Assessment', 'Penetration Testing', 'Security Audits', 'Compliance Reports']
    },
    {
      icon: Blocks,
      title: 'Blockchain Development',
      description: 'Secure smart contracts, decentralized applications, and blockchain-based solutions for modern Web3 ecosystem.',
      gradient: 'from-neon-blue to-cyber-600',
      features: ['Smart Contracts', 'DApp Development', 'Token Creation', 'Blockchain Integration']
    },
    {
      icon: Globe,
      title: 'Web3 & DApp Development',
      description: 'Building next-generation decentralized applications with modern Web3 technologies and seamless user experiences.',
      gradient: 'from-purple-500 to-purple-600',
      features: ['Frontend Integration', 'Wallet Connectivity', 'IPFS Storage', 'DeFi Protocols']
    },
    {
      icon: Cpu,
      title: 'IoT Security Solutions',
      description: 'Secure IoT implementations, device authentication, and smart system development with robust security protocols.',
      gradient: 'from-green-500 to-green-600',
      features: ['Device Security', 'IoT Architecture', 'Sensor Integration', 'Real-time Monitoring']
    },
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Modern, responsive web applications using React, JavaScript, and cutting-edge CSS frameworks with focus on user experience and performance.',
      gradient: 'from-blue-500 to-blue-600',
      features: ['React Development', 'Responsive Design', 'Modern CSS/Tailwind', 'UI/UX Implementation']
    },
    {
      icon: Brain,
      title: 'AI & Security Integration',
      description: 'Machine learning models for security applications, threat detection, and intelligent automation systems.',
      gradient: 'from-orange-500 to-orange-600',
      features: ['ML Security Models', 'Threat Detection', 'Automated Analysis', 'Predictive Security']
    }
  ];

  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden">
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
            Services & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions from cybersecurity to blockchain development, ensuring secure and innovative digital transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                boxShadow: '0 25px 50px rgba(0, 212, 255, 0.2)'
              }}
              className="glass-card p-8 rounded-2xl border border-cyber-500/20 hover:border-neon-blue/40 transition-all duration-300 group holo-border"
            >
              <div className="flex items-center justify-center mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-neon-blue transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-300 text-center leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                className="h-1 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full mt-6"
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 rounded-2xl border border-cyber-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Secure Your Digital Future?</h3>
            <p className="text-gray-300 text-lg mb-6">
              Let's collaborate to build secure, innovative solutions that protect your digital assets and drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-cyber-600 to-cyber-700 text-white px-8 py-4 rounded-full font-semibold text-lg border border-cyber-500/50 hover:border-neon-blue transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Zap className="w-5 h-5" />
                <span>Start Your Project</span>
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-cyber-500 text-cyber-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyber-500/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Search className="w-5 h-5" />
                <span>View Portfolio</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;