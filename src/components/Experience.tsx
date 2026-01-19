import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ExperienceItem = ({ role, company, period, description }: any) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
    const x = useTransform(scrollYProgress, [0, 1], [50, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, x, scale }}
            className="relative pl-8 md:pl-0 border-l md:border-l-0 border-white/10 md:grid md:grid-cols-12 gap-12 items-start py-16 group"
        >
            <div className="hidden md:block md:col-span-3 text-right">
                <span className="font-mono text-sm text-brand-muted uppercase tracking-widest sticky top-32 transition-colors group-hover:text-brand-main">
                    {period}
                </span>
            </div>

            {/* Mobile Date */}
            <span className="md:hidden font-mono text-xs text-brand-muted uppercase tracking-widest mb-2 block">
                {period}
            </span>

            <div className="md:col-span-9 relative">
                {/* Glowing Dot on Desktop Line */}
                <div className="absolute -left-[53px] top-2 w-3 h-3 rounded-full bg-brand-main opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block shadow-[0_0_15px_3px_rgba(136,189,242,0.4)]" />

                <h4 className="text-4xl md:text-6xl font-display font-medium text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-light group-hover:to-brand-main transition-all duration-300">
                    {company}
                </h4>
                <h5 className="text-xl md:text-3xl text-brand-muted mb-6 font-light flex items-center gap-3">
                    {role}
                </h5>
                <div className="prose prose-xl prose-invert text-secondary/80 font-light leading-relaxed max-w-2xl">
                    <p>{description}</p>
                </div>
            </div>
        </motion.div>
    );
};

const Experience: React.FC = () => {
    const experiences = [
        {
            company: "Bluvin Solutions",
            role: "Mobile Application Developer Intern",
            period: "Jan 2026 – Present",
            description: "Reporting directly to the Director to architect and ship Flutter-based mobile applications. Ownership spans the entire product lifecycle—from translating UI designs into pixel-perfect code to managing final App Store deployment. Built 1,500+ lines of production code, optimized API connectivity, and reduced feature build times by ~30%."
        },
        {
            company: "Care Insurance",
            role: "Intern at IT Department",
            period: "Jun 2024 – Jul 2024",
            description: "Engineered enterprise-grade web and mobile systems serving 10,000+ concurrent users. Focused on backend performance, effectively reducing latency to <200ms, and implemented AES encryption standards to secure sensitive PII data within a strict Agile environment."
        },
        {
            company: "Club Sierra",
            role: "Design Lead",
            period: "Jan 2023 – Present",
            description: "Leading a creative team of 5 to execute digital strategy for major university events. Bridging the gap between technical requirements and brand aesthetics to improve digital engagement and consistency."
        }
    ];

    return (
        <section className="bg-background py-32 relative overflow-hidden">
            {/* Subtle Background Blob */}
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-brand-dark/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            <div className="container-luxury relative z-10">
                <div className="mb-32">
                    <span className="text-sm font-mono text-brand-main uppercase tracking-widest border-b border-brand-main/20 pb-2 block w-fit">
                        02 / Experience
                    </span>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
