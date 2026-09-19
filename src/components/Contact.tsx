import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ContactLink = ({ label, href, value }: { label: string, href: string, value: string }) => (
  <a
    href={href}
    className="group flex flex-col border-b border-white/5 py-8 hover:bg-white/[0.02] transition-colors px-4 md:px-0"
    target="_blank"
    rel="noreferrer"
  >
    <div className="flex items-center justify-between">
      <h3 className="text-3xl md:text-4xl font-display font-medium text-white group-hover:text-brand-main transition-colors">
        {label}
      </h3>
      <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-white transition-colors" />
    </div>
    <span className="text-brand-light font-mono text-xs uppercase tracking-widest mt-2">{value}</span>
  </a>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Footer Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-main/5 blur-[100px] pointer-events-none" />

      <div className="container-luxury relative z-10">
        <div className="mb-24">
          <span className="text-sm font-mono text-brand-muted uppercase tracking-widest border-b border-brand-muted/20 pb-2 block w-fit">
            05 / Contact
          </span>
        </div>

        <div className="space-y-4">
          <ContactLink
            href="mailto:anuragpandey.aryan@gmail.com"
            label="Email"
            value="anuragpandey.aryan@gmail.com"
          />
          <ContactLink
            href="https://www.linkedin.com/in/anurag-anand-b77797269/"
            label="LinkedIn"
            value="linkedin.com/in/anurag-anand-b77797269"
          />
          <ContactLink
            href="https://github.com/anuragged"
            label="GitHub"
            value="github.com/anuragged"
          />
          <ContactLink
            href="tel:+919625150235"
            label="Mobile"
            value="+91 96251 50235"
          />

        </div>

        <div className="mt-24 max-w-2xl">
          <p className="text-xl md:text-2xl text-secondary font-light">
            I am currently open to new opportunities. <br />
            <span className="text-brand-light">Let's build something exceptional.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;