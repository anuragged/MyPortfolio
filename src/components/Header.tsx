import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setIsScrolled(currentScrollY > 40);

          if (currentScrollY > 200 && currentScrollY > lastScrollY) {
            setHidden(true);
          } else {
            setHidden(false);
          }
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navs = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' }
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-background/85 backdrop-blur-md border-b border-white/[0.06] shadow-lg shadow-black/20'
          : 'py-6 md:py-8 bg-transparent'
      }`}
    >
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
    </motion.header>
  );
};

export default Header;