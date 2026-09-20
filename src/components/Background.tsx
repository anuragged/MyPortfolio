import React, { useEffect, useRef } from 'react';

const Background: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ticking = false;

        const handleMouseMove = (e: MouseEvent) => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (containerRef.current) {
                        containerRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
                        containerRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background"
            style={{
                ['--mouse-x' as any]: '50vw',
                ['--mouse-y' as any]: '30vh',
            }}
        >
            {/* Subtle Engineering Dot Grid */}
            <div className="absolute inset-0 bg-dot-grid opacity-25" />

            {/* Hardware-accelerated CSS Spotlight - 0 runtime loop */}
            <div
                className="absolute inset-0 pointer-events-none gpu-accelerated"
                style={{
                    background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(136, 189, 242, 0.09), transparent 80%)',
                }}
            />

            {/* Static Ambient Corner Gradients */}
            <div
                className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(189, 221, 252, 0.06) 0%, transparent 70%)',
                }}
            />
            <div
                className="absolute -bottom-40 -left-40 w-[800px] h-[800px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(56, 73, 89, 0.15) 0%, transparent 70%)',
                }}
            />
        </div>
    );
};

export default Background;
