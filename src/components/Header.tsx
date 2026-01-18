import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navs = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' }
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 py-6 md:py-8 mix-blend-difference"
    >
      <div className="container-luxury flex justify-between items-center">
        <a href="#" className="text-xl font-display font-bold text-white tracking-tighter hover:opacity-80 transition-opacity">
          AA.
        </a>

        <nav className="flex gap-8">
          {navs.map(nav => (
            <a
              key={nav.label}
              href={nav.href}
              className="text-sm font-mono uppercase tracking-widest text-white/80 hover:text-white transition-colors"
            >
              {nav.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;