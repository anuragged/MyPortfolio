import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, MessageCircle, Calendar, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      const mailtoLink = `mailto:anuragpandey.aryan@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset submitted state after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hi Anurag! I found your portfolio and would like to connect.`);
    const whatsappLink = `https://wa.me/919625150235?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'anuragpandey.aryan@gmail.com',
      href: 'mailto:anuragpandey.aryan@gmail.com',
      color: 'text-red-400'
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+91 9625150235',
      href: '#',
      onClick: handleWhatsApp,
      color: 'text-green-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Gurgaon, Haryana, India',
      href: '#',
      color: 'text-blue-400'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/anurag-anand-dev',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/anurag-anand-b77797269/',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/anurag_anand_dev',
      color: 'hover:text-sky-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
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
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on your next cybersecurity or blockchain project? Let's build something secure and innovative together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl border border-cyber-500/20 holo-border"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-cyber-600 to-cyber-700 rounded-xl flex items-center justify-center border border-neon-blue/30">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Send Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyber-500/30 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-200"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyber-500/30 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyber-500/30 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or how we can collaborate..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || submitted}
                whileHover={{ 
                  scale: submitted ? 1 : 1.02,
                  boxShadow: submitted ? undefined : '0 0 30px rgba(0, 212, 255, 0.5)'
                }}
                whileTap={{ scale: submitted ? 1 : 0.98 }}
                className={`w-full py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300 border ${
                  submitted
                    ? 'bg-green-600 text-white border-green-500'
                    : isSubmitting
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed border-gray-500'
                    : 'bg-gradient-to-r from-cyber-600 to-cyber-700 text-white border-cyber-500/50 hover:border-neon-blue'
                }`}
              >
                {submitted ? (
                  <>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-5 h-5 rounded-full bg-white flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-2 h-2 bg-green-600 rounded-full"
                      />
                    </motion.div>
                    <span>Message Sent!</span>
                  </>
                ) : isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="glass-card p-8 rounded-2xl border border-cyber-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 5 }}
                    onClick={info.onClick}
                    className={`flex items-center space-x-4 p-4 rounded-lg bg-slate-800/50 border border-cyber-500/30 hover:border-neon-blue/50 transition-all duration-200 group ${info.onClick ? 'cursor-pointer' : ''}`}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r from-cyber-600 to-cyber-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 border border-cyber-500/30`}>
                      <info.icon className={`w-6 h-6 text-white`} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                    {info.onClick && (
                      <ExternalLink className="w-4 h-4 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-2xl border border-cyber-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Connect on Social</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.1, 
                      y: -2,
                      boxShadow: '0 10px 20px rgba(0, 212, 255, 0.3)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-slate-800/50 border border-cyber-500/30 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 hover:border-neon-blue/50`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="glass-card p-8 rounded-2xl border border-cyber-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center border border-green-400/30">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Quick Contact</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-white">Available for new projects</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <p className="text-gray-300">Open to freelance opportunities</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-neon-cyan rounded-full"></div>
                  <p className="text-gray-300">Cybersecurity consulting available</p>
                </div>
              </div>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsApp}
                className="w-full mt-6 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-medium border border-green-500/50 hover:border-green-400 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Me</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;