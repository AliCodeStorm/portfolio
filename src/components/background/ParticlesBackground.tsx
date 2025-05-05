'use client';

import { useEffect, useState } from "react";
import type { Engine } from "tsparticles-engine";
import dynamic from 'next/dynamic';

const Particles = dynamic(() => import('react-tsparticles').then(mod => mod.Particles), {
    ssr: false
});

export default function ParticlesBackground() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const loadParticles = async (): Promise<void> => {
            try {
                const { loadStarsPreset } = await import("tsparticles-preset-stars");
                setIsLoaded(true);
            } catch (error) {
                console.error("Failed to load particles:", error);
            }
        };

        loadParticles();
    }, []);

    if (!isLoaded) {
        return null;
    }

    return (
        <div id="tsparticles-container">
            <Particles
                id="tsparticles"
                init={async (engine: Engine) => {
                    const { loadStarsPreset } = await import("tsparticles-preset-stars");
                    await loadStarsPreset(engine);
                }}
                options={{
                    preset: "stars", 
                    background: {
                        color: {
                            value: "#0000", 
                        },
                    },
                    fullScreen: {
                        enable: true,
                        zIndex: -1,
                    },
                    detectRetina: true,
                    fpsLimit: 120,
                }}
            />
        </div>
    );
}
