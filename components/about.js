"use client";

import { useState, useEffect } from 'react';

export default function About() {
    const [showTick1, setShowTick1] = useState(false);
    const [showTick2, setShowTick2] = useState(false);
    const [showTick3, setShowTick3] = useState(false);

    // TO FIX : WHY DO I NEED THIS LINE OF CODE ?
    window.onscroll = function () { };

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            console.log(position)

            if (position > 350) {
                setShowTick1(true);
            }
            else {
                setShowTick1(false);
            }
            if (position > 475) {
                setShowTick2(true);
            }
            else {
                setShowTick2(false);
            }
            if (position > 600) {
                setShowTick3(true);
            }
            else {
                setShowTick3(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll, { passive: true });
        };
    }, []);

    return (
        <div className="bg-white flex flex-row items-center justify-center h-[75vh] text-center px-4">
            <div className="max-w-4xl mx-auto w-1/2 mt-[-5vh]">

                <div className="flex flex-row items-center justify-center space-x-10">
                    <img src="/tic1.png" alt="" className={`${showTick1 ? "" : "opacity-0"} transition-opacity duration-500`} />
                    <img src="/tic2.png" alt="" className={`mb-10 ${showTick2 ? "" : "opacity-0"} transition-opacity duration-500`} />
                    <img src="/tic3.png" alt="" className={`${showTick3 ? "" : "opacity-0"} transition-opacity duration-500`} />
                </div>
                {/* Main title and subtitle */}
                <div className="text-4xl font-ClashSemiBold tracking-wide text-tertiary-purple mt-2">We make your operations</div>
                <div className="text-6xl font-ClashSemiBold tracking-wider text-tertiary-purple mt-2">AUTOMATIC</div>
                {/* Buttons */}
                <div className="buttons flex flex-row mt-4 items-center justify-center space-x-5">
                    <div className="button_container w-[22vh]">
                        <a href="https://calendly.com/your-link" className="button">
                            <div className="button__content_2">
                                <span className="button__text font-ClashMedium text-center text-main-purple text-[14px]">Free Consultation</span>
                            </div>
                            <img src='/star.png' alt="" className="button__star-1" />
                            <img src='/star.png' alt="" className="button__star-2" />
                        </a>
                    </div>

                    <div className="button_container w-[22vh]">
                        <a href="https://calendly.com/your-link" className="button">
                            <div className="button__content_2">
                                <span className="button__text font-ClashMedium text-center text-main-purple text-[14px]">Our Services</span>
                            </div>
                            <img src='/star.png' alt="" className="button__star-1" />
                            <img src='/star.png' alt="" className="button__star-2" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto mt-16 w-[40%] mt-[5vh]">
                <p className="mt-4 text-2xl font-InterSemiBold text-tertiary-purple">Alt Workspaces is all about making your daily tasks a breeze by automating the mundane stuff. We tailor workspaces for everyone - whether you're in Marketing, Sales, or Communications, making life simpler for the whole crew.</p>
            </div>
        </div>
    );
}