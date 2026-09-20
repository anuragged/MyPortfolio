import React, { useEffect, useRef } from 'react';

const Background: React.FC = () => {
    const spotlightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let rafId: number;
        let currentX = window.innerWidth / 2;
        let currentY = window.innerHeight / 3;
        let targetX = currentX;
        let targetY = currentY;

        const handleMouseMove = (e: MouseEvent) => {
            targetX = e.clientX;
            targetY = e.clientY;
        };

        const updatePosition = () => {
            // Smooth interpolation with minimal overhead
            currentX += (targetX - currentX) * 0.08;
            currentY += (targetY - currentY) * 0.08;

            if (spotlightRef.current) {
                spotlightRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
            }

            rafId = requestAnimationFrame(updatePosition);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        rafId = requestAnimationFrame(updatePosition);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background">
            {/* Subtle Engineering Dot Grid */}
            <div className="absolute inset-0 bg-dot-grid opacity-25" />

            {/* Hardware-accelerated Interactive Spotlight */}
            <div
                ref={spotlightRef}
                className="absolute top-0 left-0 w-[600px] h-[600px] -ml-[300px] -mt-[300px] rounded-full opacity-60 pointer-events-none gpu-accelerated"
                style={{
                    background: 'radial-gradient(circle, rgba(136, 189, 242, 0.12) 0%, rgba(136, 189, 242, 0.03) 45%, transparent 70%)',
                }}
            />

            {/* Static Ambient Corner Gradients - 0 Blur Cost */}
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
