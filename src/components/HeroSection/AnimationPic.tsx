"use client";

import Lottie from "lottie-react";
import animationData from "@/../public/pic.json";
import { cn } from "@/lib/utils"; 

interface AnimationPicProps {
    className?: string;
}

export default function AnimationPic({ className }: AnimationPicProps) {
    return (
        <div className={cn("w-100 h-100", className)}>
            <Lottie animationData={animationData} loop autoplay />
        </div>
    );
}
