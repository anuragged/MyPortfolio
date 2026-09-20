import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const navs = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-background/80 backdrop-blur-md border-b border-white/[0.06] shadow-sm shadow-black/20">
      <div className="container-luxury flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-xl font-display font-bold text-white tracking-tighter group-hover:text-brand-main transition-colors">
            Anurag Anand<span className="text-brand-main">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navs.map(nav => (
            <a
              key={nav.label}
              href={nav.href}
              className="text-xs font-mono uppercase tracking-widest text-white/70 hover:text-white transition-colors relative py-1"
            >
              {nav.label}
            </a>
          ))}
          <a
            href="mailto:anuragpandey.aryan@gmail.com"
            className="px-4 py-2 bg-brand-main/10 text-brand-main border border-brand-main/30 rounded-full text-xs font-mono uppercase tracking-wider hover:bg-brand-main hover:text-background transition-all"
          >
            Get In Touch
          </a>
        </nav>

        {/* Mobile Contact Button */}
        <a
          href="#contact"
          className="md:hidden px-3 py-1.5 bg-brand-main/10 text-brand-main border border-brand-main/30 rounded-full text-xs font-mono uppercase tracking-wider"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;