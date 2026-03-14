import React, { useState, useEffect } from 'react';

interface IntroScreenProps {
    onEnter: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onEnter }) => {
    const [glitching, setGlitching] = useState(false);

    useEffect(() => {
        // Random glitch effect interval
        const interval = setInterval(() => {
            setGlitching(true);
            setTimeout(() => setGlitching(false), 150 + Math.random() * 200);
        }, 2000 + Math.random() * 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center overflow-hidden">
            {/* Background Noise Image */}
            <div className="absolute inset-0 bg-noise opacity-[0.06] mix-blend-overlay pointer-events-none"></div>

            {/* Massive Background Typography */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center opacity-10 pointer-events-none select-none z-0 mt-10 transition-transform duration-75 ${glitching ? 'translate-x-1 -translate-y-1' : ''}`}>
                <h1 className="text-[25vw] leading-[0.75] font-black font-display tracking-tighter text-transparent" style={{ WebkitTextStroke: '2px #ffffff' }}>
                    LAICAI
                </h1>
                <h1 className="text-[25vw] leading-[0.75] font-black font-display tracking-tighter text-transparent" style={{ WebkitTextStroke: '2px #ffffff' }}>
                    COMPANY
                </h1>
            </div>

            <div className={`relative z-10 flex flex-col items-center ${glitching ? 'opacity-90' : 'opacity-100'}`}>
                <div className="mb-12 overflow-hidden">
                    <h2 className="text-white text-6xl md:text-8xl font-black font-display tracking-tighter uppercase animate-fade-in-up">
                        Are you ready?
                    </h2>
                </div>

                <button
                    onClick={onEnter}
                    className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 border-2 border-white bg-transparent hover:bg-white hover:text-black hover:scale-105 active:scale-95 focus:outline-none focus:ring-none shadow-[8px_8px_0px_0px_#FF4D00] hover:shadow-[12px_12px_0px_0px_#FF4D00] animate-fade-in-up"
                    style={{ animationDelay: '0.2s' }}
                >
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                    <span className="relative text-2xl uppercase tracking-[0.3em] font-display font-black">
                        [ ENTER ]
                    </span>
                </button>
            </div>

            {/* Glitch Overlay Elements */}
            {glitching && (
                <>
                    <div className="absolute top-1/3 left-0 w-full h-1 bg-brand-orange/50 z-50"></div>
                    <div className="absolute top-2/3 left-0 w-full h-2 bg-white/30 z-50 mix-blend-difference"></div>
                </>
            )}
        </div>
    );
};
