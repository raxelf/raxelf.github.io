import AboutSection from "@/components/sections/home/About.home";
import CertificationSection from "@/components/sections/home/Certification.home";
import ContactSection from "@/components/sections/home/Contact.home";
import ExperienceSection from "@/components/sections/home/Experience.home";
import HeroSection from "@/components/sections/home/Hero.home";
import ProjectSection from "@/components/sections/home/Project.home";
import TechStackSection from "@/components/sections/home/TechStack.home";

const HomePage = () => {
  return (
    <div className="px-12 py-16 flex flex-col gap-24">
      <HeroSection />
      <ProjectSection />
      <TechStackSection />
      <AboutSection />
      <ExperienceSection />
      <CertificationSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
