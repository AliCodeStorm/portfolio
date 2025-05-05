"use client";

import dynamic from 'next/dynamic';
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Lottie = dynamic(() => import('lottie-react'), {
    ssr: false
});

interface AnimationPicProps {
    className?: string;
}

interface LottieAsset {
    id: string;
    w?: number;
    h?: number;
    u?: string;
    p?: string;
    e?: number;
}

interface LottieLayer {
    ty: number;
    nm: string;
    sr: number;
    st: number;
    op: number;
    ip: number;
    hd: boolean;
    ddd: number;
    bm: number;
    hasMask: boolean;
    ao: number;
    refId?: string;
}

interface LottieAnimationData {
    v: string;
    fr: number;
    ip: number;
    op: number;
    w: number;
    h: number;
    nm: string;
    ddd: number;
    assets: LottieAsset[];
    layers: LottieLayer[];
}

export default function AnimationPic({ className }: AnimationPicProps) {
    const [isClient, setIsClient] = useState(false);
    const [animationData, setAnimationData] = useState<LottieAnimationData | null>(null);

    useEffect(() => {
        setIsClient(true);
        import("@/../public/pic.json").then(data => {
            setAnimationData(data.default);
        });
    }, []);

    if (!isClient || !animationData) {
        return (
            <div className={cn("w-100 h-100", className)}>
                <div className="w-full h-full bg-gray-800 rounded-lg animate-pulse" />
            </div>
        );
    }

    return (
        <div className={cn("w-100 h-100", className)}>
            <Lottie animationData={animationData} loop autoplay />
        </div>
    );
}
