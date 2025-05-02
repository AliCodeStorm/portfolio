'use client';

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadStarsPreset(engine);
    }, []);

    return (
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
    );
}
