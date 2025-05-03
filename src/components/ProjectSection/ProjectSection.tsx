"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faServer,
    faPaintBrush,
    faMobile,
    faFilter
} from "@fortawesome/free-solid-svg-icons";
import AnimatedProjectCard from "@/components/Cards/AnimatedProjectCard";


type Project = {
    title: string;
    description: string;
    lastUpdated: string;
    imageUrl: string;
    tags: string[];
    category: "frontend" | "backend" | "fullstack" | "ui";
};

export default function ProjectsSection() {
    const [activeFilter, setActiveFilter] = useState<string>("all");
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const projects: Project[] = [
        {
            title: "E-Commerce Platform",
            description: "Full-featured online store with React and Node.js",
            lastUpdated: "2023-10-15",
            imageUrl: "/FashionNest.png",
            tags: ["React", "Node.js", "MongoDB"],
            category: "fullstack"
        },
        {
            title: "Admin Dashboard",
            description: "Responsive admin panel with analytics",
            lastUpdated: "2023-09-20",
            imageUrl: "/inotebook.jpg",
            tags: ["React", "Tailwind", "Chart.js"],
            category: "frontend"
        },
        {
            title: "REST API Service",
            description: "Scalable backend service with authentication",
            lastUpdated: "2023-11-05",
            imageUrl: "/portfolio.jpg",
            tags: ["Node.js", "Express", "JWT"],
            category: "backend"
        },
        {
            title: "UI Component Library",
            description: "Reusable React components with Storybook",
            lastUpdated: "2023-08-12",
            imageUrl: "/reactnative.jpg",
            tags: ["React", "TypeScript", "Storybook"],
            category: "ui"
        }
    ];

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }
    }, []);

    const filteredProjects = activeFilter === "all"
        ? projects
        : projects.filter(project => project.category === activeFilter);

    useEffect(() => {

        const ctx = gsap.context(() => {
            ScrollTrigger.batch(".project-card", {
                start: "top 80%",
                onEnter: batch => gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: "back.out(1.2)"
                }),
                onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: 50 })
            });

            gsap.to(".filter-dropdown", {
                height: isFilterOpen ? "auto" : 0,
                opacity: isFilterOpen ? 1 : 0,
                duration: 0.3,
                ease: "power2.inOut"
            });
        });

        return () => ctx.revert();
    }, [isFilterOpen]);

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        My Projects
                    </h2>
                    <p className="text-xl text-gray-300 mb-6">
                        Filter by category
                    </p>

                    <div className="relative max-w-xs mx-auto mb-12">
                        <button
                            suppressHydrationWarning={true}
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
                        >
                            <FontAwesomeIcon icon={faFilter} />
                            {activeFilter === "all" ? "All Projects" : `${activeFilter} Projects`}
                        </button>

                        <div className="filter-dropdown absolute top-full left-0 right-0 bg-white/10 rounded-b-lg overflow-hidden shadow-lg z-20 backdrop-blur-sm">
                            <div className="p-2 space-y-1">
                                {["all", "frontend", "backend", "fullstack", "ui"].map(filter => (
                                    <button
                                        suppressHydrationWarning={true}
                                        key={filter}
                                        onClick={() => {
                                            setActiveFilter(filter);
                                            setIsFilterOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-2 rounded-md transition-colors ${activeFilter === filter ? 'bg-blue-500 text-green-500' : 'text-blue-500 hover:bg-white/20'}`}
                                    >
                                        {filter === "all" ? "All Projects" : `${filter.charAt(0).toUpperCase() + filter.slice(1)} Projects`}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <AnimatedProjectCard
                            key={index}
                            className="project-card opacity-0 translate-y-10"
                            title={project.title}
                            description={project.description}
                            lastUpdated={project.lastUpdated}
                            imageUrl={project.imageUrl}
                            tags={project.tags}
                            icon={
                                project.category === "frontend" ? (
                                    <FontAwesomeIcon icon={faCode} className="text-blue-400" />
                                ) : project.category === "backend" ? (
                                    <FontAwesomeIcon icon={faServer} className="text-green-400" />
                                ) : project.category === "ui" ? (
                                    <FontAwesomeIcon icon={faPaintBrush} className="text-purple-400" />
                                ) : (
                                    <FontAwesomeIcon icon={faMobile} className="text-yellow-400" />
                                )
                            }
                            overlayColor={
                                project.category === "frontend" ? "bg-blue-500" :
                                    project.category === "backend" ? "bg-green-500" :
                                        project.category === "ui" ? "bg-purple-500" : "bg-yellow-500"
                            }
                            hoverScale={1.03}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}