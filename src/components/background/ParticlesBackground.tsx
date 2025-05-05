'use client';

import { useEffect, useState } from "react";
import type { Engine } from "tsparticles-engine";
import type { FC } from "react";

export default function ParticlesBackground() {
    const [ParticlesComponent, setParticlesComponent] = useState<FC | null>(null);

    useEffect(() => {
        const loadParticles = async () => {
            const { Particles } = await import("react-tsparticles");
            const { loadStarsPreset } = await import("tsparticles-preset-stars");
            
            const particlesInit = async (engine: Engine) => {
                await loadStarsPreset(engine);
            };

            setParticlesComponent(() => (
                <Particles
                    id="tsparticles"
                    init={particlesInit}
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
            ));
        };

        loadParticles();
    }, []);

    if (!ParticlesComponent) {
        return null;
    }

    return ParticlesComponent;
}
