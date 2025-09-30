import React from 'react';
import { motion } from 'framer-motion';
import './i18n/config';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black font-display relative overflow-x-hidden">
      {/* Cyber Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Matrix Rain */}
        <div className="matrix-rain opacity-10">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="matrix-char"
              style={{
                left: `${i * 6.67}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${Math.random() * 10 + 15}s`
              }}
            >
              {String.fromCharCode(0x30A0 + Math.random() * 96)}
            </div>
          ))}
        </div>
        
        {/* Scanning Lines */}
        <div className="scan-line opacity-20"></div>
        
        {/* Floating Particles */}
        <div className="particles opacity-30">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${Math.random() * 3 + 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <Header />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-black/40 backdrop-blur-sm border-t border-cyber-800/20 py-8 relative z-10"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent mb-4 md:mb-0"
            >
              Anurag Anand
            </motion.div>
            
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <span>© 2025 Anurag Anand. All rights reserved.</span>
              <span className="hidden md:block">•</span>
              <span className="hidden md:block">Building secure & decentralized futures</span>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-cyber-800/20 text-center">
            <p className="text-gray-500 text-sm">
              Crafted with precision using React, TypeScript, and modern web technologies
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;