import AboutSection from "@/components/sections/home/About.home";
import ContactSection from "@/components/sections/home/Contact.home";
import ExperienceSection from "@/components/sections/home/Experience.home";
import HeroSection from "@/components/sections/home/Hero.home";
import ProjectSection from "@/components/sections/home/Project.home";
import TechStackSection from "@/components/sections/home/TechStack.home";

const HomePage = () => {
  return (
    <div className="px-6 md:px-12 py-16 flex flex-col gap-24">
      <HeroSection />
      <ProjectSection />
      <TechStackSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
