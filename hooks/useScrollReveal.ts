import { useEffect, useRef } from 'react';

/**
 * Lightweight scroll-reveal hook using IntersectionObserver.
 * Adds 'reveal' class to child elements matching `selector` (or the container itself),
 * then adds 'reveal-visible' when they enter the viewport.
 * 
 * @param options.threshold - visibility threshold to trigger (default 0.15)
 * @param options.staggerMs - stagger delay between children (default 80ms)
 */
export function useScrollReveal<T extends HTMLElement>(
    options?: { threshold?: number; staggerMs?: number }
) {
    const ref = useRef<T>(null);
    const { threshold = 0.15, staggerMs = 80 } = options ?? {};

    useEffect(() => {
        const container = ref.current;
        if (!container) return;

        // Find revealable children — those with data-reveal attribute
        const items = container.querySelectorAll('[data-reveal]');
        const targets = items.length > 0 ? Array.from(items) : [container];

        // Add initial hidden state
        targets.forEach(el => el.classList.add('reveal'));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Stagger the reveal for each target
                        const el = entry.target;
                        const idx = targets.indexOf(el);
                        const delay = idx * staggerMs;
                        
                        setTimeout(() => {
                            el.classList.add('reveal-visible');
                        }, delay);

                        observer.unobserve(el);
                    }
                });
            },
            { threshold, rootMargin: '0px 0px -40px 0px' }
        );

        targets.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [threshold, staggerMs]);

    return ref;
}
