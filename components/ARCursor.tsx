import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const ARCursor: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Expand cursor when hovering over interactive elements
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    // Calculate 3D tilt based on screen position
    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
    const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 1080;

    // Normalized coordinates from -1 to 1
    const xN = (mousePosition.x / windowWidth) * 2 - 1;
    const yN = (mousePosition.y / windowHeight) * 2 - 1;

    // Reduced rotation for subtlety
    const rotateX = yN * -30;
    const rotateY = xN * 30;

    return (
        <>
            <style>{`
        body {
          cursor: none; /* Hide default cursor */
        }
        a, button, [role="button"] {
          cursor: none !important;
        }
      `}</style>

            {/* Outer AR Reticle */}
            <motion.div
                className="fixed top-0 left-0 w-16 h-16 pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
                animate={{
                    x: mousePosition.x - 32,
                    y: mousePosition.y - 32,
                    rotateX,
                    rotateY,
                    scale: isHovered ? 1.5 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 15,
                    mass: 0.5,
                }}
                style={{ perspective: 1000 }}
            >
                <div className={`w-full h-full border-2 ${isHovered ? 'border-brand-orange' : 'border-white'} rounded-full opacity-50 transition-colors duration-300`}></div>
                {/* Crosshairs */}
                <div className={`absolute w-full h-[1px] ${isHovered ? 'bg-brand-orange' : 'bg-white'} opacity-30`}></div>
                <div className={`absolute h-full w-[1px] ${isHovered ? 'bg-brand-orange' : 'bg-white'} opacity-30`}></div>
            </motion.div>

            {/* Inner Dot directly on mouse */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[10000] rounded-full bg-brand-orange mix-blend-difference"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isHovered ? 0 : 1, // Hide dot on hover, let reticle expand
                }}
                transition={{
                    type: 'spring',
                    stiffness: 700,
                    damping: 25,
                    mass: 0.1,
                }}
            />
        </>
    );
};
