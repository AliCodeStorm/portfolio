"use client";
import AboutSection from "@/components/AboutSection/AboutSection";
import Contact from "@/components/ContactSections/ContactSec"
import ModernHeroSection from "@/components/HeroSection/HeroSection";
import ProjectsSection from "@/components/ProjectSection/ProjectSection";
import SkillsSection from "@/components/SkillSection/SkillSection";

export default function Home() {
  return (
    <main>
      <ModernHeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <Contact />
    </main>
  );
}
