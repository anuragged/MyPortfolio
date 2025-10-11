import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronDown, Terminal, Code, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Cybersecurity Specialist',
    'Blockchain Developer', 
    'Full Stack Developer',
    'Security Researcher'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConnect = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Cyber Grid */}
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        
        {/* Scanning Line */}
        <div className="scan-line opacity-20"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-neon-blue rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -100, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Matrix Rain Effect */}
        <div className="matrix-rain opacity-10">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="matrix-char"
              style={{
                left: `${i * 5}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            >
              {String.fromCharCode(0x30A0 + Math.random() * 96)}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Terminal-style intro */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 rounded-lg mb-8 border border-cyber-500/20 bg-black/60"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Terminal className="w-5 h-5 text-neon-blue" />
              <span className="text-neon-blue font-mono text-sm">anurag@portfolio:~$</span>
              <span className="text-gray-300 font-mono text-sm">whoami</span>
            </div>
            <div className="text-left font-mono text-sm text-gray-300">
              <div className="text-neon-cyan">Name: Anurag Anand</div>
              <div className="text-neon-cyan">Age: 22</div>
              <div className="text-neon-cyan">Location: Gurgaon, Haryana</div>
              <div className="text-neon-cyan">Status: <span className="text-green-400">Available for opportunities</span></div>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-cyber-400 to-neon-cyan bg-clip-text text-transparent leading-tight neon-text"
            data-text="Anurag Anand"
          >
            Anurag Anand
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 mb-4 h-8"
          >
            <span className="text-neon-blue font-mono">&gt; </span>
            <span className="text-white">{text}</span>
            <span className="animate-pulse text-neon-blue">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto"
          >
            Aspiring Security Research Intern | B.Tech CSE Student at BML Munjal University | Building secure digital futures through innovative cybersecurity and blockchain solutions
          </motion.p>

          {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center space-x-6 mb-8"
          >
            {[
              { icon: Shield, label: 'Security', color: 'text-red-400' },
              { icon: Code, label: 'Development', color: 'text-green-400' },
              { icon: Terminal, label: 'Blockchain', color: 'text-blue-400' }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`flex flex-col items-center space-y-2 ${item.color} opacity-80`}
              >
                <div className="w-12 h-12 rounded-lg bg-black/60 border border-cyber-500/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-xs text-gray-400">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center justify-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
              backgroundColor: 'rgba(0, 212, 255, 0.1)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleConnect}
            className="relative group bg-gradient-to-r from-cyber-600 to-cyber-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 border border-cyber-500/50 hover:border-neon-blue transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Let's Connect</span>
            <ArrowRight className="w-5 h-5 relative z-10" />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToAbout}
            className="text-neon-blue hover:text-neon-cyan transition-colors duration-200"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </div>

      {/* Holographic Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border-2 border-neon-blue/30 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 border-2 border-neon-cyan/30 rounded-lg"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-1/2 left-5 w-12 h-12 border-2 border-neon-purple/30"
        animate={{ 
          rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
          scale: [1, 1.2, 1, 0.8, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />
    </section>
  );
};

export default Hero;