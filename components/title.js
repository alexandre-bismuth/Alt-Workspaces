"use client";

import { useState, useEffect } from 'react';
import MagicButton from './magicbutton.js';

export default function Title() {
    const [scrollPosition, setScrollPosition] = useState(0);

    // TO FIX : WHY DO I NEED THIS LINE OF CODE ?
    window.onscroll = function () { };

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });


        return () => {
            window.removeEventListener('scroll', handleScroll, { passive: true });
        };
    }, []);

    return (
        <div className="relative bg-main-purple flex items-center justify-center overflow-hidden h-screen" >
            {/* Circle/Oval Animation */}
            <div className="animate-slide-in-right absolute w-[55vh] h-[55vh] bg-no-repeat bg-contain z-10" style={{ backgroundImage: "url('/oval1.png')", top: `${140 - 0.66 * scrollPosition}px`, right: `${5 + 0.05 * scrollPosition + 0.004 * scrollPosition ** 2}px` }}></div>
            <div className="animate-slide-in-right absolute w-[32vh] h-[32vh] bg-no-repeat bg-contain" style={{ backgroundImage: "url('/oval2.png')", top: `${500 - 0.88 * scrollPosition}px`, right: `${500 + 0.5 * scrollPosition + 0.003 * scrollPosition ** 2}px` }}></div>

            {/* Text Content */}
            <div className="z-10 absolute text-white w-2/3 text-left left-10 bottom-64">
                <div className="text-6xl font-ClashSemiBold tracking-wide relative left-4">Crafting Productive Environments</div>
                <div className="text-xl my-4 text-secondary-purple font-InterMedium relative left-4">Automate your business and boost your operations easily</div>
                <div className="w-1/4 flex justify-center">
                    <MagicButton className="mt-4"
                        gradientColor="linear-gradient(90deg, #FFFFFF, #FFFFFF)"
                        textColor="#4517FE"
                        text="Free Consultation !"
                    />
                </div>
            </div>
        </div>
    );
}