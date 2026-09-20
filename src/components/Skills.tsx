import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({
  category,
  skills,
  colorClass,
}: {
  category: string;
  skills: string[];
  colorClass: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="glass-card p-6 md:p-8 rounded-2xl hover:border-brand-main/40 transition-all duration-300"
  >
    <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/5">
      <h4 className={`font-mono text-xs uppercase tracking-widest ${colorClass}`}>
        {category}
      </h4>
      <span className="font-mono text-xs text-secondary/50">
        {skills.length} tools
      </span>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/90 text-xs md:text-sm font-mono hover:bg-brand-main/10 hover:border-brand-main/30 hover:text-brand-light transition-all cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-28 bg-transparent relative overflow-hidden">
      <div className="container-luxury relative z-10">
        <div className="mb-20">
          <span className="text-xs font-mono text-brand-main uppercase tracking-widest border-b border-brand-main/20 pb-2 block w-fit">
            04 / Technical Arsenal
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard
            category="Core & AI"
            skills={['Data Structures & Algorithms', 'System Design', 'DBMS', 'OOP', 'API Design', 'RAG', 'AI Integration']}
            colorClass="text-brand-main"
          />
          <SkillCard
            category="Languages"
            skills={['Java', 'Python', 'C++', 'JavaScript', 'TypeScript', 'SQL', 'Kotlin', 'Dart']}
            colorClass="text-brand-light"
          />
          <SkillCard
            category="Backend Systems"
            skills={['Node.js', 'Express', 'Django', 'FastAPI', 'Spring Boot', 'PostgreSQL', 'MSSQL', 'REST APIs']}
            colorClass="text-brand-muted"
          />
          <SkillCard
            category="Frontend & Mobile"
            skills={['React', 'Next.js', 'Flutter', 'Tailwind CSS']}
            colorClass="text-brand-light"
          />
          <SkillCard
            category="Cloud & DevOps"
            skills={['AWS', 'Azure', 'Docker', 'Linux', 'CI/CD', 'Git']}
            colorClass="text-brand-main"
          />
          <SkillCard
            category="Production Practices"
            skills={['High Concurrency', 'Micro-queues', 'Rate Limiting', 'AES Encryption', 'SEO & JSON-LD', 'Model Routing']}
            colorClass="text-brand-muted"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;