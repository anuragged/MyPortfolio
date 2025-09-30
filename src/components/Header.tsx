import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X, Terminal } from 'lucide-react';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = ['about', 'services', 'portfolio', 'skills', 'contact'];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-cyber-500/10 shadow-lg shadow-cyber-500/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-lg flex items-center justify-center border border-cyber-500/20">
            <Terminal className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
            Anurag
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item)}
              className="text-gray-300 hover:text-neon-blue transition-colors duration-200 capitalize font-medium relative group"
            >
              {t(`nav.${item}`)}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-cyan group-hover:w-full transition-all duration-300"></div>
            </motion.button>
          ))}
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div className="relative group hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-gray-300 hover:text-neon-blue transition-colors duration-200 p-2 rounded-lg border border-cyber-500/20 hover:border-neon-blue/50"
            >
              <Globe className="w-5 h-5" />
            </motion.button>
            <div className="absolute right-0 top-full mt-2 bg-black/95 backdrop-blur-md rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-cyber-500/20">
              <div className="py-2">
                {['en', 'fr', 'es'].map((lng) => (
                  <button
                    key={lng}
                    onClick={() => changeLanguage(lng)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-neon-blue hover:bg-cyber-500/10 transition-colors duration-200"
                  >
                    {lng === 'en' ? 'English' : lng === 'fr' ? 'Français' : 'Español'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-neon-blue transition-colors duration-200 border border-cyber-500/20 rounded-lg hover:border-neon-blue/50"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0, 
          height: isMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-black/98 backdrop-blur-md border-t border-cyber-500/10"
      >
        <div className="px-6 py-4 space-y-4">
          {navItems.map((item, index) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isMenuOpen ? 1 : 0, 
                x: isMenuOpen ? 0 : -20 
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => scrollToSection(item)}
              className="block w-full text-left text-gray-300 hover:text-neon-blue transition-colors duration-200 capitalize font-medium py-2"
            >
              {t(`nav.${item}`)}
            </motion.button>
          ))}
          
          {/* Mobile Language Selector */}
          <div className="pt-4 border-t border-cyber-500/10">
            <p className="text-gray-400 text-sm mb-2">Language</p>
            <div className="flex space-x-2">
              {['en', 'fr', 'es'].map((lng) => (
                <button
                  key={lng}
                  onClick={() => changeLanguage(lng)}
                  className="px-3 py-1 text-sm text-gray-300 hover:text-neon-blue border border-cyber-500/20 rounded hover:border-neon-blue/50 transition-colors duration-200"
                >
                  {lng === 'en' ? 'EN' : lng === 'fr' ? 'FR' : 'ES'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;