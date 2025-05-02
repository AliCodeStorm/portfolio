"use client";
import { MorphingText } from "@/components/magicui/morphing-text";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { PulsatingButton } from "@/components/magicui/pulsating-button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import SocialIcons from "@/components/Icons/SocialTypeIcons";
import AnimationPic from "./AnimationPic";

function ModernHeroSection() {
  return (
    <div className="ml-4 sm:ml-0 relative w-full min-h-screen flex flex-col justify-center overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className=" w-full md:w-1/2 z-20 order-2 md:order-1 mt-10 md:mt-0">
          <LineShadowText
            id="home"
            className="text-lg sm:text-xl md:text-2xl lg:text-[1.5rem] font-bold duration-1000 ease-out hover:text-green-700"
          >
            Hello, I'm a
          </LineShadowText>

          <MorphingText
            texts={[
              "MERN Stack Developer",
              "Frontend Developer",
              "React Developer",
              "Next.js Developer",
              "Full Stack Developer",
              "Backend Developer",
            ]}
            className="mt-4 text-cyan-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left"
          />

          <p className="text-white mt-6 max-w-full md:max-w-[500px] text-left text-sm sm:text-base md:text-[1.1rem] font-sans">
            Passionate Frontend Developer with strong skills in building responsive and dynamic web applications using React.js, Next.js, HTML, CSS, and JavaScript. Experienced in developing full-stack projects using Node.js, Express, and MongoDB for backend services. Currently expanding knowledge in advanced Next.js and backend optimization. Actively seeking internship opportunities to further enhance skills and contribute to real-world projects.
          </p>


          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mt-6 md:mt-10">
            <PulsatingButton className="rounded-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto px-6 py-2 text-sm sm:text-base">
              View My Work
            </PulsatingButton>

            <ShimmerButton className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto px-6 py-2 text-sm sm:text-base">
              Get In Touch
            </ShimmerButton>
          </div>

          <SocialIcons className="text-white mt-12" />

          <div className="w-full md:w-1/2 z-10 order-1 md:order-2 flex justify-center md:justify-end mt-10 md:mt-0">
            <AnimationPic className="relative md:absolute w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] top-0 md:top-1/2 md:-translate-y-1/2 right-0 md:right-10 lg:right-20 xl:right-40" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModernHeroSection;
