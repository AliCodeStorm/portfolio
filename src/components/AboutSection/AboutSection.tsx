"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faBookOpen,
    faLaptopCode,
    faHeart
} from "@fortawesome/free-solid-svg-icons";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
    
    const sectionRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const subheadingRef = useRef<HTMLParagraphElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            
            gsap.set([headingRef.current, subheadingRef.current], {
                y: 50,
                opacity: 0
            });
            gsap.set(imageRef.current, {
                x: -100,
                opacity: 0
            });
            gsap.set(contentRef.current, {
                x: 100,
                opacity: 0
            });
            gsap.set(cardRefs.current, {
                y: 50,
                opacity: 0
            });

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top 80%", 
                onEnter: () => {
                    
                    const tl = gsap.timeline();

                    
                    tl.to([headingRef.current, subheadingRef.current], {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power3.out"
                    })
                        
                        .to(imageRef.current, {
                            x: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: "back.out(1.2)"
                        }, "-=0.4") 
                        
                        .to(contentRef.current, {
                            x: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: "power3.out"
                        }, "-=0.6")
                        
                        .to(cardRefs.current, {
                            y: 0,
                            opacity: 1,
                            stagger: 0.15,
                            duration: 0.6,
                            ease: "circ.out"
                        }, "-=0.4");

                    
                    gsap.to(imageRef.current, {
                        y: 20,
                        duration: 3,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                        delay: 1 
                    });
                },
                once: true 
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const focusAreas = [
        { icon: faCode, title: "FullStack Project Learning", subtitle: "Next.js" },
        { icon: faBookOpen, title: "Learning", subtitle: "FullStack Developer" },
        { icon: faLaptopCode, title: "Projects", subtitle: "E-commerce, Web Apps" },
        { icon: faHeart, title: "Interests", subtitle: "Real-Time Apps, AI" },
    ];

    return (
        <section
            ref={sectionRef}
            className="py-20 px-4 sm:px-6 lg:px-8 relative z-10"
            id="about"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 overflow-hidden">
                    <h2
                        ref={headingRef}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        About Me
                    </h2>
                    <p
                        ref={subheadingRef}
                        className="text-xl text-gray-300 mb-6"
                    >
                        Get to know me better
                    </p>
                    <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div
                        ref={imageRef}
                        className="relative w-full max-w-md mx-auto lg:mx-0 order-first lg:order-none"
                    >
                        <div className="absolute -inset-4 bg-blue-500 rounded-2xl opacity-20 blur-xl" />
                        <img
                            src="/developer-image.jpg"
                            alt="Full-Stack Developer"
                            className="relative shadow-2xl w-full h-auto z-10 border-4 border-white/10 rounded-full"
                        />
                    </div>

                    <div ref={contentRef} className="space-y-8">
                        <h3 className="text-2xl font-semibold text-white">
                            <FontAwesomeIcon icon={faCode} className="mr-2 text-blue-400" />
                            Full-Stack Developer
                        </h3>

                        <div className="space-y-6">
                            <p className="text-white text-lg leading-relaxed">
                                👋 Hi, I'm <span className="font-semibold text-blue-400">AliRaza</span>, a Passionate Full-Stack Developer
                            </p>
                            <p className="text-white text-lg leading-relaxed">
                                I'm a dedicated Full-Stack Web Developer specializing in both frontend and backend development. I focus on creating scalable, real-time, and interactive web applications with the latest technologies.
                            </p>
                            <p className="text-white text-lg leading-relaxed">
                                Currently, I am sharpening my skills in backend development, particularly in Node.js, and diving deep into advanced topics like middleware, authentication, and API development. At the same time, I'm exploring React.js and building web applications using Next.js to deliver smooth and efficient user experiences.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            {focusAreas.map((area, index) => (
                                <div
                                    key={index}
                                    ref={el => { cardRefs.current[index] = el; }}
                                    className="bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
                                >
                                    <FontAwesomeIcon
                                        icon={area.icon}
                                        className="text-2xl mb-2 text-blue-400"
                                    />
                                    <h5 className="font-semibold text-white">
                                        {area.title}
                                    </h5>
                                    <p className="text-gray-300">
                                        {area.subtitle}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}