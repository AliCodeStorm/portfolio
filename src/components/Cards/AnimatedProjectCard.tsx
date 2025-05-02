"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Button } from "../ui/button";
import Image from 'next/image';

type ProjectCardProps = {
    title: string;
    description: string;
    lastUpdated: string;
    imageUrl: string;
    className?: string;
    overlayColor?: string;
    hoverScale?: number;
    icon?: React.ReactNode;
    tags: string[];
};

export default function AnimatedProjectCard({
    title,
    description,
    lastUpdated,
    imageUrl,
    className,
    overlayColor = "bg-blue-500",
    hoverScale = 1.03,
}: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        const overlay = overlayRef.current;

        if (!card || !overlay) return;

        const ctx = gsap.context(() => {
            // Initial state - overlay completely to the right
            gsap.set(overlay, { x: "100%" });

            // Hover animation
            card.addEventListener("mouseenter", () => {
                gsap.to(overlay, {
                    x: "0%",
                    duration: 0.5,
                    ease: "power2.out"
                });
                gsap.to(card, {
                    scale: hoverScale,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            // Mouse leave animation
            card.addEventListener("mouseleave", () => {
                gsap.to(overlay, {
                    x: "100%",
                    duration: 0.5,
                    ease: "power2.out"
                });
                gsap.to(card, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        }, card);

        return () => ctx.revert();
    }, [hoverScale]);

    return (
        <div
            ref={cardRef}
            className={cn(
                "group max-w-[540px] overflow-hidden rounded-lg shadow-md relative cursor-pointer transition-transform duration-300",
                className
            )}
        >
            {/* Animated overlay that slides in from right */}
            <div
                ref={overlayRef}
                className={cn(
                    "absolute inset-0 w-full h-full z-0",
                    overlayColor
                )}
            />

            {/* Card content */}
            <div className="relative z-10 bg-gray-900 flex flex-col md:flex-row h-full">
                <div className="w-full md:w-1/3 bg-gray-900 overflow-hidden relative h-64">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>


                <div className="w-full md:w-2/3 p-4 relative">
                    <h3 className="text-xl text-cyan-600 font-bold mb-2 group-hover:text-white transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-white mb-3">{description}</p>
                    <p className="text-gray-400 text-sm">{lastUpdated}</p>

                    <Button
                        className="absolute top-[6.5rem] right-3 z-20 cursor-pointer hover:bg-gray-700 transition-colors duration-300"
                        onClick={() => window.open("https://github.com/AliCodeStorm", "_blank")}
                    >
                        <FontAwesomeIcon icon={faGithub} size="1x" className="mr-2" />
                        GitLink
                    </Button>
                </div>
            </div>
        </div>
    );
}