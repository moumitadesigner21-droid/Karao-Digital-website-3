import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Direct DOM manipulation — bypasses React re-renders entirely
        const updatePosition = (e: MouseEvent) => {
            if (outerRef.current) {
                outerRef.current.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
            }
            if (innerRef.current) {
                innerRef.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
            }
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const hovering =
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'a' ||
                !!target.closest('button') ||
                !!target.closest('a') ||
                !!target.closest('.interactive-element') ||
                !!target.closest('.glass-panel');

            // Toggle CSS class directly — no React setState, no re-render
            outerRef.current?.classList.toggle('cursor-hovering', hovering);
            innerRef.current?.classList.toggle('cursor-hovering', hovering);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        setIsVisible(true);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            {/* Styles for .cursor-outer and .cursor-hovering live in index.css */}
            <div ref={outerRef} className="cursor-outer" />
            <div ref={innerRef} className="cursor-inner" />
        </>
    );
};

export default CustomCursor;
