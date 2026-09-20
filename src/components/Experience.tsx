import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceData {
    company: string;
    role: string;
    type?: string;
    location: string;
    period: string;
    bullets: string[];
    tags?: string[];
}

const ExperienceItem: React.FC<ExperienceData> = ({
    company,
    role,
    type,
    location,
    period,
    bullets,
    tags
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative pl-8 md:pl-0 border-l md:border-l-0 border-white/10 md:grid md:grid-cols-12 gap-12 items-start py-8 group"
        >
            {/* Desktop Period & Metadata Column */}
            <div className="hidden md:block md:col-span-3 text-right pt-2">
                <span className="font-mono text-sm text-brand-muted uppercase tracking-widest sticky top-32 transition-colors group-hover:text-brand-main block mb-2">
                    {period}
                </span>
                <span className="font-mono text-xs text-secondary/60 block">
                    {location}
                </span>
            </div>

            {/* Mobile Period & Metadata */}
            <div className="md:hidden mb-4">
                <span className="font-mono text-xs text-brand-main uppercase tracking-widest block">
                    {period}
                </span>
                <span className="font-mono text-xs text-secondary/60 block mt-1">
                    {location}
                </span>
            </div>

            {/* Main Content Card Column */}
            <div className="md:col-span-9 relative">
                {/* Glowing Dot on Desktop Timeline */}
                <div className="absolute -left-[53px] top-6 w-3 h-3 rounded-full bg-brand-main/70 group-hover:bg-brand-main group-hover:scale-125 transition-all duration-300 hidden md:block" />

                <div className="glass-card p-6 md:p-8 rounded-2xl">
                    <div className="flex flex-wrap items-baseline justify-between gap-4 mb-2">
                        <h4 className="text-2xl md:text-4xl font-display font-medium text-white group-hover:text-brand-main transition-colors duration-300">
                            {company}
                        </h4>
                        {type && (
                            <span className="px-3 py-1 bg-brand-main/10 border border-brand-main/20 rounded-full text-xs font-mono text-brand-light">
                                {type}
                            </span>
                        )}
                    </div>

                    <h5 className="text-base md:text-xl text-brand-muted mb-6 font-light">
                        {role}
                    </h5>

                    {/* Achievement Bullets */}
                    <ul className="space-y-3 mb-6 max-w-3xl">
                        {bullets.map((bullet, idx) => (
                            <li key={idx} className="text-secondary/90 font-light text-sm md:text-base leading-relaxed flex items-start gap-3">
                                <span className="text-brand-main mt-1.5 text-xs select-none">▸</span>
                                <span>{bullet}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Tech & Impact Tags */}
                    {tags && tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                            {tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="px-2.5 py-1 bg-white/[0.03] text-brand-light/70 border border-white/5 rounded text-xs font-mono"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Experience: React.FC = () => {
    const experiences: ExperienceData[] = [
        {
            company: "WeCatchAI",
            role: "Software Engineer | Product & Growth",
            type: "Full-time",
            location: "Seattle, WA, US | Remote",
            period: "Jun 2026 – Present",
            bullets: [
                "Architected and shipped 8+ core product features end-to-end across Human Review, community voting, leaderboard, rewards, and AI humanization on a 25,000+ user AI platform.",
                "Engineered a multi-queue rewards distribution system processing $2,000+ monthly across 20,000+ users, with fraud detection, multiple rate redemption logic, and 4 payout pipelines, reducing manual admin overhead by 80%.",
                "Built an AI-powered cold outreach pipeline using GPT-4o-mini, OpenAI, and SendGrid, executing 10+ targeted campaigns across 10+ audience segments.",
                "Built technical SEO and content infrastructure using JSON-LD, XML sitemaps, server-side meta injection, and i18n localization, supporting 40+ indexed URLs.",
                "Designed complex performance-based formulas and business logic for rewards and user outcomes, requiring critical analysis of user activity and performance to ensure accurate calculations."
            ],
            tags: ["AI Platform", "Multi-Queue Payouts", "GPT-4o-mini", "Technical SEO", "High Concurrency"]
        },
        {
            company: "WeCatchAI",
            role: "Software Engineer Intern",
            type: "Internship",
            location: "Remote",
            period: "Feb 2026 – May 2026",
            bullets: [
                "Shipped 15+ production features in 90 days, taking ownership from requirements to deployment and iteration at an early-stage AI startup.",
                "Built an AI grammar auditor with GPT-4o-mini, covering 15+ linguistic error categories through a 2-pass AI lookup table and regex correction pipeline.",
                "Engineered achievement, leaderboard, and community voting workflows supporting 279,000+ votes, with vote integrity checks, fault-tolerant processing, and automated notifications.",
                "Reduced AI infrastructure costs by 60% through GPT-4o-mini/GPT-4o model routing, per-endpoint rate limiting, and submission controls across 5+ AI-powered services."
            ],
            tags: ["Model Routing (-60% Cost)", "279k+ Votes", "2-Pass AI Auditor", "Fault Tolerance"]
        },
        {
            company: "Bluvin Solutions Private Limited",
            role: "Mobile Application Developer Intern",
            type: "Internship",
            location: "Remote, India",
            period: "Dec 2025 – Feb 2026",
            bullets: [
                "Developed and maintained production grade Flutter applications end-to-end, from feature requirements through implementation, testing, release, and maintenance.",
                "Owned the end-to-end iOS application lifecycle, with hands-on control over development, testing, signing, deployment, versioning, compliance, and release management."
            ],
            tags: ["Flutter", "iOS Lifecycle", "Signing & Compliance", "Release Management"]
        },
        {
            company: "Care Health Insurance",
            role: "Information Technology Intern",
            type: "Internship",
            location: "Gurugram, Haryana, India",
            period: "Jun 2024 – Jul 2024",
            bullets: [
                "Developed backend and frontend components for SecureFit, aimed at serving 10,000+ users, and optimized APIs to sub-200ms latency using AES encryption for secure handling of sensitive healthcare information."
            ],
            tags: ["AES Encryption", "Sub-200ms Latency", "Healthcare Systems", "Enterprise APIs"]
        }
    ];

    return (
        <section id="experience" className="bg-transparent py-28 relative overflow-hidden">
            {/* Zero-blur ambient accent */}
            <div
                className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20"
                style={{
                    background: 'radial-gradient(circle, rgba(136, 189, 242, 0.15) 0%, transparent 70%)',
                }}
            />

            <div className="container-luxury relative z-10">
                <div className="mb-20">
                    <span className="text-xs font-mono text-brand-main uppercase tracking-widest border-b border-brand-main/20 pb-2 block w-fit">
                        02 / Experience
                    </span>
                </div>

                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
