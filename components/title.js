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
            <div className="animate-slide-in-right absolute w-96 h-96 bg-no-repeat bg-contain z-10" style={{ backgroundImage: "url('/oval.png')", top: `${180 - 0.9 * scrollPosition}px`, right: `${30 + 0.0055 * scrollPosition ** 2}px` }}></div>
            <div className="animate-slide-in-right absolute w-64 h-64 bg-no-repeat bg-contain" style={{ backgroundImage: "url('/oval.png')", top: `${510 - 1.1 * scrollPosition}px`, right: `${75 - 0.5 * scrollPosition + 0.0030 * scrollPosition ** 2}px` }}></div>

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