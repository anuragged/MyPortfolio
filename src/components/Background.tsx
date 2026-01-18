import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Background: React.FC = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 30, stiffness: 200 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background">
            {/* Dynamic Mouse Follower - Brand Main */}
            <motion.div
                style={{ x, y }}
                className="absolute w-[800px] h-[800px] rounded-full bg-brand-main/10 blur-[120px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
            />

            {/* Top Right - Brand Light */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-light/5 blur-[120px] mix-blend-screen opacity-60" />

            {/* Bottom Left - Brand Dark/Muted */}
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-dark/20 blur-[140px] mix-blend-screen" />
        </div>
    );
};

export default Background;
