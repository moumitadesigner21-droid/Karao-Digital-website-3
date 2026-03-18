import React, { useEffect, useRef } from 'react';

const InteractiveBackground: React.FC = () => {
    const blobRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animationFrameId: number;
        const handleMouseMove = (e: MouseEvent) => {
            if (blobRef.current) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = requestAnimationFrame(() => {
                    if (blobRef.current) {
                        // Use transform instead of top/left to avoid layout recalculations
                        blobRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
                    }
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-[#020617]">
            {/* Base overlay — no backdrop-blur (full-viewport backdrop-blur is extremely GPU-heavy) */}
            <div className="absolute inset-0 bg-slate-950/80 z-10" />

            {/* Interactive moving blob — GPU-accelerated via transform, reduced from 800px/blur-120 */}
            <div
                ref={blobRef}
                className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[60px] opacity-30 mix-blend-screen will-change-transform"
                style={{
                    background: 'radial-gradient(circle, rgba(0,191,203,0.8) 0%, rgba(196,160,40,0.6) 50%, rgba(0,0,0,0) 80%)',
                    transform: 'translate3d(50vw, 50vh, 0) translate(-50%, -50%)'
                }}
            />

            {/* Corner ambient glows — CSS gradient, no GPU compositor layer */}
            <div className="absolute inset-0" style={{ background: 'radial-gradient(circle 500px at 105% -10%, rgba(0,191,203,0.20) 0%, transparent 70%), radial-gradient(circle 500px at -5% 110%, rgba(196,160,40,0.20) 0%, transparent 70%)' }} />

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik00MCAwaC0xVjM5SDB2MWg0MFoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz4KPC9zdmc+')] z-20 opacity-50" />
        </div>
    );
};

export default InteractiveBackground;
