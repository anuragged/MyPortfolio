import React from 'react';
import { motion } from 'framer-motion';

const SkillGroup = ({ category, skills, colorClass }: { category: string, skills: string[], colorClass: string }) => (
  <div className="mb-16">
    <h4 className={`font-mono text-sm uppercase tracking-widest mb-8 ${colorClass}`}>{category}</h4>
    <div className="flex flex-wrap gap-x-6 gap-y-4">
      {skills.map((skill, index) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="text-3xl md:text-5xl font-display font-medium text-white/40 hover:text-white transition-colors duration-300 cursor-default"
        >
          {skill}
          <span className={`ml-4 font-sans text-2xl opacity-20 ${colorClass.replace('text-', 'text-')}`}>/</span>
        </motion.span>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Splash */}
      <div className="absolute center w-[500px] h-[500px] bg-brand-main/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="container-luxury relative z-10">
        <div className="mb-32">
          <span className="text-sm font-mono text-brand-main uppercase tracking-widest border-b border-brand-main/20 pb-2 block w-fit">
            04 / Stack
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <SkillGroup
              category="Core Engineering"
              skills={['DSA', 'OOP', 'System Design', 'OS', 'DBMS']}
              colorClass="text-brand-main"
            />
            <SkillGroup
              category="Languages"
              skills={['Java', 'Python', 'TypeScript', 'C++', 'SQL', 'Bash']}
              colorClass="text-brand-light"
            />
          </div>
          <div>
            <SkillGroup
              category="Backend & Cloud"
              skills={['Node.js', 'Django', 'AWS', 'Docker', 'Kubernetes', 'Redis', 'PostgreSQL']}
              colorClass="text-brand-muted"
            />
            <SkillGroup
              category="Security (OWASP)"
              skills={['Burp Suite', 'Cryptography', 'Secure SDLC', 'ZAP', 'Metasploit']}
              colorClass="text-brand-light"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;